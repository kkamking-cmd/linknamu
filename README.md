# 링크 나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스입니다. 기획은 [PRD.md](PRD.md), 화면 구성은 [wireframe.png](wireframe.png)를 참고하세요.

## 기술 스택
Next.js 16(App Router) · TypeScript · Tailwind CSS 4 · MongoDB Atlas(클릭 수) · Vercel(배포)

## 실행 방법
Node.js 20 이상(LTS 권장)이 필요합니다.

```bash
npm install      # 처음 한 번
npm run dev      # 개발 서버 → http://localhost:3000
npm run build    # 배포용 빌드
npm run lint     # 코드 검사
```

환경 변수(MongoDB 접속 주소 등)는 `.env.local`에 넣고, 이 파일은 절대 커밋하지 않습니다.
