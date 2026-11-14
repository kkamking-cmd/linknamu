// GET /api/clicks — 모든 링크의 현재 클릭 수를 한 번에 돌려줍니다.
import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";
import { links } from "@/data/profile";

export async function GET() {
  await connection(); // 빌드 때 미리 만들지 않고, 요청마다 DB에서 읽습니다.
  try {
    const counts = await getClickCounts(links.map((link) => link.id));
    return Response.json({ counts }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[clicks] 클릭 수 조회 실패", err);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
