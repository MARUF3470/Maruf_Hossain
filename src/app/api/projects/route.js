import { writeFile } from "fs/promises";
import { Project } from "@/services/project.service"
const { uri } = require("@/services/DbConnect")
const { default: mongoose } = require("mongoose")
const { NextResponse } = require("next/server")

export const GET = async (req) => {
    let data = []
    try {
        await mongoose.connect(uri)
        data = await Project.find()

    } catch (error) {
        data = { message: error.message }
    }
    return NextResponse.json(data)
}
export const POST = async (req) => {
    await mongoose.connect(uri)
    const data = await req.formData()
    const name = await data.get('name')
    const description = await data.get('description')
    const type = await data.get('type')
    const liveSite = await data.get('liveSite')
    const clientSide = await data.get('clientSide')
    const serverSide = await data.get('serverSide')
    const technologiesData = await data.get('technologies')
    const technologies = technologiesData.split(',')

    const imageFilesWithFeatures = [];
    for (const [name, value] of data) {
        if (name.startsWith('images[')) {
            // Process the image data
            const file = value;
            const byteData = await file.arrayBuffer();
            const buffer = Buffer.from(byteData);
            const path = `./public/${file.name}`;
            await writeFile(path, buffer);
            const index = parseInt(name.match(/\d+/)[0], 10); //is used to extract the index from the field name
            const feature = data.get(`features[${index}]`);
            imageFilesWithFeatures.push({
                path: path,
                originalName: file.name,
                feature: feature,
            });
        }
    }
    const savedProducts = await Project.create({ name, description, type, liveSite, clientSide, serverSide, technologies, imageFilesWithFeatures });
    return NextResponse.json({ 'message': 'file uploaded successfully', success: true })
}