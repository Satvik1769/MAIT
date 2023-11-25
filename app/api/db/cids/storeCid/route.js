import prisma from "@/prisma/prismaClient";
import jwt from "next-auth/jwt";

const verifySession = async (token) => {
  const user = await jwt.verify({ secret: process.env.NEXTAUTH_SECRET, token });
  if (!user) {
    console.log("no user");
    return false;
  }
  // check if user exists and phone is verified
  const dbUser = await prisma.user.findUnique({
    where: {
      username: user.username,
    },
  });
  if (user.phone != dbUser.phone) return false;
  return true;
};

const handler = async (req) => {
  try {
    const data = await req.json();
    const nextCookie =
      req.cookies.get("next-auth.session-token") ||
      req.cookies.get("__Secure-next-auth.session-token");
    if (!nextCookie) {
      return new NextResponse({ error: "You must be logged" });
    }
    const isValidSession = await verifySession(nextCookie);
    if (!isValidSession) {
      return new NextResponse({ error: "Invalid session" });
    }
    const { cid, type, phone } = data;
    const addData = await prisma.documents.create({
      data: {
        cid,
        type: type.toUpperCase(),
        phone: phone.toString(),
      },
    });
    if (!addData) {
      return new NextResponse({ error: "Error adding document" });
    }
    return new NextResponse({ message: "Document added successfully" });
  } catch (error) {
    console.log(error, "error");
    return new NextResponse({ error: "Error adding document" });
  }
};
export { handler as POST };
