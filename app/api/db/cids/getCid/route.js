import prisma from "../../../../../prisma/prismaClient";

async function handler(req) {
  const cids = await prisma.documents.findMany();
  return new Response(JSON.stringify(cids));
}

export { handler as GET, handler as POST };
