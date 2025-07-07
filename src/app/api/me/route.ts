import { me } from "@/infos/me";

export async function GET() {
  return new Response(JSON.stringify(me), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
