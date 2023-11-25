import prisma from "../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { phone } = params;
  const cid = await prisma.documents.findMany({
    where: {
      phone: phone,
    },
  });
  console.log(cid);

  return new Response(JSON.stringify(cid));
}

export { handler as GET };
