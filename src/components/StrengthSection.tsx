"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function StrengthSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} aria-label="トモの強み" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#bfc5d4' }}>
      {/* 装飾画像：左右対称配置 */}
      {/* 左上 */}
      <Image
        src="/images/sozai/shuttle_mini.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-12 left-8 md:top-16 md:left-12 w-16 h-auto md:w-20 opacity-80 z-0 hidden sm:block"
      />
      {/* 右上 */}
      <Image
        src="/images/sozai/star_0.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-12 right-8 md:top-16 md:right-12 w-10 aspect-square md:w-12 opacity-75 z-0 hidden sm:block"
      />
      {/* 左中央 */}
      <Image
        src="/images/sozai/star_1.png"
        alt=""
        width={40}
        height={40}
        className="absolute top-[45%] left-12 md:left-20 w-8 aspect-square md:w-10 opacity-80 z-0 hidden md:block"
      />
      {/* 右中央 */}
      <Image
        src="/images/sozai/star_0.png"
        alt=""
        width={35}
        height={35}
        className="absolute top-[55%] right-16 md:right-24 w-7 aspect-square md:w-9 opacity-70 z-0 hidden md:block"
      />
      {/* 右下 */}
      <Image
        src="/images/sozai/chi.png"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-12 right-8 md:bottom-16 md:right-12 w-16 h-auto md:w-20 opacity-65 z-0 hidden sm:block"
      />
      {/* 左下 */}
      <Image
        src="/images/sozai/star_1.png"
        alt=""
        width={45}
        height={45}
        className="absolute bottom-20 left-16 md:bottom-24 md:left-24 w-9 aspect-square md:w-11 opacity-75 z-0 hidden md:block"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal opacity-0 font-mplus text-xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6" style={{
            backgroundColor: '#0b245b',
            color: '#fff',
            display: 'inline-block',
            padding: '12px 48px',
            borderRadius: '50px'
          }}>
            トモの強み
          </h2>
          <p className="reveal opacity-0 text-sm sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-3xl mx-auto">
            AIワークフロー解説のトモは<br className="md:hidden" />AIワークフロー・エージェント領域に強みがあります！
          </p>
        </div>

        <div className="reveal opacity-0 mb-20">
          {/* 上段：2枚のカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-10">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <Image
                  src="/images/トモの強み/Gemini_Generated_Image_690ha0690ha0690h.png"
                  alt="AIワークフロー・エージェント領域に特化"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm md:text-base text-center leading-relaxed">
                AIワークフロー・エージェント領域に特化したチャンネルは3か月で登録者1万人を突破
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <Image
                  src="/images/トモの強み/トモ_s データベース！（マスタ） (1).png"
                  alt="運営会社の豊富なAIワークフロー導入実績"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm md:text-base text-center leading-relaxed">
                運営会社の豊富なAIワークフロー導入実績に裏付けされた豊富なデータベースが存在します
              </p>
            </div>
          </div>

          {/* 下段：1枚のカード（中央配置） */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg w-full md:w-1/2">
              <div className="mb-6">
                <Image
                  src="/images/トモの強み/トモラボ・利用マニュアル (6).png"
                  alt="動画やMTGを用いた丁寧な1on1対応"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm md:text-base text-center leading-relaxed">
                動画やMTGを用いた丁寧な1on1対応！
              </p>
            </div>
          </div>
        </div>

        <div className="reveal opacity-0 text-center">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">
            コミュニティ内の1on1授業をチラ見せします！
          </h3>
          <div className="max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Q4SWcEfjhwk"
                title="コミュニティ1on1授業"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
