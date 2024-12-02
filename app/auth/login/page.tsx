import LoginForm from "@/modules/auth/login";
import { loginAction } from "./action";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BagasShop - Login",
  description: "Login your account",
};

export default function LoginPage() {
  return (
    <>
      <LoginForm loginAction={loginAction} />
    </>
  );
}
