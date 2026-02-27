"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";
import OfflineEventsGallery from "./OfflineEventsGallery";

export default function VoicesSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden relative" style={{ backgroundColor: '#bfc5d4' }}>
      <Image
        src="/images/legacy/sozai/moku.png"
        alt=""
        width={110}
        height={110}
        className="absolute top-20 left-8 md:top-28 md:left-16 w-24 h-auto md:w-32 opacity-55 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={55}
        height={55}
        className="absolute bottom-24 right-12 md:bottom-32 md:right-20 w-12 aspect-square md:w-16 opacity-75 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-[50%] right-[10%] w-10 aspect-square md:w-12 opacity-70 z-0"
      />
      
      <SuccessStoriesCarousel />
      <OfflineEventsGallery />
    </section>
  );
}
