import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PropertyCardData } from "@/lib/mock-data";

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function PropertyCard({ p }: { p: PropertyCardData }) {
  return (
    <Card className="overflow-hidden rounded-3xl border bg-card shadow-softSm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative">
        <Image
          src={p.imageSrc}
          alt={`${p.city} property`}
          width={1200}
          height={800}
          className="h-56 w-full object-cover"
        />

        <div className="absolute left-4 top-4">
          <Badge className="rounded-full bg-background/90 text-foreground hover:bg-background/90">
            {p.city}, UK
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>

        <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>{p.beds} Bedrooms</span>
          <span>•</span>
          <span>{p.sqft.toLocaleString()} sq ft</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            {formatGBP(p.priceGBP)}
          </div>
          <Button variant="secondary" className="rounded-full">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}