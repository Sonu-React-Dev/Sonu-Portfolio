import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="glass rounded-3xl p-8 sm:p-12 max-w-md w-full border border-white/10">
        <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase">404 Error</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">Page Not Found</h1>
        <p className="mt-4 text-sm text-zinc-400">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            <ArrowLeft size={16} /> Return Home
          </Link>
          <Link
            href="/resume"
            className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
