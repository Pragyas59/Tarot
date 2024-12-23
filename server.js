const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your app password
  },
});

// Route to handle booking form
app.post("/send-booking", (req, res) => {
  const { name, email, date, time } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "khajanchivibha@gamil.com",
    subject: "New Booking Received",
    text: `You have a new booking:
    Name: ${name}
    Email: ${email}
    Date: ${date}
    Time: ${time}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Booking email sent successfully.");
    }
  });
});

// Route to handle contact form
app.post("/send-query", (req, res) => {
  const { contactName, contactEmail, message } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "khajanchivibha@gamil.com",
    subject: "New Query Received",
    text: `You have a new query:
    Name: ${contactName}
    Email: ${contactEmail}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Query email sent successfully.");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
