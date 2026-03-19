"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function HeroSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section
      ref={sectionRef}
      aria-label="トモラボ メインビジュアル"
      className="relative text-white min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2a3a5c] to-[#4a5a7c]"
    >
      {/* 宇宙背景イラスト（元サイト同様、img要素で幅制限し、モバイルでもblob全体が見える） */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        role="presentation"
      >
        <Image
          src="/images/hero-space-bg.webp"
          alt=""
          width={1440}
          height={900}
          priority
          className="max-w-[900px] w-[90vw] h-auto opacity-95"
        />
      </div>

      <Image
        src="/images/sozai/shuttle.png"
        alt=""
        width={200}
        height={200}
        className="absolute top-[15%] left-[8%] w-16 sm:w-20 md:w-32 lg:w-40 h-auto opacity-80 z-10 hidden sm:block"
      />

      <Image
        src="/images/tomo-character.png"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-[12%] right-[4%] sm:right-[8%] w-28 sm:w-36 md:w-64 lg:w-80 h-auto z-10"
      />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="reveal opacity-0 text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            あなたの作りたい<br className="hidden lg:block" />AIを形に。
          </h1>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-8 sm:mb-12 opacity-90">
            AI構築に特化した実践コミュニティ
          </p>
        </div>
        
        <div className="reveal opacity-0 text-center max-w-3xl mt-8 sm:mt-12 md:mt-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            通称、「トモラボ！」と呼ばれる本コミュニティは、<br className="hidden md:block" />
            AIエージェント・ワークフロー構築に特化した日本有数のコミュニティです！
          </p>
        </div>
      </div>
    </section>
  );
}
