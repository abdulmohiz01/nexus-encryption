// Import necessary modules
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Define a function to handle POST requests
export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Create a transporter object using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Note: Ensure this is lowercase 'gmail'
      auth: {
        user: process.env.EMAIL_FROM, // Ensure these environment variables are set correctly
        pass: process.env.PASS,
      },
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // Make sure this is set up in your environment variables
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}

// Define a function to handle GET requests (if needed)
export async function GET(request) {
  return NextResponse.json({ message: 'This is a GET request' }, { status: 200 });
}

// Similarly, you can define and export functions for other HTTP methods like PUT, DELETE, etc.
