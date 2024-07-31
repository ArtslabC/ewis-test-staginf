const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Request password reset
router.post("/send-message", async (req, res) => {
  const { email, subject, message } = req.body;
  if (
    email == "" ||
    email == undefined ||
    email == null ||
    subject == "" ||
    subject == undefined ||
    subject == null ||
    message == "" ||
    message == undefined ||
    message == null
  ) {
    res.status(500).json({ message: "Something Went wrong" });
  } else {
    try {
      // Send email with the reset token
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        to: process.env.COMPANY_MAIL,
        from: process.env.EMAIL_USER,
        subject: subject,
        text: `You got a message.\n\n
        email:\n
        ${email}\n\n
        subject:\n
        ${subject}\n\n
        message.\n
        ${message}
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({
        message: "Message has been sent",
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
});

module.exports = router;
