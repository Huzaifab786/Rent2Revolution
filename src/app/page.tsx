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
      <section className="relative overflow-hidden bg--background h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="site-container text-center">
          <p className="text-base md:text-lg font-medium text-muted-foreground">
            Trusted UK property experts
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
            Find Your Dream Home in the UK
          </h1>
          <p className="mt-8 mx-auto max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground">
            Helping families discover quality, mid-range homes from modern flats
            to charming townhouses with clear guidance at every step.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button className="rounded-full px-8 py-3 text-base md:text-lg">
              Browse Properties
            </Button>
            <Button
              variant="secondary"
              className="rounded-full px-8 py-3 text-base md:text-lg"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      <AboutStats />
      <AboutStats reversed />
      <AboutStats />
      <WhyChoose />
      <PopularProperties />
      <Testimonials />
      <ContactCta />
      <Footer />
    </main>
  );
}
