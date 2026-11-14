// 링크별 클릭 수 — clicks 컬렉션에 { _id: 링크 id, count: 숫자 } 형태로 저장합니다.
import { getDb } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number };

async function clicksCollection() {
  const db = await getDb();
  return db.collection<ClickDoc>("clicks");
}

/** 주어진 링크들의 클릭 수를 한 번에 가져옵니다. 기록이 없는 링크는 0입니다. */
export async function getClickCounts(ids: string[]): Promise<Record<string, number>> {
  const col = await clicksCollection();
  const docs = await col.find({ _id: { $in: ids } }).toArray();
  const counts: Record<string, number> = Object.fromEntries(ids.map((id) => [id, 0]));
  for (const doc of docs) counts[doc._id] = doc.count;
  return counts;
}

/** 링크의 클릭 수를 1 늘리고 늘어난 값을 돌려줍니다. 처음 클릭이면 문서를 새로 만듭니다. */
export async function incrementClick(id: string): Promise<number> {
  const col = await clicksCollection();
  const doc = await col.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.count ?? 1;
}
