import prisma from "../../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { type, phone } = params;
  const cid = await prisma.documents.findUnique({
    where: {
      type: type,
      phone: phone,
    },
  });
  console.log(cid);

  return new Response(JSON.stringify(cid));
}

export { handler as GET };
