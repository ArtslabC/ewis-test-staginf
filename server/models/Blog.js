const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String },
    content: { type: String, required: true },
    cover: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    slug: { type: String, unique: true }, // Add slug field
}, { timestamps: true });

const Blog = model('Blog', BlogSchema);
module.exports = Blog;
