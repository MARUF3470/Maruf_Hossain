const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    liveSite: String,
    clientSide: String,
    serverSide: String,
    imageFilesWithFeatures: [
        {
            path: String,
            originalName: String,
            feature: String
        },

    ],
    technologies: [String]
})

export const Project = mongoose.models.projects || mongoose.model('projects', productSchema)