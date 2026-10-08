import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export function ArrowLink({ children, href, className, ...props }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-primary",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
