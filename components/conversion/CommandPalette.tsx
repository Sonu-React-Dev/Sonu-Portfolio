"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { profile, projects } from "@/data/portfolio";
import { Search, Monitor, User, Briefcase, Mail, FileText, Code2 } from "lucide-react";
import { useTheme } from "next-themes";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background-primary/80 backdrop-blur-sm flex items-start justify-center p-4 pt-[15vh]">
      <Command.Dialog 
        open={open} 
        onOpenChange={setOpen}
        className="w-full max-w-xl bg-background-secondary border border-border-subtle rounded-xl shadow-2xl overflow-hidden flex flex-col"
        label="Global Command Menu"
      >
        <div className="flex items-center border-b border-border-subtle px-4">
          <Search className="w-5 h-5 text-foreground-muted mr-2" />
          <Command.Input 
            placeholder="Type a command or search..." 
            className="flex-1 h-14 bg-transparent outline-none text-foreground-primary placeholder:text-foreground-muted"
          />
          <div className="text-[10px] uppercase font-bold tracking-widest text-foreground-muted bg-background-primary px-2 py-1 rounded border border-border-subtle">ESC</div>
        </div>

        <Command.List className="max-h-[400px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-foreground-secondary">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-semibold text-foreground-muted px-2 py-2">
            <Command.Item onSelect={() => runCommand(() => router.push("/"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              <Monitor className="w-4 h-4" /> Home
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#work"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              <Briefcase className="w-4 h-4" /> Work
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#about"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              <User className="w-4 h-4" /> About
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/#contact"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              <Mail className="w-4 h-4" /> Contact
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/resume"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              <FileText className="w-4 h-4" /> Resume
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Projects" className="text-xs font-semibold text-foreground-muted px-2 py-2 mt-2 border-t border-border-subtle">
            {projects.slice(0, 5).map((p) => (
              <Command.Item 
                key={p.slug}
                onSelect={() => runCommand(() => router.push(`/work/${p.slug}`))} 
                className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary"
              >
                <Code2 className="w-4 h-4" /> {p.title}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Theme" className="text-xs font-semibold text-foreground-muted px-2 py-2 mt-2 border-t border-border-subtle">
            <Command.Item onSelect={() => runCommand(() => setTheme("light"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              Light Mode
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setTheme("dark"))} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-primary rounded-md cursor-pointer hover:bg-background-primary transition-colors aria-selected:bg-background-primary">
              Dark Mode
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  );
}
