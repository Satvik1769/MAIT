// middleware is applied to all routes, use conditionals to select
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { url } from "@/constants";
export default withAuth(
  function middleware(req) {
    console.log("Incoming request:", req.method, req.url);
    const nextSession = req.cookies.get("next-auth.session-token");
    const nextSessionSecure = req.cookies.get(
      "__Secure-next-auth.session-token"
    );
    if (!(nextSession || nextSessionSecure)) {
      console.log("redirecting to /");
      return NextResponse.redirect(
        url +
          "/auth?error=" +
          JSON.stringify("You must be logged in to play games")
      );
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/dash/:path*"],
};
