const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const JobSchema = new Schema({
  jobTitle: { type: String, required: true },
  jobSummary: { type: String, required: true },
  jobDescription: { type: String, required: true },
  skills: [{ type: String, required: true }],
  jobType: { type: String, required: true },
  modality: { type: String, required: true },
  recipientEmail: { type: String, required: true }, // Add recipient email field
  createdAt: { type: Date, default: Date.now }
});

const Job = model('Job', JobSchema);
module.exports = Job;
