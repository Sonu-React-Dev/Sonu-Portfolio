import { clients } from "@/data/portfolio";
import { SmartImage } from "../ui/SmartImage";

export function ClientStrip() {
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="group border-y border-border-subtle bg-background-secondary py-8 overflow-hidden flex">
      <div className="flex shrink-0 animate-marquee gap-16 md:gap-24 px-8 min-w-full items-center justify-around">
        {clients.map((client, i) => (
          <div key={`client-1-${i}`} className="flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105">
            {client.logo ? (
              <SmartImage src={client.logo} alt={client.name} width={120} height={40} className="max-w-[100px] sm:max-w-[120px] max-h-[30px] sm:max-h-[40px] object-contain dark:invert" />
            ) : (
              <span className="font-bold text-foreground-muted tracking-wider uppercase text-sm sm:text-base">{client.name}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee gap-16 md:gap-24 px-8 min-w-full items-center justify-around" aria-hidden="true">
        {clients.map((client, i) => (
          <div key={`client-2-${i}`} className="flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105">
            {client.logo ? (
              <SmartImage src={client.logo} alt={client.name} width={120} height={40} className="max-w-[100px] sm:max-w-[120px] max-h-[30px] sm:max-h-[40px] object-contain dark:invert" />
            ) : (
              <span className="font-bold text-foreground-muted tracking-wider uppercase text-sm sm:text-base">{client.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
