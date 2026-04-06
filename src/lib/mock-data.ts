export type PropertyCardData = {
  id: string;
  title: string;
  city:
    | "London"
    | "Manchester"
    | "Birmingham"
    | "Leeds"
    | "Bristol"
    | "Glasgow";
  imageSrc: string;
  beds: number;
  sqft: number;
  priceGBP: number;
};

export const popularProperties: PropertyCardData[] = [
  {
    id: "london-elmwood",
    title: "Elmwood Gardens",
    city: "London",
    imageSrc: "/images/properties/p1.png",
    beds: 3,
    sqft: 1450,
    priceGBP: 425000,
  },
  {
    id: "manchester-harbor",
    title: "Harbor Street House",
    city: "Manchester",
    imageSrc: "/images/properties/p2.png",
    beds: 4,
    sqft: 1680,
    priceGBP: 385000,
  },
  {
    id: "birmingham-riverside",
    title: "Riverside Mews",
    city: "Birmingham",
    imageSrc: "/images/properties/p3.png",
    beds: 3,
    sqft: 1320,
    priceGBP: 310000,
  },
  {
    id: "leeds-brookfield",
    title: "Brookfield Row",
    city: "Leeds",
    imageSrc: "/images/properties/p1.png",
    beds: 2,
    sqft: 1180,
    priceGBP: 275000,
  },
  {
    id: "bristol-willow",
    title: "Willow Gate House",
    city: "Bristol",
    imageSrc: "/images/properties/p2.png",
    beds: 4,
    sqft: 1760,
    priceGBP: 465000,
  },
  {
    id: "glasgow-courtyard",
    title: "Courtyard Residence",
    city: "Glasgow",
    imageSrc: "/images/properties/p3.png",
    beds: 3,
    sqft: 1495,
    priceGBP: 335000,
  },
];
