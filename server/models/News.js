const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const NewsSchema = new Schema(
  {
    newsTitle: { type: String, required: true },
    description: { type: String },
    source: { type: String },
    imageFile: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

const News = model("News", NewsSchema);
module.exports = News;
