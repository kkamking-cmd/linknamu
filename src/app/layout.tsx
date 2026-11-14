import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크 나무",
  description: "내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스",
};

// Pretendard(가변 굵기) — 동적 서브셋이라 화면에 쓰인 글자 묶음만 내려받습니다.
const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={PRETENDARD_CSS} crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
