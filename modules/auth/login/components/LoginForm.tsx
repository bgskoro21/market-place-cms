"use client";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Label from "@/components/Label";
import Link from "next/link";
import { useActionState } from "react";
import Title from "../../components/Title";
import LinkAuth from "../../components/LinkAuth";

interface LoginFormProps {
  loginAction: (prevState: any, payload: FormData) => any;
}

const LoginForm: React.FC<LoginFormProps> = ({ loginAction }) => {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);

  const errors = state?.errors || {};
  return (
    <>
      <Title title="LOGIN" />
      {state != undefined && state.statusCode != 200 && typeof state.errors == "string" && <Alert status="error" message={state.errors} />}
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="email" title="Email" />
          <InputField name="email" type="email" id="email" placeholder="Enter your email" defaultValue={state != undefined ? state.fields.email : ""} error={errors.email?.[0]} />
        </div>
        <div>
          <Label htmlFor="password" title="Password" />
          <InputField name="password" type="password" id="password" placeholder="Enter your password" error={errors.password?.[0]} />
        </div>
        <Button type="submit" loading={isPending} label="LOGIN" />
      </form>
      <LinkAuth to="/auth/register" title="Don't have an account?" linkTitle="Sign Up" />
    </>
  );
};

export default LoginForm;
