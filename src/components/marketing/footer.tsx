import { Separator } from "@/components/ui/separator";

const COLS = [
  {
    title: "About",
    links: ["Our Story", "Careers", "Press", "Partnerships"],
  },
  {
    title: "Services",
    links: ["Buying Support", "Valuations", "Consultations", "Relocation Help"],
  },
  {
    title: "Properties",
    links: ["London", "Manchester", "Birmingham", "View All"],
  },
  {
    title: "Support",
    links: ["FAQs", "Contact", "Privacy Policy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="mt-10 bg-primary/95 text-primary-foreground/70">
      <div className="site-container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div>
                <div className="text-lg font-semibold tracking-tight">
                  Havenport Realty
                </div>
                <div className="text-sm ">
                  Warm, modern guidance for UK homes.
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed ">
              Helping families find comfortable mid-range homes—townhouses,
              semi-detached houses, and modern flats—across the United Kingdom.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm ">
              <span>Instagram</span>
              <span>•</span>
              <span>Facebook</span>
              <span>•</span>
              <span>LinkedIn</span>
            </div>
          </div>

          {/* Columns */}
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm ">
                {c.links.map((l) => (
                  <li key={l}>
                    <a className="hover:text-primary-foreground" href="#">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-primary-foreground/20" />

        <div className="flex flex-col gap-2 text-xs  md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Havenport Realty. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-primary-foreground" href="#">
              Privacy
            </a>
            <a className="hover:text-primary-foreground" href="#">
              Terms
            </a>
            <a className="hover:text-primary-foreground" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
