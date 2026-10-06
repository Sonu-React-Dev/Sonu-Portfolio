import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
        <div>© {new Date().getFullYear()} {profile.name}. Built with intention.</div>
        <div>{profile.role} · {profile.location}</div>
      </div>
    </footer>
  );
}
