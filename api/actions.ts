"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function index() {
  // ...
  const data = await prisma.memory.findMany();
  return data;
}

export async function unique(id: number) {
  // ...
  const data = await prisma.memory.findUnique({
    where: {
      id: id,
    },
  });
  return data;
}

export async function create(name: string, memory: string) {
  // ...
  await prisma.memory.create({
    data: {
      name: name,
      content: memory,
    },
  });
}
