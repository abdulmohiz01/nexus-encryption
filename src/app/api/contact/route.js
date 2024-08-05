
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    // console.log(data);
    console.log(process.env.emailTo, process.env.emailFrom);
    const { name, email, subject, message } = data;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.emailFrom,
        pass: process.env.pass,
      },
    });
    const mailOptions = {
      from: process.env.emailFrom,
      to: process.env.emailTo,
      subject: `${subject}`,
      text: `Name: ${name} \nEmail: ${email}\n\nMessage: ${message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      }
      else {
        console.log('Email Sent: ' + info.response);
      }
    });


    return NextResponse.json({ message: 'Data received successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
 
export async function GET(request) { 
  return NextResponse.json({ message: 'This is a GET request' }, { status: 200 });
}
