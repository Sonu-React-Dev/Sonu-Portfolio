import { ArrowLink } from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-background-primary flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <h1 className="text-[12rem] md:text-[20rem] font-bold tracking-tighter text-foreground-primary/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        404
      </h1>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground-primary mb-4">
          Page not found
        </h2>
        <p className="text-lg text-foreground-secondary mb-10 max-w-md">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>
        <ArrowLink href="/">
          Return Home
        </ArrowLink>
      </div>
    </div>
  );
}
