"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function HeroSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section
      ref={sectionRef}
      className="relative text-white min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#2a3a5c] to-[#4a5a7c]"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/hero-space-bg.webp")',
          backgroundSize: '90%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95
        }}
      />

      <Image
        src="/images/sozai/shuttle.png"
        alt=""
        width={200}
        height={200}
        className="absolute top-[15%] left-[8%] w-24 md:w-32 lg:w-40 h-auto opacity-80 z-10"
      />

      <Image
        src="/images/tomo-character.png"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-[12%] right-[8%] w-48 md:w-64 lg:w-80 h-auto z-10"
      />

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-20 relative z-10">
        <div className="reveal opacity-0 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            あなたの作りたい<br className="hidden lg:block" />AIを形に。
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-medium mb-12 opacity-90">
            AI構築に特化した実践コミュニティ
          </p>
        </div>
        
        <div className="reveal opacity-0 text-center max-w-3xl mt-12 md:mt-16">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            通称、「トモラボ！」と呼ばれる本コミュニティは、<br className="hidden md:block" />
            AIエージェント・ワークフロー構築に特化した日本有数のコミュニティです！
          </p>
        </div>
      </div>
    </section>
  );
}
