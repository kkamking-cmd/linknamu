import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 반투명 테두리 + 아래로 떨어지는 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-glass p-1.5 shadow-avatar ring-1 ring-glass-border backdrop-blur-md">
        <Image
          src={profile.imageSrc}
          alt={`${profile.name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="size-28 rounded-full object-cover sm:size-32"
        />
      </div>
      <h1 className="mt-6 text-[1.375rem] font-bold tracking-[-0.02em] text-ink">{profile.name}</h1>
      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">{profile.bio}</p>
    </header>
  );
}
