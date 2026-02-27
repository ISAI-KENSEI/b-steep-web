"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function WorrySection() {
  const sectionRef = useRevealAnimation();

  const worries = [
    "AI ワークフローを作ってみたいけど\n何から始めればいいかわからない",
    "AI エージェントって\n聞いたことあるけど\nよくわからない",
    "ひとりでやると続かない\n仲間が欲しい"
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #a8b9d4 0%, #7a9aba 50%, #9bacc7 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal opacity-0 text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-16 md:mb-20">
          こんなお悩みありませんか？
        </h2>

        <div className="relative min-h-[500px] md:min-h-[600px]">
          <div className="reveal opacity-0 absolute top-0 left-[5%] md:left-[8%] max-w-[380px] md:max-w-[440px]">
            <div 
              className="relative bg-white rounded-[40px] px-6 md:px-8 py-8 md:py-10 shadow-lg"
              style={{
                border: '3px solid #5a7a9a'
              }}
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                {worries[0]}
              </p>
              <div 
                className="absolute bottom-[-20px] left-[30px] w-0 h-0"
                style={{
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '20px solid white',
                  filter: 'drop-shadow(0 3px 0 #5a7a9a)'
                }}
              />
            </div>
          </div>

          <div className="reveal opacity-0 absolute top-0 right-[5%] md:right-[8%] max-w-[380px] md:max-w-[440px]">
            <div 
              className="relative bg-white rounded-[40px] px-6 md:px-8 py-8 md:py-10 shadow-lg"
              style={{
                border: '3px solid #5a7a9a'
              }}
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                {worries[1]}
              </p>
              <div 
                className="absolute bottom-[-20px] right-[30px] w-0 h-0"
                style={{
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '20px solid white',
                  filter: 'drop-shadow(0 3px 0 #5a7a9a)'
                }}
              />
            </div>
          </div>

          <div className="reveal opacity-0 absolute top-[180px] md:top-[200px] left-1/2 -translate-x-1/2 max-w-[360px] md:max-w-[420px]">
            <div 
              className="relative bg-white rounded-[40px] px-6 md:px-8 py-8 md:py-10 shadow-lg"
              style={{
                border: '3px solid #5a7a9a'
              }}
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                {worries[2]}
              </p>
              <div 
                className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '20px solid white',
                  filter: 'drop-shadow(0 3px 0 #5a7a9a)'
                }}
              />
            </div>
          </div>

          <svg className="absolute top-[30px] right-[35%] md:right-[40%] w-8 md:w-10 h-auto opacity-60" viewBox="0 0 100 150">
            <text x="50" y="100" fontSize="120" fill="#7a9aba" textAnchor="middle">?</text>
          </svg>
          <svg className="absolute top-[140px] left-[2%] md:left-[5%] w-6 md:w-8 h-auto opacity-50" viewBox="0 0 100 150">
            <text x="50" y="100" fontSize="100" fill="#7a9aba" textAnchor="middle">?</text>
          </svg>
          <svg className="absolute bottom-[140px] right-[30%] md:right-[35%] w-6 md:w-8 h-auto opacity-50" viewBox="0 0 100 150">
            <text x="50" y="100" fontSize="100" fill="#7a9aba" textAnchor="middle">?</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
