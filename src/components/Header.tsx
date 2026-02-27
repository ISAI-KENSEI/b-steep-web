"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/legacy/logo.webp"
            alt="トモラボ"
            width={150}
            height={150}
            className="h-12 md:h-16 w-auto"
            priority
            quality={100}
          />
        </div>
        <div className="flex items-end gap-2 md:gap-4">
          <Link href="#free" className="transition-all hover:scale-105">
            <Image
              src="/images/button-free.png"
              alt="無料版を見てみる"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto"
            />
          </Link>
          <Link href="#join" className="transition-all hover:scale-105 relative">
            <Image
              src="/images/button-join.png"
              alt="トモラボ+に参加する"
              width={400}
              height={120}
              className="h-20 md:h-24 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
