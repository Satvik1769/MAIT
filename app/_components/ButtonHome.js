"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ButtonHome = () => {
  const router = useRouter();
  const session = useSession();
  const handleClick = () => {
    if (session && session.status === "authenticated") {
      router.push("/u/dashboard");
    } else {
      router.push("/auth?error=login to continue");
    }
  };
  return (
    <>
      <button onClick={handleClick} className="btnPrimary">
        Retrieve Your Documents Securely
      </button>
    </>
  );
};

export default ButtonHome;
