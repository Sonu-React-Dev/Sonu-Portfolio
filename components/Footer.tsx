import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-6 sm:py-8">
      <div className="container-x flex flex-col items-center justify-between gap-2.5 text-xs text-foreground-muted/80 sm:flex-row text-center sm:text-left">
        <div>© {new Date().getFullYear()} {profile.name}. Built with intention.</div>
        <div className="text-foreground-muted/80">{profile.role} · {profile.location}</div>
      </div>
    </footer>
  );
}

