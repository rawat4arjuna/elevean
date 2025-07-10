import { PrismaClient } from "@/generated/prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export async function POST(req) {
  const { username, email, password } = await req.json();

  try {
    // Check if user with the same email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            username: username,
          },
        ],
      },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({
          error: "User with this email or username already exists",
        }),
        {
          status: 409, // Conflict status code
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return new Response(JSON.stringify(newUser), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({
        error: "Error creating user",
      }),
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
