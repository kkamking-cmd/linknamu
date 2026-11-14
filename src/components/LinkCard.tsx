import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border-2 border-zinc-900 bg-white px-5 py-4 text-center text-lg font-semibold transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:translate-y-0 dark:border-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
    >
      {link.label}
    </a>
  );
}
