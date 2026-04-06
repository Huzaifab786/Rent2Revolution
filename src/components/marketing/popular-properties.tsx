import { popularProperties } from "@/lib/mock-data";
import { PropertyCard } from "@/components/marketing/property-card";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/marketing/marquee";

export function PopularProperties() {
  return (
    <section className="group py-14 md:py-18">
      <div className="site-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              Popular homes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Discover homes families love
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A curated selection of mid-range properties across the UK - warm,
              modern, and ready to view.
            </p>
          </div>

          <Button className="w-fit rounded-full bg-[#2f271f] text-white hover:bg-[#44392f]">
            Browse All Properties
          </Button>
        </div>

        <Marquee className="mt-8" pauseOnHover>
          {popularProperties.map((p) => (
            <div key={p.id} className="w-[320px] sm:w-[350px]">
              <PropertyCard p={p} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
