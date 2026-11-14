// MongoDB 연결 — 서버(Route Handler)에서만 사용합니다.
import { MongoClient, type Db } from "mongodb";

const DB_NAME = "linknamu";

// 개발 모드에서는 파일을 고칠 때마다 모듈이 다시 실행되므로,
// 전역에 연결을 보관해 연결이 계속 늘어나는 것을 막습니다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 없습니다. .env.local(로컬) 또는 Vercel 환경 변수에 등록하세요.");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결에 실패하면 다음 요청에서 다시 시도하도록 비워 둡니다.
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(DB_NAME);
}
