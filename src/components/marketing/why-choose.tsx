import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  PoundSterling,
  SlidersHorizontal,
  Headset,
} from "lucide-react";

const FEATURES = [
  {
    title: "Trusted Local Experts",
    description:
      "Local UK market insight to help you buy confidently and avoid surprises.",
    Icon: BadgeCheck,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear guidance on costs, offers, and next steps—no hidden fees.",
    Icon: PoundSterling,
  },
  {
    title: "Personalised Matching",
    description:
      "We shortlist homes that fit your lifestyle, commute, and budget.",
    Icon: SlidersHorizontal,
  },
  {
    title: "Dedicated Support Team",
    description:
      "Friendly advisors from first viewing to completion and beyond.",
    Icon: Headset,
  },
];

export function WhyChoose() {
  return (
    <section className="py-14 md:py-18">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">
            Why Havenport Realty
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A smoother way to buy in the UK
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Warm guidance, curated listings, and a process designed around real
            families—not pressure.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, description, Icon }) => (
            <Card
              key={title}
              className="group rounded-3xl border bg-card p-6 shadow-softSm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}