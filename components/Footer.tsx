import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 sm:py-8">
      <div className="container-x flex flex-col items-center justify-between gap-2.5 text-xs text-zinc-500 sm:flex-row text-center sm:text-left">
        <div>© {new Date().getFullYear()} {profile.name}. Built with intention.</div>
        <div className="text-zinc-500">{profile.role} · {profile.location}</div>
      </div>
    </footer>
  );
}

