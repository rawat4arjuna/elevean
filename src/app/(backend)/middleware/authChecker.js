import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "your-secret-key";

export default async function authChecker(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized: No token provided");
  }
  const token = authHeader.replace("Bearer ", "");
  try {
    jwt.verify(token, jwtSecret);
  } catch (err) {
    console.error("Token verification failed:", err);
    throw new Error("Unauthorized: Invalid token");
  }
}
