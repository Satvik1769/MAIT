"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../_components/Logo";

export default function page() {
  const error = useSearchParams().get("error");
  const [isLoginPage, setIsLoginPage] = useState(true);
  useEffect(() => {
    if (error) {
      alert("Error: " + error);
    }
  }, [error]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    signIn("credentials", {
      callbackUrl: "/",
      username,
      password,
      type: isLoginPage ? "login" : "register",
    })
      .then(() => {
        console.log("signed in");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div
      className="fccc w-full h-full"
      // style={{
      //   backgroundColor: "transparent",
      //   backgroundImage: "url('/loginScreen.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "top",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Logo width={82} fontSize={64} />
      <div
        className="loginbox fcc gap-y-10 mt-12"
        // style={{
        //   backgroundColor: "transparent",
        //   backgroundImage: "url('/bgBoxLong.png')",
        //   backgroundSize: "contain",
        //   backgroundPosition: "top",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {isLoginPage ? "Login" : "Register"}
        </h2>
        <div className="flex flex-col w-full gap-y-5 min-w-[300px]">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="email"
            name=""
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name=""
            placeholder="Password"
          />
          <button
            className="btnPrimary"
            type="button"
            id="signIn"
            onClick={handleClick}
            disabled={username?.length < 3 || password?.length < 3}
          >
            {isLoginPage ? "Log In" : "Register"}
          </button>
          <button
            id="signUp"
            className="mt-5"
            onClick={() => {
              setIsLoginPage(!isLoginPage);
            }}
          >
            {isLoginPage
              ? "Create new acount? Register"
              : "Already Registered? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
