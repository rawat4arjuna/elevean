import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable for secret

export default async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // **IMPORTANT**: Replace with secure password comparison using bcrypt
    // Example (assuming you have bcrypt installed and used it for hashing on signup):
    // const bcrypt = require('bcrypt');
    // if (user && await bcrypt.compare(password, user.password)) {
    if (user && user.password === password) {
      // Successful login
      const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' }); // Token expires in 1 hour

      return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
    } else {
      // Invalid credentials
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}