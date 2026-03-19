"use client";

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
      aria-label="よくあるお悩み"
      className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #b8cfe5 0%, #94b8d8 50%, #afc6de 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal opacity-0 text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-16 md:mb-20">
          こんなお悩みありませんか？
        </h2>

        {/* モバイル: 縦積み / md以上: absolute配置 */}
        <div className="flex flex-col gap-6 md:hidden">
          {worries.map((worry, index) => (
            <div key={index} className="reveal opacity-0">
              <BubbleCard text={worry} tailPosition={index === 0 ? "left" : index === 1 ? "right" : "center"} />
            </div>
          ))}
        </div>

        {/* md以上: デスクトップ版のabsolute配置 */}
        <div className="hidden md:block relative min-h-[600px]">
          <div className="reveal opacity-0 absolute top-0 left-[8%] max-w-[440px]">
            <BubbleCard text={worries[0]} tailPosition="left" />
          </div>

          <div className="reveal opacity-0 absolute top-0 right-[8%] max-w-[440px]">
            <BubbleCard text={worries[1]} tailPosition="right" />
          </div>

          <div className="reveal opacity-0 absolute top-[200px] left-1/2 -translate-x-1/2 max-w-[420px]">
            <BubbleCard text={worries[2]} tailPosition="center" />
          </div>

          {/* 装飾「？」 */}
          <span className="absolute top-[-10px] left-[48%] text-7xl font-black select-none pointer-events-none rotate-[8deg]" style={{ color: 'rgba(255,255,255,0.35)' }} aria-hidden="true">？</span>
          <span className="absolute top-[360px] left-[4%] text-6xl font-black select-none pointer-events-none rotate-[-12deg]" style={{ color: 'rgba(255,255,255,0.28)' }} aria-hidden="true">？</span>
          <span className="absolute top-[380px] right-[4%] text-5xl font-black select-none pointer-events-none rotate-[15deg]" style={{ color: 'rgba(255,255,255,0.25)' }} aria-hidden="true">？</span>
          <span className="absolute bottom-[40px] right-[30%] text-6xl font-black select-none pointer-events-none rotate-[-6deg]" style={{ color: 'rgba(255,255,255,0.3)' }} aria-hidden="true">？</span>
          <span className="absolute top-[-15px] left-[5%] text-5xl font-black select-none pointer-events-none rotate-[18deg]" style={{ color: 'rgba(255,255,255,0.22)' }} aria-hidden="true">？</span>
          <span className="absolute bottom-[100px] left-[48%] text-4xl font-black opacity-15 select-none pointer-events-none rotate-[20deg]" style={{ color: '#ffffff' }} aria-hidden="true">？</span>
        </div>
      </div>
    </section>
  );
}

function BubbleCard({ text, tailPosition }: { text: string; tailPosition: "left" | "right" | "center" }) {
  const tailClasses = {
    left: "left-[30px]",
    right: "right-[30px]",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className="relative bg-white rounded-[40px] px-6 md:px-8 py-6 sm:py-8 md:py-10 shadow-lg"
      style={{ border: '3px solid #5a7a9a' }}
    >
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {text}
      </p>
      <div
        className={`absolute bottom-[-20px] ${tailClasses[tailPosition]} w-0 h-0`}
        style={{
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid white',
          filter: 'drop-shadow(0 3px 0 #5a7a9a)'
        }}
        aria-hidden="true"
      />
    </div>
  );
}
