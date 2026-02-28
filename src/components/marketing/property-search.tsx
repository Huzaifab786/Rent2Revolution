"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SearchValues = {
  location: string;
  type: string;
  price: string;
};

const LOCATIONS = ["London", "Manchester", "Birmingham", "Leeds", "Liverpool"];
const TYPES = ["Flat", "Detached", "Semi-Detached", "Townhouse"];
const PRICES = ["£150,000 - £250,000", "£250,000 - £400,000", "£400,000 - £750,000"];

export function PropertySearch() {
  const [values, setValues] = React.useState<SearchValues>({
    location: "",
    type: "",
    price: "",
  });

  function onSearch() {
    console.log("Search:", values);
  }

  return (
    <Card className="rounded-3xl border bg-card/90 p-4 shadow-soft backdrop-blur md:p-5">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.2fr)_auto] md:items-end">
        {/* Location */}
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground">Location</div>
          <Select
            value={values.location}
            onValueChange={(v) => setValues((s) => ({ ...s, location: v }))}
          >
            <SelectTrigger className="h-11 w-full rounded-2xl">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type */}
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground">Property Type</div>
          <Select
            value={values.type}
            onValueChange={(v) => setValues((s) => ({ ...s, type: v }))}
          >
            <SelectTrigger className="h-11 w-full rounded-2xl">
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
              {TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground">Price Range</div>
          <Select
            value={values.price}
            onValueChange={(v) => setValues((s) => ({ ...s, price: v }))}
          >
            <SelectTrigger className="h-11 w-full rounded-2xl">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {PRICES.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* CTA */}
        <Button onClick={onSearch} className="h-11 rounded-full px-7">
          Search
        </Button>
      </div>
    </Card>
  );
}