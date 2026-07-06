import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({
  path: path.join(__dirname, ".env"),
});

const app = express();

app.use(cors());
app.use(express.json());

// Serve React build
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

const smtpPort = Number(process.env.SMTP_PORT) || 587;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("SMTP verify failed:", err.message);
  } else {
    console.log("SMTP transporter ready");
  }
});

app.post("/send-email", async (req, res) => {
  const {
    user_name,
    company,
    user_email,
    phone,
    message,
  } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Tashion Website" <${process.env.SMTP_USER}>`,
      replyTo: user_email,
      to: process.env.HR_EMAIL,
      subject: `Tashion Website | New Enquiry from ${user_name}`,

      html: `
      <div style="font-family:Arial;padding:20px">
        <h2 style="color:#16a34a"> New Business Enquiry from Tashion Website</h2>
        <hr>
        <p><b>Name:</b> ${user_name}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Email:</b> ${user_email}</p>
        <p><b>Phone:</b> ${phone}</p>

        <p><b>Message:</b></p>

        <div style="
          background:#f5f5f5;
          padding:15px;
          border-radius:10px;
        ">
          ${message}
        </div>
      </div>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
      info,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// SPA fallback
app.get(/^\/(?!send-email).*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
=================================
SERVER RUNNING ON PORT ${PORT}
=================================
`);
});