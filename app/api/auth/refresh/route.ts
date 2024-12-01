import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies(); // Sinkron, tidak perlu await
  const refreshToken = cookieStore.get("refreshToken")?.value;

  // Kirim permintaan ke API eksternal
  const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/refresh`, { refreshToken });

  const { accessToken, refreshToken: newRefreshToken } = result.data.data;

  cookieStore.set("accessToken", accessToken);
  cookieStore.set("refreshToken", newRefreshToken);
  // Tetapkan cookie dengan header Set-Cookie

  return new Response(
    JSON.stringify({
      statusCode: 200,
      message: "Success update token!",
      data: result.data,
    })
  );
}
