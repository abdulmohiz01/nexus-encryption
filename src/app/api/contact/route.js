
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    // console.log(data);
    console.log(process.env.emailTo, process.env.emailFrom);
    const { name, email, subject, message } = data;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: process.env.emailFrom,
        pass: process.env.pass,
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    const mailOptions = {
      from: process.env.emailFrom,
      to: process.env.emailTo,
      subject: `${subject}`,
      text: `Name: ${name} \nEmail: ${email}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);


    return NextResponse.json({ message: 'Data received successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}

export async function GET(request) {
  return NextResponse.json({ message: 'This is a GET request' }, { status: 200 });
}
