"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const ButtonAuth = ({ text = "login" }) => {
  const session = useSession();
  console.log("session", session);
  let isLogout = false;
  if (session && session.data && session.status == "authenticated")
    isLogout = true;
  const isLogin = text === "login";
  const router = useRouter();
  const handleClick = () => {
    if (isLogout) {
      signOut({ callbackUrl: "/" });
      return;
    }
    if (isLogin) {
      router.push("/auth");
    } else {
      router.push("/auth?type=register");
    }
  };
  return (
    <button
      className={isLogin ? "blackBtnSml" : "whiteBtnSml"}
      onClick={handleClick}
    >
      {isLogout ? "logout" : text}
    </button>
  );
};

export default ButtonAuth;
