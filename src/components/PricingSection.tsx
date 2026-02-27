"use client";

import Link from "next/link";
import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function PricingSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} id="join" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0b245b' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <p className="text-lg md:text-xl mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black">約5,791</span>
              <span className="text-3xl md:text-4xl ml-2">円</span>
            </p>
            <p className="text-xl md:text-2xl mb-8">月額</p>
            <Link
              href="https://www.skool.com/tomolab-plus"
              target="_blank"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg md:text-xl font-bold rounded-full transition-colors shadow-lg"
            >
              入会を申し込む ▶
            </Link>
          </div>

          <div className="relative">
            <div className="absolute top-[-60px] right-0 flex gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-green-600/80 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-2">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white">0</div>
                    <div className="text-xs md:text-sm text-white">円</div>
                  </div>
                </div>
                <p className="text-white text-xs md:text-sm">入会金</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600/80 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-2">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white">0</div>
                    <div className="text-xs md:text-sm text-white">円</div>
                  </div>
                </div>
                <p className="text-white text-xs md:text-sm">追加費用</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600/80 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-2">
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-white">0</div>
                    <div className="text-xs md:text-sm text-white">円</div>
                  </div>
                </div>
                <p className="text-white text-xs md:text-sm">退会金</p>
              </div>
            </div>
            
            <div className="mt-24 md:mt-32">
              <Image
                src="/images/tomo-character.png"
                alt="トモキャラクター"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-white text-xs md:text-sm text-right mt-4">
              ※ 2025 年時点の平均的なお月謝相当額<br />
              海外の決済サービスを使っているため、実際の課税額は 39 ドル/月程です
            </p>
          </div>
        </div>

        <div className="reveal opacity-0 mt-16">
          <Image
            src="/images/table.png"
            alt="料金表"
            width={1200}
            height={400}
            className="w-full h-auto mx-auto max-w-4xl"
            quality={100}
            priority
          />
        </div>

        <div className="reveal opacity-0 text-center mt-12">
          <Link
            href="https://www.skool.com/tomolab-plus"
            target="_blank"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/legacy/sozai/button.png"
              alt="入会申し込みボタン"
              width={400}
              height={100}
              className="w-full max-w-md h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
