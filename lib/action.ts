"use server";
import { prisma } from "./prisma";

export async function creatUser(formData: FormData) {
  const email = String(formData.get("email"));
  const name = String(formData.get("name"));

  if (!email) return;

  const createdUser = await prisma.user.create({
    data: { email: email, name: name || "" },
  });
}
