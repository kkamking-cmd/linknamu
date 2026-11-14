import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageSrc}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="size-36 rounded-full border-2 border-zinc-900 object-cover sm:size-40 dark:border-zinc-100"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
    </header>
  );
}
