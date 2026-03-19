"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

interface Voice {
  name: string;
  role: string;
  initial: string;
  summary: string;
  joinReason: string;
  recommendation: string;
  aiSystem: string;
  avatar?: string;
}

const voices: Voice[] = [
  {
    name: "しげのりさん",
    role: "採用コンサル会社 取締役",
    initial: "S",
    summary:
      "大変優秀なスタッフさん達と質の高い優れた会員さんが沢山参加されているので、上質な情報にふれて、自分自身をさらに高めたい方には本当に良い環境だと思います。",
    joinReason:
      "chat GPTなどAIを活用することで、大幅に業務効率が改善し、時間にゆとりができたことでAIに興味を持ったことがきっかけです。IT・AIに優れた上質な人達との関わりが欲しいと思いサロンに参加しました。IT知識はゼロなのでこれから頑張ります。",
    recommendation:
      "大変優秀なスタッフさん達と質の高い優れた会員さんが沢山参加されているので、上質な情報にふれて、自分自身をさらに高めたい方には本当に良い環境だと思います。また、運営の方達の「誰も置き去りにしない」スタンスがとても好きです。私のような「知識ゼロから学びたい！」という方にもお勧めします！",
    aiSystem:
      "まだ何もありません！まずはIT用語から勉強しようと思いたち、先日、ITパスポート試験対策の本を購入したばかりです。",
    avatar: "/images/avatars/shigenori.jpg",
  },
  {
    name: "テクテクさん",
    role: "無職",
    initial: "T",
    summary:
      "トモラボをオススメする理由は、リアルイベントでお会いしたトモさんが動画のとおり誠実な方であった事と、参加者のレベルアップを構造的に構築するコミュニティ運営を本気で考えて創意工夫しながら実行している事。",
    joinReason:
      "トモさんのYoutube解説が丁寧で誠実さを感じたから",
    recommendation:
      "リアルイベントでお会いしましたが動画のとおり誠実な方である事と、参加者のレベルアップを構造的に構築するコミュニティ運営を本気で考えて創意工夫しながら実行している事。実際にそのためのプラットフォーム変更も厭わない。",
    aiSystem:
      "Gmail仕訳+下書きワークフロー。ポッドキャストのSNS自動投稿ワークフロー。",
    avatar: "/images/avatars/kenmaru.png", // TODO: テクテクさん本人のアバターに差し替え
  },
  {
    name: "あまねさん",
    role: "仮想通貨ライター",
    initial: "A",
    summary:
      "AIワークフロー構築を学べる/相談できる環境って正直日本にほとんどないと思います。かつ、AIワークフローが構築できるようになると、時間がより生み出せるようになります。",
    joinReason:
      "AIワークフロー構築にあたって、生きた知識とそれを相談できる環境が欲しかったため。",
    recommendation:
      "AIワークフロー構築を学べる/相談できる環境って正直日本にほとんどないと思います。かつ、AIワークフローが構築できるようになると、これまで行っていたことを自動化できるので、時間がより生み出せるようになります。つまり、時間に対してレバレッジが効くようになるのです。今、時間がないという人ほど、このコミュニティで学んだことを活かせるようになると思います。",
    aiSystem:
      "Youtubeの競合分析の自動化・Sora2での動画自動作成・RSSスクレイピングとプラットフォームへの自動展開・Obsidian×Antigravityでのナレッジの自動整理",
    avatar: "/images/avatars/amane.png",
  },
  {
    name: "あっきーさん",
    role: "経営者",
    initial: "A",
    summary:
      "ＡＩは、時代の波です。必須のスキルかと思います。また、トモさんは、元コンサル出身のため、ロジカルに教えて貰えますので、非常にオススメです。",
    joinReason:
      "デジタル周りは、AIに代替されるため、勉強のため",
    recommendation:
      "ＡＩは、時代の波です。必須のスキルかと思います。また、トモさんは、元コンサル出身のため、ロジカルに教えて貰えますので、非常にオススメです。",
    aiSystem:
      "交流会で大量に貰った名刺を写メしてドライブにアップするだけで、メールを作る自動化",
    avatar: "/images/avatars/kenmaru.png", // TODO: あっきーさん本人のアバターに差し替え
  },
  {
    name: "みやひろさん",
    role: "経営者",
    initial: "M",
    summary:
      "作りたいツールの作り方を教えてくれる。",
    joinReason:
      "最新の AIワークフローの情報のキャッチアップ、使い方の活用",
    recommendation:
      "作りたいツールの作り方を教えてくれる。",
    aiSystem:
      "Youtube shortsのショート動画自動生成",
    avatar: "/images/avatars/kenmaru.png", // TODO: みやひろさん本人のアバターに差し替え
  },
  {
    name: "リョウさん",
    role: "パフォーマンスマーケター",
    initial: "R",
    summary:
      "AIワークフローを「学べて・相談できる」環境は日本ではほとんどありません。トモラボ＋では実務に直結する具体的な知識が手に入り、課題にぶつかったときにもすぐ相談できるため、学習スピードと実践力が圧倒的に向上します。",
    joinReason:
      "業務を自動化したかった、最新のAI情報をキャッチアップしたかったため。",
    recommendation:
      "AIワークフローを「学べて・相談できる」環境は日本ではほとんどありません。トモラボ+では実務に直結する具体的な知識が手に入り、課題にぶつかったときにもすぐ相談できるため、学習スピードと実践力が圧倒的に向上します。AIワークフローを組めるようになると、これまで手作業で行っていた業務を自動化でき、時間がどんどん生み出されます。特に「忙しくて時間がない」人ほど、このコミュニティで得られる価値は大きいと感じています。",
    aiSystem:
      "AI×n8n×D-IDでのYouTubeショート動画自動生成ワークフロー・n8nでの記事要約・競合分析",
    avatar: "/images/avatars/ryou.png",
  },
  {
    name: "けんまるさん",
    role: "コミュニティメンバー",
    initial: "K",
    summary:
      "運営者さんではなく、メンバーさんが回答してくれたりと助け合いの心が自然と浸透しているのが非常に良かったです。",
    joinReason:
      "n8nに非常に興味があり、日本語に特化したコミュニティが唯一YouTubeで見つけたからです。",
    recommendation:
      "運営者さんではなく、メンバーさんが回答してくれたりと助け合いの心が自然と浸透しているのが非常に良かったです。また、自動化における知識が体系的に学べるようになっているポイントも勧めたいです！",
    aiSystem:
      "スケジュール調整エージェント",
    avatar: "/images/avatars/kenmaru.png",
  },
  {
    name: "ゆうさん",
    role: "コミュニティメンバー",
    initial: "Y",
    summary:
      "トモさんのワークフロー解説が初心者にもわかりやすい。最新のAI情報等もピックアップして共有してくれるため、AI関連情報の収集がしやすい。",
    joinReason:
      "AIを活用したワークフロー構築に興味があったため。",
    recommendation:
      "トモさんのワークフロー解説が初心者にもわかりやすい。最新のAI情報等もピックアップして共有してくれるため、AI関連情報の収集がしやすい。コミュニティメンバーの方の意欲も高く、質問もしやすい雰囲気のため、いろんな意見を伺いながら自身のワークフロー構築ができる。",
    aiSystem:
      "AIを活用した情報収集ワークフロー",
    avatar: "/images/avatars/kenmaru.png", // TODO: ゆうさん本人のアバターに差し替え
  },
];

