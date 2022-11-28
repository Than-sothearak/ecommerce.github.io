import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
       
    },

    passoword: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);