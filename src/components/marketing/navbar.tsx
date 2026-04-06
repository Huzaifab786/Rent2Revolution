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
          ? "border-b bg-[#565449]/95 text-white shadow-sm backdrop-blur"
          : "bg-[#565449]/80 text-white backdrop-blur"
      }`}
    >
      <div className="site-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Rent2Revolution Logo"
            width={40}
            height={40}
            className="rounded-2xl object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            Rent2Revolution
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a className="transition hover:text-white" href="#">
            Home
          </a>
          <a className="transition hover:text-white" href="#">
            Services
          </a>
          <a className="transition hover:text-white" href="#">
            Agents
          </a>
          <a className="transition hover:text-white" href="#">
            Properties
          </a>
          <a className="transition hover:text-white" href="#">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 cursor-pointer text-white/70 transition hover:text-white" />
          <User className="h-5 w-5 cursor-pointer text-white/70 transition hover:text-white" />
          <Button className="rounded-full bg-[#d8cfbc] px-6 text-[#1f1915] hover:bg-[#e5dccb]">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