/* ─────────────── モーダル ─────────────── */
function VoiceModal({
  item,
  onClose,
}: {
  item: Voice;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name}の詳細`}
      onClick={onClose}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* モーダル本体 */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors z-10 cursor-pointer"
          aria-label="閉じる"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-6 sm:p-8 md:p-10">
          {/* ヘッダー：アバター＋名前＋肩書き */}
          <div className="flex items-center gap-5 mb-10">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden relative">
              {item.avatar ? (
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-2xl md:text-3xl font-bold text-gray-400">
                  {item.initial}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs md:text-sm text-gray-400 mb-1">{item.role}</p>
              <h3 className="font-mplus text-2xl md:text-3xl font-black">{item.name}</h3>
            </div>
          </div>

          {/* セクション：入会理由 */}
          <div className="flex gap-6 md:gap-8 mb-10">
            <div className="shrink-0 pt-0.5">
              <span className="text-sm font-bold text-gray-400 tracking-wider whitespace-nowrap">入会理由</span>
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base leading-7 text-gray-700">
                {item.joinReason}
              </p>
            </div>
          </div>

          {/* セクション：おすすめ理由 */}
          <div className="flex gap-6 md:gap-8 mb-10">
            <div className="shrink-0 pt-0.5">
              <span className="text-sm font-bold text-gray-400 tracking-wider whitespace-nowrap">推薦理由</span>
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-xl p-5 md:p-6 border-l-4 border-gray-300">
                <p className="text-sm md:text-base leading-8 text-gray-700">
                  「{item.recommendation}」
                </p>
              </div>
            </div>
          </div>

          {/* セクション：開発AIシステム */}
          <div className="flex gap-6 md:gap-8">
            <div className="shrink-0 pt-0.5">
              <span className="text-sm font-bold text-gray-400 tracking-wider whitespace-nowrap">開発AI</span>
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base leading-7 text-gray-700">
                {item.aiSystem}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── カード ─────────────── */
function VoiceCard({
  item,
  onOpen,
}: {
  item: Voice;
  onOpen: () => void;
}) {
  return (
    <div className="reveal opacity-0 bg-gray-50 rounded-xl p-6 md:p-8 flex flex-col justify-between h-full hover:bg-gray-100 transition-colors">
      {/* 上部：アバター＋名前＋肩書き */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden relative">
            {item.avatar ? (
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-lg md:text-xl font-bold text-gray-400">
                {item.initial}
              </span>
            )}
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">{item.role}</p>
            <h3 className="font-mplus text-lg md:text-xl font-black leading-tight">
              {item.name}
            </h3>
          </div>
        </div>

        {/* サマリー */}
        <p className="text-sm md:text-base leading-7 text-gray-600">
          {item.summary}
        </p>
      </div>

      {/* 続きを見る → */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group cursor-pointer"
        >
          続きを見る
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─────────────── セクション本体 ─────────────── */
export default function CommunityVoicesSection() {
  const sectionRef = useRevealAnimation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section ref={sectionRef} aria-label="コミュニティ参加者の声" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#a5c0dd' }}>
        {/* 装飾：雲 */}
        <Image
          src="/images/legacy/sozai/fuwafuwa_w.png"
          alt=""
          width={140}
          height={140}
          className="absolute bottom-20 right-8 md:bottom-28 md:right-16 w-28 h-auto md:w-36 opacity-65 z-0 hidden sm:block"
          aria-hidden="true"
        />
        <Image
          src="/images/legacy/sozai/moku2.png"
          alt=""
          width={100}
          height={100}
          className="absolute top-24 left-12 md:top-32 md:left-20 w-20 h-auto md:w-28 opacity-50 z-0 hidden sm:block"
          aria-hidden="true"
        />
        <Image
          src="/images/legacy/sozai/star_0.png"
          alt=""
          width={45}
          height={45}
          className="absolute top-[60%] right-[20%] w-10 aspect-square md:w-12 opacity-70 z-0"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <p className="reveal opacity-0 text-white/80 text-sm tracking-[0.3em] mb-4">
              Community Voices
            </p>
            <h2 className="reveal opacity-0 font-mplus text-xl sm:text-3xl md:text-5xl font-black tracking-wide mb-4 text-white">
              コミュニティ参加者の声
            </h2>
            <p className="reveal opacity-0 text-sm md:text-base text-white/90">
              トモラボに参加している皆さんのリアルな感想をお届けします
            </p>
          </div>

          {/* 2列カードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {voices.map((item, index) => (
              <VoiceCard
                key={index}
                item={item}
                onOpen={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* モーダル */}
      {selectedIndex !== null && (
        <VoiceModal
          item={voices[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
