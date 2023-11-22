"use client";
import { useRouter } from "next/navigation";
const ButtonLogin = ({ text = "login" }) => {
  const isLogin = text === "login";
  const router = useRouter();
  const handleClick = () => {
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
      {text}
    </button>
  );
};

export default ButtonLogin;
