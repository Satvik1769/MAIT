"use client";
import { SessionProvider } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const SessionWrapper = ({ children }) => {
  return <SessionProvider session={authOptions}>{children}</SessionProvider>;
};

export default SessionWrapper;
