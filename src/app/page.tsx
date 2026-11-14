import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col px-7 pt-20 pb-16 sm:px-8 sm:pt-28">
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
