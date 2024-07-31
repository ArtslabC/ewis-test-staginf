const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const dotenv = require('dotenv');
const Job = require('../models/Job'); // Ensure the correct path to the Job model

// Load environment variables
dotenv.config();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/apply', upload.single('cv'), async (req, res) => {
  const { name, email, jobId, jobTitle } = req.body; // Extract jobTitle from the request body
  const cv = req.file;

  console.log('Received application:', { name, email, jobId, jobTitle });
  console.log('Received file:', cv);

  try {
    // Fetch the job details to get the recipient email
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: job.recipientEmail, // Use recipient email from the job
      cc: 'lahiru@artslabcreatives.com', // Static email for CC
      subject: `Job Application for ${jobTitle} (Job ID: ${jobId})`, // Include jobTitle in the subject
      text: `Name: ${name}\nEmail: ${email}\nJob ID: ${jobId}\nJob Title: ${jobTitle}`,
      attachments: [
        {
          filename: cv.originalname,
          path: cv.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit application. Please try again.', error: error.message });
  }
});

module.exports = router;
