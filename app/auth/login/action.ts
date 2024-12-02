"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function loginAction(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      fields: { email: formData.get("email") },
    };
  }

  const result = await axios.post(
    `${apiUrl}/users/login`,
    {
      email: formData.get("email"),
      password: formData.get("password"),
    },
    {
      validateStatus: (status) => status < 500, // Status di bawah 500 tidak akan dianggap error
    }
  );

  if (result.status != 200) {
    return { ...result.data, fields: { email: formData.get("email") } };
  }

  const cookieStore = await cookies();
  cookieStore.set("accessToken", result.data.data.accessToken);
  cookieStore.set("refreshToken", result.data.data.refreshToken);

  revalidatePath("/");
  redirect("/");
}
