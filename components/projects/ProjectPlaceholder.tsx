export function ProjectPlaceholder({ slug }: { slug: string }) {
  if (slug === "radheadda") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-lg border border-border-subtle p-6 flex gap-6 overflow-hidden relative">
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-background-primary rounded-md p-4 border border-border-subtle shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/20" />
                <div className="space-y-2 flex-1">
                  <div className="h-2 w-2/3 bg-border-subtle rounded" />
                  <div className="h-2 w-1/3 bg-border-subtle rounded" />
                </div>
              </div>
              <div className="h-24 w-full bg-border-subtle/50 rounded" />
            </div>
          ))}
        </div>
        <div className="w-1/3 bg-background-primary border border-border-subtle rounded-md hidden md:flex flex-col">
          <div className="p-4 border-b border-border-subtle flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent-primary/40" />
            <div className="h-2 w-1/2 bg-border-subtle rounded" />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-4">
            <div className="h-8 w-2/3 bg-accent-primary/10 rounded-lg self-end" />
            <div className="h-12 w-3/4 bg-border-subtle/50 rounded-lg" />
            <div className="h-8 w-1/2 bg-accent-primary/10 rounded-lg self-end" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-foreground-muted font-semibold bg-background-primary/80 backdrop-blur px-2 py-1 rounded">
          Interface Illustration
        </div>
      </div>
    );
  }

  if (slug === "smartclass") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-xl border border-border-subtle flex flex-col overflow-hidden relative">
        <div className="h-10 border-b border-border-subtle bg-background-primary/50 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 flex">
          <div className="w-48 border-r border-border-subtle bg-background-primary/30 p-4 space-y-4 hidden md:block">
            <div className="h-2 w-3/4 bg-border-subtle rounded" />
            <div className="h-2 w-1/2 bg-border-subtle rounded" />
            <div className="h-2 w-2/3 bg-border-subtle rounded" />
            <div className="h-2 w-5/6 bg-border-subtle rounded" />
          </div>
          <div className="flex-1 p-6 flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div className="space-y-2 w-1/3">
                <div className="h-4 w-1/2 bg-accent-primary/40 rounded" />
                <div className="h-2 w-full bg-border-subtle rounded" />
              </div>
              <div className="h-8 w-24 bg-accent-primary/20 rounded border border-accent-primary/30" />
            </div>
            <div className="border border-border-subtle rounded-lg bg-background-primary overflow-hidden">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-12 border-b border-border-subtle last:border-0 flex items-center px-4 gap-4">
                  <div className="w-6 h-6 rounded bg-border-subtle/50" />
                  <div className="h-2 w-1/4 bg-border-subtle rounded" />
                  <div className="h-2 w-1/5 bg-border-subtle rounded ml-auto" />
                  <div className="h-2 w-8 bg-green-400/40 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-foreground-muted font-semibold bg-background-primary/80 backdrop-blur px-2 py-1 rounded">
          Interface Illustration
        </div>
      </div>
    );
  }

  return null;
}
