"use client";
import React, { useActionState } from "react";
import { loginAction } from "./action";
import InputField from "@/components/InputField";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        {state != undefined && state.statusCode != 200 && (
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{state.errors}</span>
          </div>
        )}
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
              Email
            </label>
            <InputField name="email" type="email" id="email" placeholder="Enter your email" defaultValue={state != undefined ? state.fields.email : ""} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-3">
              Password
            </label>
            <InputField name="password" type="password" id="password" placeholder="Enter your password" />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white font-semibold rounded-md duration-300 focus:outline-none focus:ring focus:ring-indigo-200 ${isPending ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-950"}`}
            disabled={isPending}
          >
            {isPending ? <span className="loading loading-dots loading-md"></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
