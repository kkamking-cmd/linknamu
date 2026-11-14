// 프로필과 링크 목록 — 이 파일만 고치면 화면 내용이 바뀝니다.

export type Profile = {
  name: string;
  bio: string;
  imageSrc: string;
};

export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile: Profile = {
  name: "김상은",
  bio: "플스택 개발자 | 요즘에는 AI 개발중",
  // 외부 이미지는 next.config.ts 의 images.remotePatterns 에 호스트를 등록해야 합니다.
  imageSrc: "https://placehold.co/160x160/orange/white/png",
};

// TODO: 실제 주소로 바꾸세요.
export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", label: "Blog", url: "https://example.com/" },
];
