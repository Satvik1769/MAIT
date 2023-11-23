import prisma from "../../../../../../../prisma/prismaClient";

async function handler(req, { params }) {
  const { type, phone } = params;
  const cid = await prisma.documents.findFirst({
    where: {
      type: type.toUpperCase(),
      phone: phone,
    },
  });
  console.log(cid, "data", type, phone);

  return new Response(JSON.stringify(cid));
}

export { handler as GET };
