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
      <section className="relative flex h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-background">
        <Image
          src="/images/background.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.62)),radial-gradient(circle_at_top_left,rgba(216,207,188,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(86,84,73,0.18),transparent_32%)]" />

        <div className="site-container relative z-10 text-center">
          <p className="text-base font-medium text-[#5f5b50] md:text-lg">
            Trusted UK property experts
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#2f271f] md:text-7xl lg:text-8xl">
            Find Your Dream Home in the UK
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-[#5f5b50] md:text-xl lg:text-2xl">
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
