import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-glass-border bg-glass px-6 py-4.5 text-center text-[0.975rem] font-semibold tracking-[-0.01em] text-ink shadow-card backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {link.label}
    </a>
  );
}
