"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

// 클릭 수는 늘기만 하므로, 늦게 도착한 응답이 더 작은 값으로 덮어쓰지 않도록 큰 값을 남깁니다.
function mergeMax(prev: Counts, next: Counts): Counts {
  const merged = { ...prev };
  for (const [id, n] of Object.entries(next)) merged[id] = Math.max(merged[id] ?? 0, n);
  return merged;
}

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 보여 줍니다.
  const [counts, setCounts] = useState<Counts>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0])),
  );

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { counts: Counts }) => setCounts((prev) => mergeMax(prev, data.counts)))
      .catch((err) => {
        if (err.name !== "AbortError") console.error("클릭 수를 불러오지 못했습니다.", err);
      });
    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1 하고, 서버 기록은 뒤에서 보냅니다(링크는 새 탭에서 그대로 열림).
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { count: number }) => setCounts((prev) => mergeMax(prev, { [id]: data.count })))
      .catch((err) => {
        console.error("클릭 수를 기록하지 못했습니다.", err);
        // 기록에 실패하면 화면에 미리 올린 1을 되돌립니다.
        setCounts((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) - 1) }));
      });
  }

  return (
    <ul className="mt-12 flex flex-col gap-4.5 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
