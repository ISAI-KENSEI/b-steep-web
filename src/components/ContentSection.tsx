"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const contents = [
  {
    tag: "人気コンテンツ",
    title: "トモと学ぶ「AIシステム構築」",
    description: "AIワークフロー特化のコンテンツが数十時間分！",
    image: "/images/content/トモラボ！ 今日から始めるA Iワークフロー .png",
  },
  {
    tag: "大人気企画",
    title: "トモとムギの最新AI冒険記",
    description: "メンバーや専門家に「最新AIツール」を解説いただく大人気企画",
    image: "/images/content/トモとムギの最新AI冒険記 .png",
  },
  {
    tag: "データベース",
    title: "トモ's データベース！",
    description: "トモやメンバーさんが作った過去のAIシステムが一覧化。作りたいAIがきっと見つかる",
    image: "/images/content/トモ_s データベース！.png",
  },
  {
    tag: "週刊ニュース",
    title: "みかんちゃんのAIニュース",
    description: "毎週AIの進化を\"最速×定量データ\"でキャッチできるニュースまとめを発信！",
    image: "/images/content/みかんのAIニュース .png",
  },
  {
    tag: "イベント",
    title: "トモのAI勉強会",
    description: "オンライン勉強会を定期開催！みんなでAIワークフローを勉強しましょう",
    image: "/images/content/20251008_トモのAI勉強会＋_第二回.png",
  },
  {
    tag: "成功事例",
    title: "トモラボ＋成功事例の紹介！",
    description: "トモラボ＋で生まれた成功体験を紹介。メンバーの実績が学びのヒントに",
    image: "/images/content/tomolab-success-new.png",
  },
];

const extraContents = [
  {
    tag: "データベース",
    title: "トモ's データベース！",
    description: "構築したいAIワークフローを探そう！（現時点で31個掲載）",
    image: "/images/content/tomo-database.png",
  },
  {
    tag: "週刊ニュース",
    title: "みかんちゃんのAIニュース",
    description: "毎週AIの進化を「最速 × 定量データ」でキャッチできるニュースまとめを発信！",
    image: "/images/content/mikan-ai-news.png",
  },
  {
    tag: "大人気企画",
    title: "トモとムギの最新AI冒険記",
    description: "メンバーや専門家に「最新AIツール」を解説いただく大人気企画",
    image: "/images/content/tomo-mugi-adventure.png",
  },
  {
    tag: "アーカイブ",
    title: "AIを克服するのは難しいだろう＋",
    description: "オンラインイベントのアーカイブです！",
    image: "/images/content/tomolab-workflow.png",
  },
  {
    tag: "FAQ",
    title: "トモのFAQ集！",
    description: "過去のFAQまとめ！（25年12月1日〜）",
    image: "/images/content/tomolab-workflow-8.png",
  },
  {
    tag: "テンプレート",
    title: "テンプレート＆JSONコード！",
    description: "ご共有します！",
    image: "/images/content/code-share.png",
  },
];

export default function ContentSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#bfc5d4' }}>
      {/* 装飾：do・雲・星 */}
      <Image
        src="/images/legacy/sozai/do.png"
        alt=""
        width={1263}
        height={580}
        className="absolute top-12 right-0 w-40 h-auto md:w-64 opacity-50 z-0"
      />
      <Image
        src="/images/legacy/sozai/mokumoku.png"
        alt=""
        width={110}
        height={110}
        className="absolute bottom-16 left-8 md:bottom-24 md:left-16 w-24 h-auto md:w-32 opacity-55 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-[60%] left-[10%] w-10 aspect-square md:w-12 opacity-70 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={40}
        height={40}
        className="absolute bottom-[30%] right-[15%] w-8 aspect-square md:w-10 opacity-65 z-0"
      />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal opacity-0 font-mplus text-3xl md:text-5xl font-black tracking-wide mb-6">
            トモラボで学べること
          </h2>
          <p className="reveal opacity-0 text-base md:text-lg text-gray-700">
            n8nをメインに、Skool上で体系的なカリキュラムを提供しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((item, index) => (
            <div
              key={index}
              className="reveal opacity-0 group cursor-pointer"
            >
              {/* カードサムネイル */}
              <div className="rounded-xl mb-4 transition-transform group-hover:scale-[1.02] relative overflow-hidden aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              {/* タグ */}
              <span className="inline-block border border-gray-800 rounded-full px-4 py-1 text-xs font-medium mb-3">
                {item.tag}
              </span>
              {/* タイトル */}
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              {/* 説明 */}
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
