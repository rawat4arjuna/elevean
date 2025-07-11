import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import authChecker from "@/app/(backend)/middleware/authChecker";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    await authChecker(req);
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const pageSize = parseInt(searchParams.get("pageSize")) || 10;
    const skip = (page - 1) * pageSize;
    const [assets, total] = await Promise.all([
      prisma.asset.findMany({ skip, take: pageSize }),
      prisma.asset.count(),
    ]);
    return NextResponse.json({
      data: assets,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
      total,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}

export async function POST(req) {
  try {
    await authChecker(req);
    const data = await req.json();
    const asset = await prisma.asset.create({ data });
    return NextResponse.json(asset, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function PUT(req) {
  try {
    await authChecker(req);
    const data = await req.json();
    const { id, ...updateData } = data;
    const asset = await prisma.asset.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(asset);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
