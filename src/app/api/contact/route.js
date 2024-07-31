// Import necessary modules
import { NextResponse } from 'next/server';

// Define a function to handle POST requests
export async function POST(request) {
  try {
    const data = await request.json();
    // Process the data (e.g., send an email, save to a database)
    console.log(data);

    return NextResponse.json({ message: 'Data received successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}

// Define a function to handle GET requests (if needed)
export async function GET(request) {
  // Handle GET request (e.g., return some data)
  return NextResponse.json({ message: 'This is a GET request' }, { status: 200 });
}

// Similarly, you can define and export functions for other HTTP methods like PUT, DELETE, etc.
