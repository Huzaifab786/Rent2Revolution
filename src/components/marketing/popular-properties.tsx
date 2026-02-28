import { popularProperties } from "@/lib/mock-data";
import { PropertyCard } from "@/components/marketing/property-card";
import { Button } from "@/components/ui/button";

export function PopularProperties() {
  return (
    <section className="py-14 md:py-18">
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
              A curated selection of mid-range properties across the UK—warm,
              modern, and ready to view.
            </p>
          </div>

          <Button className="w-fit rounded-full">Browse All Properties</Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {popularProperties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}