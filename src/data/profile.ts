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
  name: "바이브코더",
  bio: "꿈을 먹고 사는 냉혹한 바이브코더",
  imageSrc: "/profile.svg", // 실제 사진은 public/ 에 넣고 경로만 바꾸세요.
};

// TODO: 실제 주소로 바꾸세요.
export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", label: "Blog", url: "https://example.com/" },
];
