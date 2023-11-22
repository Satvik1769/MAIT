import prisma from "../../../../prisma/prismaClient";

async function POST(req) {
  const { username, password } = await req.json();
  console.log("creating user using", username, password, "username, password");
  const user = await prisma.users.create({
    data: { username, password },
  });
  return new Response(JSON.stringify(user));
}
export { POST as POST };
