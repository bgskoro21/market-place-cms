"use client";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Label from "@/components/Label";
import { useActionState } from "react";

interface LoginFormProps {
  loginAction: (prevState: any, payload: FormData) => any;
}

const LoginForm: React.FC<LoginFormProps> = ({ loginAction }) => {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);
  return (
    <>
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
      {state != undefined && state.statusCode != 200 && <Alert status="error" message={state.errors} />}
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="email" />
          <InputField name="email" type="email" id="email" placeholder="Enter your email" defaultValue={state != undefined ? state.fields.email : ""} />
        </div>
        <div>
          <Label htmlFor="password" />
          <InputField name="password" type="password" id="password" placeholder="Enter your password" />
        </div>
        <Button type="submit" loading={isPending} label="LOGIN" />
      </form>
    </>
  );
};

export default LoginForm;
