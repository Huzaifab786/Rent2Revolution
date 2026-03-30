import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/marketing/navbar";
import { AboutStats } from "@/components/marketing/about-stats";
import { WhyChoose } from "@/components/marketing/why-choose";
import { PopularProperties } from "@/components/marketing/popular-properties";
import { Testimonials } from "@/components/marketing/testimonials";
import { ContactCta } from "@/components/marketing/contact-cta";
import { Footer } from "@/components/marketing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/60">
        <div className="site-container grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Trusted UK property experts
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Find Your Dream Home in the UK
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Helping families discover quality, mid-range homes — from modern
              flats to charming townhouses — with clear guidance at every step.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button className="rounded-full px-6">Browse Properties</Button>
              <Button variant="secondary" className="rounded-full px-6">
                Book Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-card shadow-soft" />
            <Image
              src="/images/hero-home.png"
              alt="Modern UK home"
              width={1000}
              height={800}
              priority
              className="h-[420px] w-full rounded-[2rem] object-cover md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <AboutStats />
      <WhyChoose />
      <PopularProperties />
      <Testimonials />
      <ContactCta />
      <Footer />
    </main>
  );
}
