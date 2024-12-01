"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function loginAction(prevState: any, formData: FormData) {
  try {
    const result = await axios.post(`${apiUrl}/users/login`, {
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.data.accessToken);
    cookieStore.set("refreshToken", result.data.data.refreshToken);
  } catch (error) {
    return { success: false, message: error };
  }

  revalidatePath("/");
  redirect("/");
}
