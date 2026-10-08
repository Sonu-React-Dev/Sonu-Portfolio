import * as React from "react";
import { cn } from "@/lib/cn";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-subtle bg-background-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-foreground-secondary backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
