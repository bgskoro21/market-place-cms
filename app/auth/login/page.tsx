import LoginForm from "@/modules/login";
import { loginAction } from "./action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BagasShop - Login",
  description: "Login your account",
};

export default function LoginPage() {
  return <LoginForm loginAction={loginAction} />;
}
