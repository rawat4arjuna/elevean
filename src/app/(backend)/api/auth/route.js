import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET || "your-secret-key"; // Use environment variable for secret

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Successful login
      const token = jwt.sign(
        { id: user.id, username: user.username },
        jwtSecret,
        { expiresIn: "7d" }
      ); // Token expires in 1 hour

      return NextResponse.json(
        { message: "Login successful", token, success: true },
        { status: 200 }
      );
    } else {
      // Invalid credentials
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
