"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ContactCta() {
  const [email, setEmail] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Later: hook this to Resend / inquiry flow
    console.log("CTA email:", email);
    setEmail("");
  }

  return (
    <section className="py-14 md:py-18">
      <div className="site-container">
        <Card className="rounded-[2.25rem] border bg-card p-8 shadow-soft md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Quick help, no pressure
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Need Help Finding Your Ideal Home?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Share your email and we’ll send curated listings plus a quick
                consultation option with our UK property advisors.
              </p>

              <a
                href="#"
                className="mt-5 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Chat with our UK property advisors
              </a>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <div className="text-sm font-medium">Email</div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-11 rounded-2xl"
                  type="email"
                  required
                />
                <Button className="h-11 rounded-full px-7" type="submit">
                  Submit
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to receive helpful property updates.
                Unsubscribe anytime.
              </p>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}