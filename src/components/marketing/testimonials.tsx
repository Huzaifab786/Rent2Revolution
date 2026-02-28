import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    city: "London",
    text: "Havenport made everything feel calm and clear. We found a lovely townhouse within budget and the team supported us at every step.",
  },
  {
    name: "Daniel R.",
    city: "Manchester",
    text: "Transparent, responsive, and genuinely helpful. Viewings were well-organised and we never felt pressured—just guided.",
  },
  {
    name: "Aisha K.",
    city: "Birmingham",
    text: "We were first-time buyers and had lots of questions. The advice was practical and honest, and we found a warm family home quickly.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-primary">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-14 md:py-18">
      <div className="site-container">
        <div className="rounded-[2.25rem] bg-accent/60 px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by families across the UK
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Warm service, clear communication, and homes that fit real life.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card
                key={t.name}
                className="rounded-3xl border bg-card p-6 shadow-softSm"
              >
                <Stars />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {t.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.city}, UK
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}