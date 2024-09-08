import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    });
    return info;
  } catch (error) {
    throw new Error('Error sending email');
  }
}

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const info = await sendEmail({
      to: email,
      subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json(info);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
