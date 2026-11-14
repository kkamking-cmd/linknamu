import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-glass-border bg-glass px-16 py-4.5 text-center text-[0.975rem] font-semibold tracking-[-0.01em] text-ink shadow-card backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {link.label}
      {/* 클릭 수 — 라벨은 가운데 그대로 두고 오른쪽 끝에 작게 표시 */}
      <span
        aria-label={`클릭 ${count}회`}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-xs font-medium text-ink-muted tabular-nums"
      >
        {count}회
      </span>
    </a>
  );
}
