"use client";

import { useActionState } from "react";
import Title from "../../components/Title";
import LinkAuth from "../../components/LinkAuth";

interface RegisterFormProps {
  registerAction: (state: any, payload: FormData) => any;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ registerAction }) => {
  const [state, formAction, isPending] = useActionState(registerAction, undefined);

  return (
    <>
      <Title title="REGISTER" />
      <LinkAuth to="/auth/login" title="Already have an account?" linkTitle="Sign In" />
    </>
  );
};

export default RegisterForm;
