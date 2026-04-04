import Image from "next/image";
import { Card } from "@/components/ui/card";

const STATS = [
  { label: "Homes Available", value: "5K+" },
  { label: "Homes Sold", value: "3K+" },
  { label: "Happy Clients", value: "1.5K+" },
];

interface AboutStatsProps {
  reversed?: boolean;
}

export function AboutStats({ reversed = false }: AboutStatsProps) {
  return (
    <section className="py-20 md:py-28">
      <div
        className={`site-container grid items-center gap-10 md:grid-cols-2 ${reversed ? "md:flex-row-reverse" : ""}`}
      >
        {/* Left: Image */}
        <div className={`relative ${reversed ? "md:order-last" : ""}`}>
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-card shadow-soft" />
          <Image
            src="/images/about-home.png"
            alt="Modern UK family home"
            width={1000}
            height={800}
            className="h-[420px] w-full rounded-[2rem] object-cover md:h-[520px]"
          />
        </div>

        {/* Right: Content */}
        <div className={reversed ? "md:order-first" : ""}>
          <p className="text-sm font-medium text-muted-foreground">
            Local knowledge, modern guidance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Helping You Find the Perfect Home
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            At Havenport Realty, we guide families and first-time buyers through
            the UK market with honest advice, clear pricing, and a curated
            selection of comfortable mid-range homes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {STATS.map((s) => (
              <Card
                key={s.label}
                className="rounded-3xl border bg-card p-5 shadow-softSm"
              >
                <div className="text-2xl font-semibold tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
