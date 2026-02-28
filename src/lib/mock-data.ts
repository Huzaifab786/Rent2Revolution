export type PropertyCardData = {
  id: string;
  title: string;
  city: "London" | "Manchester" | "Birmingham";
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
];