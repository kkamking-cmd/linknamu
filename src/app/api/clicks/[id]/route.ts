// POST /api/clicks/:id — 해당 링크의 클릭 수를 1 늘립니다.
import type { NextRequest } from "next/server";
import { incrementClick } from "@/lib/clicks";
import { links } from "@/data/profile";

export async function POST(_req: NextRequest, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  // profile.ts 에 있는 링크만 집계합니다(아무 id 로나 DB 문서가 생기는 것을 막음).
  if (!links.some((link) => link.id === id)) {
    return Response.json({ error: "없는 링크입니다." }, { status: 404 });
  }

  try {
    const count = await incrementClick(id);
    return Response.json({ id, count }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[clicks] 클릭 수 증가 실패", err);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 500 });
  }
}
