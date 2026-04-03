"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b bg-background/95 shadow-sm backdrop-blur"
          : "bg-background/80 backdrop-blur"
      }`}
    >
      <div className="site-container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Place your logo file in public/images/logo.png */}
          <Image
            src="/images/logo.png"
            alt="Rent2Revolution Logo"
            width={40}
            height={40}
            className="rounded-2xl object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">
            Rent2Revolution
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a className="transition hover:text-foreground" href="#">
            Home
          </a>
          <a className="transition hover:text-foreground" href="#">
            Services
          </a>
          <a className="transition hover:text-foreground" href="#">
            Agents
          </a>
          <a className="transition hover:text-foreground" href="#">
            Properties
          </a>
          <a className="transition hover:text-foreground" href="#">
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
          <User className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground transition" />
          <Button className="rounded-full px-6">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
