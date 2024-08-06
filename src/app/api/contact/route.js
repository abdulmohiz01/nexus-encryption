import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    console.log('Data received:', data);
    console.log('Sending email from:', process.env.emailFrom, 'to:', process.env.emailTo);

    const emailResponse = await resend.emails.send({
      from: `Nexus Encryption<no-reply@nexusencryption.com>`, 
      to: `${process.env.emailTo}`,
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    });

    if (emailResponse.error) {
      console.error('Error sending email:', emailResponse.error);
      return NextResponse.json({ error: emailResponse.error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}

export async function GET(request) {
  return NextResponse.json({ message: 'This is a GET request' }, { status: 200 });
}
