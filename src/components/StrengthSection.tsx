"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const strengths = [
  {
    number: "01",
    title: "YouTube特化チャンネル\n登録者1万人突破",
    description:
      "AIワークフロー・エージェント領域に特化したチャンネルは3か月で登録者1万人を突破",
    image: "/images/トモの強み/Gemini_Generated_Image_690ha0690ha0690h.png",
  },
  {
    number: "02",
    title: "豊富なAIワークフロー\nデータベース",
    description:
      "運営会社の豊富なAIワークフロー導入実績に裏付けされた豊富なデータベースが存在します",
    image: "/images/トモの強み/トモ_s データベース！（マスタ） (1).png",
  },
  {
    number: "03",
    title: "動画やMTGを用いた\n丁寧な1on1対応",
    description:
      "動画やミーティングを使って一人ひとりに寄り添った丁寧なサポートを実施しています",
    image: "/images/トモの強み/トモラボ・利用マニュアル (6).png",
  },
];

export default function StrengthSection() {
  const sectionRef = useRevealAnimation(0.3);

  return (
    <section
      ref={sectionRef}
      aria-label="トモの強み"
      className="relative overflow-visible"
      style={{
        background:
          "linear-gradient(160deg, #cdd5e4 0%, #b8c4d8 50%, #c4cede 100%)",
      }}
    >
      {/* 装飾画像 */}
      <Image
        src="/images/sozai/shuttle_mini.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-12 left-8 md:top-16 md:left-12 w-16 h-auto md:w-20 opacity-80 z-0 hidden sm:block"
        aria-hidden="true"
      />
      <Image
        src="/images/sozai/star_0.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-12 right-8 md:top-16 md:right-12 w-10 aspect-square md:w-12 opacity-75 z-0 hidden sm:block"
        aria-hidden="true"
      />
      <Image
        src="/images/sozai/chi.png"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-12 right-8 md:bottom-16 md:right-12 w-16 h-auto md:w-20 opacity-65 z-0 hidden sm:block"
        aria-hidden="true"
      />
      <Image
        src="/images/sozai/star_1.png"
        alt=""
        width={45}
        height={45}
        className="absolute bottom-20 left-16 md:bottom-24 md:left-24 w-9 aspect-square md:w-11 opacity-75 z-0 hidden md:block"
        aria-hidden="true"
      />

      {/* セクションタイトル */}
      <div className="pt-16 sm:pt-24 md:pt-32 pb-8 md:pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <p className="reveal opacity-0 text-gray-500 text-sm tracking-[0.3em] mb-4">
            Our Strengths
          </p>
          <h2 className="reveal opacity-0 font-mplus text-xl sm:text-3xl md:text-5xl font-black tracking-wide mb-4 sm:mb-6">
            トモの強み
          </h2>
          <p className="reveal opacity-0 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto">
            AIワークフロー解説のトモは
            <br className="hidden md:inline" />
            AIワークフロー・エージェント領域に強みがあります！
          </p>
        </div>
      </div>

      {/* スタッキングカード領域 */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 pb-24 md:pb-40">
        {strengths.map((item, index) => (
          <div
            key={index}
            className="sticky-card-wrapper"
            style={{
              /* 各カードのstickyの開始位置をずらす */
              top: `${80 + index * 40}px`,
              position: "sticky",
              marginBottom: index < strengths.length - 1 ? "120px" : "0",
              zIndex: 10 + index,
            }}
          >
            <div
              className="reveal opacity-0 bg-white rounded-2xl shadow-xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl"
              style={{
                /* 後ろのカードほど少しだけ小さくする（遠近感） */
                transform: `scale(${1 - index * 0.02})`,
              }}
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* 左: 番号 + テキスト */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <span
                    className="font-mplus text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-4 md:mb-6 block"
                    style={{ color: "#b8c4d8" }}
                  >
                    {item.number}
                  </span>
                  <h3 className="font-mplus text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 whitespace-pre-line leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* 右: 画像 */}
                <div className="flex-1 relative min-h-[200px] md:min-h-[300px] bg-gray-50 flex items-center justify-center p-4 md:p-6">
                  <Image
                    src={item.image}
                    alt={item.title.replace("\n", " ")}
                    fill
                    className="object-contain p-2 md:p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 下部の動画セクション */}
      <div className="pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-24 md:pb-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="reveal opacity-0 text-center">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8">
              コミュニティ内の1on1授業をチラ見せします！
            </h3>
            <div className="max-w-4xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
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
      </div>
    </section>
  );
}
