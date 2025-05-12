// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../public')));

// Route to serve main.html by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'main.html'));
});

// 📩 Contact Form Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Message from Portfolio',
      text: message,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending contact message:', error);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

// 💼 Proposal Route
app.post('/api/proposal', async (req, res) => {
  const { name, email, specialization, message, type } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Collaboration Proposal (${type})`,
      text: `
New Proposal Received:

Name: ${name}
Email: ${email}
Specialization: ${specialization}
Type: ${type}

Message:
${message}
      `,
    });

    res.status(200).json({ success: true, message: 'Proposal sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending proposal:', error);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
