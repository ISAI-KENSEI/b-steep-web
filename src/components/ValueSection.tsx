"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const values = [
  {
    number: "1",
    title: <>作りたいAIワークフローを<br className="hidden md:inline" />必ず形に</>,
    description:
      "エラー時はトモ＆メンバーが即サポート。AI構築のロードマップで「何から始めよう？」を解決します。豊富なワークフロー事例から業務改善のアイデアが得られます。",
    image: "/images/value-support-real.jpg",
    imageAlt: "AIワークフロー構築のサポート",
  },
  {
    number: "2",
    title: <>業界随一のAIシステム構築<br className="hidden md:inline" />特化コンテンツ</>,
    description:
      "ここでしか見られない10時間超の動画教材を完備。コピペで動くJSONコードを多数共有し、毎週のAIニュース＋毎月新コンテンツを継続配信。AIツール専門家へのインタビュー動画も充実しています。",
    image: "/images/value-content-real.png",
    imageAlt: "豊富な学習コンテンツ",
  },
  {
    number: "3",
    title: <>各業界の仲間と繋がれる<br className="hidden md:inline" />コミュニティ</>,
    description:
      "作ったAIを投稿すると仲間から改善フィードバックがもらえます。案件相談やコラボが生まれ、副業・キャリアのチャンスにも。メンバー同士での仕事やコラボが生まれた実績もあり、各業界で活躍するAI感度の高いメンバーが多数参加しています。",
    image: "/images/value-community-real.jpg",
    imageAlt: "コミュニティのつながり",
  },
  {
    number: "4",
    title: <>ライブイベントで<br className="hidden md:inline" />楽しく学べる</>,
    description:
      "四半期ごとにオフ会(東京・大阪)を多数開催。オンラインで「トモのAI勉強会」を定期開催し、最新AI知識＆実践スキルをコミュニティと一緒に習得できます。",
    image: "/images/value-events-real.png",
    imageAlt: "楽しいライブイベント",
  },
];

export default function ValueSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section
      ref={sectionRef}
      aria-label="トモラボの4つのポイント"
      className="py-24 sm:py-32 md:py-44 relative overflow-hidden"
      style={{ backgroundColor: "#0b245b" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        {/* ──────────────────────────────────
            セクションタイトル（左寄せ・AI木曜会スタイル）
        ────────────────────────────────── */}
        <h2 className="reveal opacity-0 font-mplus text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight mb-24 sm:mb-32 md:mb-44">
          「トモラボ＋」が誇る<br />
          4つの提供価値
        </h2>

        {/* ──────────────────────────────────
            交互配置カード群
        ────────────────────────────────── */}
        <div className="space-y-28 sm:space-y-36 md:space-y-48">
          {values.map((value, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`reveal opacity-0 flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 sm:gap-12 md:gap-14 items-center`}
              >
                {/* ───── 画像エリア（50%） ───── */}
                <div className="w-full md:w-[45%]">
                  {"image" in value && value.image ? (
                    <div className="relative w-full rounded-lg overflow-hidden">
                      <Image
                        src={value.image as string}
                        alt={value.imageAlt}
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  ) : (
                    /* 写真未設定時のプレースホルダー枠 */
                    <div
                      className="w-full aspect-square rounded-lg"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    />
                  )}
                </div>

                {/* ───── テキストエリア（50%） ───── */}
                <div className="w-full md:w-[55%]">
                  {/* 番号 — 大きく薄く */}
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 md:mb-8 text-white/35">
                    {value.number}.
                  </p>

                  {/* タイトル — やや淡い白 */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6 md:mb-8 text-white/85">
                    {value.title}
                  </h3>

                  {/* 説明文 — はっきりした白 */}
                  <p className="text-sm sm:text-base md:text-lg leading-loose text-white/90">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
