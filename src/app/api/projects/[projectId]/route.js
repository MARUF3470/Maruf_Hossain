import { uri } from "@/services/DbConnect"
import { Project } from "@/services/project.service"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async (req, content) => {
    const id = content.params.projectId
    const query = { _id: id }
    await mongoose.connect(uri)
    const result = await Project.findById(query)
    return NextResponse.json(result)
}