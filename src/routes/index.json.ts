import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const get = async () => {
	const voters = await prisma.voter.findMany()
	console.log(voters)
  return {
    body: JSON.stringify(voters)
  };
};