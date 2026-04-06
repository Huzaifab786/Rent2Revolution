import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  speed?: "normal" | "slow";
};

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  speed = "normal",
}: MarqueeProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-stretch",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-stretch">
          {items.map((item, index) => (
            <div key={`marquee-a-${index}`} className="mr-6 last:mr-6">
              {item}
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-stretch">
          {items.map((item, index) => (
            <div key={`marquee-b-${index}`} className="mr-6 last:mr-6">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
