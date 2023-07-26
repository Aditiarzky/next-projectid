import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request: Request) =>{
    const res = await prisma.product.findMany();
    return NextResponse.json(res, {status: 201});
}
