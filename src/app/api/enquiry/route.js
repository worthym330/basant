// pages/api/enquiry.js

import Cors from "cors";
// import EnquirySchema from "@/app/model/Enquiry";
import connectToDatabase from "@/app/utils/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Initialize CORS
const cors = Cors({
  methods: ["POST"],
  origin: "*", // Allow requests from any origin (or restrict it to your other project's domain)
});

// Helper function to use middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    });
    return info;
  } catch (error) {
    throw new Error("Error sending email");
  }
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors); // Use the CORS middleware
  if (req.method === "POST") {
    try {
      await connectToDatabase();
      const { email, name, mobile } = await req.json();

      // const newEnquiry = await EnquirySchema.create({ name, email, mobile });

      const info = await sendEmail({
        to: "mbasant829@gmail.com",
        subject: "New Enquiry Form Submission",
        html: `
          <p>You have received a new enquiry.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
        `,
      });

      return NextResponse.json({
        message: "Enquiry submitted successfully",
        info,
        enquiry: newEnquiry,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
