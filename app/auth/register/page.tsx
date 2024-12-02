import React from "react";
import regsiterAction from "./action";
import { Metadata } from "next";
import RegisterForm from "@/modules/auth/register";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BagasShop - Register",
  description: "Register your account",
};

const Register = () => {
  return (
    <>
      <RegisterForm registerAction={regsiterAction} />
    </>
  );
};

export default Register;
