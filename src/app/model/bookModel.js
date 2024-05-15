import mongoose from "mongoose";   
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true,

    },
    publicationDate: {
        type: String,
        required: true,

    }
});

const Books = mongoose.models.books || mongoose.model('books',schema);
module.exports =  Books;