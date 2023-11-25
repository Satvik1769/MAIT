"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../_components/Logo";
import OtpVerification from "../_components/OtpVerification";

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
  const [ph, setPh] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleClick = () => {
    console.log("username ", username, " password ", password);
    signIn("credentials", {
      callbackUrl: "/u",
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
    <div className="fccc w-full h-screen">
      <Logo width={82} fontSize={64} />
      {!isLoginPage && (
        <OtpVerification
          ph={ph}
          setPh={setPh}
          setPhoneVerified={setPhoneVerified}
        />
      )}
      <div className="loginbox fcc gap-y-10 mt-12">
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
