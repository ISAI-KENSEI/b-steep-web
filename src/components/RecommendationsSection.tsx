"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

interface Recommender {
  name: string;
  role: string;
  initial: string;
  summary: string;
  career: string[];
  recommendation: string;
  avatar?: string;
}

const recommenders: Recommender[] = [
  {
    name: "しげのりさん",
    role: "採用コンサル会社 取締役",
    initial: "S",
    summary:
      "運営の方達の「誰も置き去りにしない」スタンスがとても好きです。大変優秀なスタッフさんと質の高い会員さんが参加されていて、知識ゼロからでも学べる環境です。",
    career: [
      "採用コンサルティング会社 取締役",
      "人材業界で15年以上のキャリア",
      "AIを活用した採用プロセスの効率化に注力",
    ],
    recommendation:
      "「誰も置き去りにしない」というトモさんの運営スタンスがとても好きです。大変優秀なスタッフさんと質の高い会員さんが参加されていて、知識ゼロからでも学べる環境が整っています。初心者の質問にも丁寧に回答してくれるので安心して参加できました。AIの知識がなくても、ここなら着実にステップアップできると確信しています。",
    avatar: "/images/avatars/shigenori.jpg",
  },
  {
    name: "あまねさん",
    role: "仮想通貨ライター",
    initial: "A",
    summary:
      "AIワークフロー構築を学べて相談できる環境は日本にほとんどありません。自動化ができるようになると時間にレバレッジが効く。忙しい人ほど活かせるコミュニティです。",
    career: [
      "仮想通貨・ブロックチェーン専門ライター",
      "メディア運営・コンテンツマーケティングに従事",
      "YouTube競合分析やSora2での動画自動作成を実現",
    ],
    recommendation:
      "AIワークフロー構築を学べて相談できる環境は日本にほとんどありません。自動化ができるようになると時間にレバレッジが効く。忙しい人ほど活かせるコミュニティです。YouTube競合分析の自動化やSora2での動画自動作成など、実際にビジネスに直結する成果が出ました。ライター業務の効率が劇的に改善されています。",
  },
  {
    name: "Aさん（あっきーさん）",
    role: "経営者",
    initial: "A",
    summary:
      "AIは時代の波。必須のスキルです。トモさんは元コンサル出身なので、ロジカルに教えてもらえるのが非常にオススメです。",
    career: [
      "会社経営者",
      "営業・マーケティング分野で事業展開",
      "名刺管理の自動化ワークフローを構築",
    ],
    recommendation:
      "AIは時代の波。必須のスキルです。トモさんは元コンサル出身なので、ロジカルに教えてもらえるのが非常にオススメです。名刺を写メしてドライブにアップするだけでメールを自動作成する仕組みなど、実務に直結するワークフローを構築できるようになりました。経営者にこそ学んでほしいコミュニティです。",
  },
  {
    name: "けんまるさん",
    role: "コミュニティメンバー",
    initial: "K",
    summary:
      "運営者さんだけでなく、メンバーさんが回答してくれたりと助け合いの心が自然と浸透しているのが非常に良い。自動化の知識が体系的に学べる点もおすすめです。",
    career: [
      "n8nを活用したスケジュール調整エージェントを開発",
      "日本語コミュニティで体系的にAI自動化を学習中",
    ],
    recommendation:
      "運営者さんだけでなく、メンバーさんが回答してくれたりと助け合いの心が自然と浸透しているのが非常に良い。自動化の知識が体系的に学べる点もおすすめです。スケジュール調整エージェントの開発にも成功し、n8nに特化した日本語コミュニティで体系的に学べる場所として非常に価値があります。",
  },
  {
    name: "リョウさん",
    role: "RPAセールスエンジニア",
    initial: "R",
    summary:
      "実務に直結する知識が手に入り、課題にぶつかってもすぐ相談できる。学習スピードと実践力が圧倒的に向上します。忙しくて時間がない人ほど価値が大きいです。",
    career: [
      "RPAセールスエンジニア",
      "業務自動化・RPA導入コンサルティングに従事",
      "メール自動化やPDF情報抽出ワークフローを開発",
    ],
    recommendation:
      "実務に直結する知識が手に入り、課題にぶつかってもすぐ相談できる。学習スピードと実践力が圧倒的に向上します。忙しくて時間がない人ほど価値が大きいです。メール自動化やPDFからの情報抽出ワークフローなど、RPA業務にも応用できるスキルが身につきました。",
  },
  {
    name: "ゆうさん",
    role: "コミュニティメンバー",
    initial: "Y",
    summary:
      "トモさんの解説は初心者にもわかりやすい。コミュニティメンバーの意欲も高く質問しやすい雰囲気で、いろんな意見を伺いながらワークフロー構築ができます。",
    career: [
      "請求書の自動保存・データ整理ワークフローを開発",
      "日次メール送信の自動化を実現",
    ],
    recommendation:
      "トモさんの解説は初心者にもわかりやすい。コミュニティメンバーの意欲も高く質問しやすい雰囲気で、いろんな意見を伺いながらワークフロー構築ができます。請求書の自動保存やデータの日次メール送信など、実際の業務改善に直結する自動化を実現できました。",
  },
  {
    name: "テクテクさん",
    role: "無職",
    initial: "T",
    summary:
      "トモさんのYouTube解説が丁寧で誠実さを感じたことが入会の決め手でした。",
    career: [
      "Gmail仕訳+下書きワークフローを開発",
      "ポッドキャストのSNS自動投稿ワークフローを構築",
    ],
    recommendation:
      "リアルイベントでお会いしましたが、動画で感じていたとおり誠実なお人柄でした。参加者のレベルアップを構造的に実現するコミュニティ運営を本気で考え、必要ならプラットフォーム変更すら厭わずに創意工夫している点が印象的です。Gmail仕訳+下書きやポッドキャストのSNS自動投稿といった、自分のやりたいワークフローづくりに集中できる環境が整っています。",
  },
  {
    name: "みやひろさん",
    role: "経営者",
    initial: "M",
    summary:
      "最新のAIワークフロー情報をキャッチアップできる。作りたいツールの作り方を教えてくれるのが一番の魅力です。",
    career: [
      "会社経営者",
      "YouTube Shortsの動画自動生成ワークフローを構築",
      "n8n×Sora2で運用を半自動化し、1ヶ月で130万回再生を達成",
    ],
    recommendation:
      "最新のAIワークフロー情報をキャッチアップできる。作りたいツールの作り方を教えてくれるのが一番の魅力です。YouTube Shortsのショート動画自動生成を構築し、n8nとSora2を組み合わせた運用の半自動化にも成功しました。経営のスピードが格段に上がっています。",
  },
];

/* ─────────────── モーダル ─────────────── */
function RecommenderModal({
  item,
  onClose,
}: {
  item: Recommender;
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
      onClick={onClose}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* モーダル本体 */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 閉じるボタン（×） */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors z-10 cursor-pointer"
          aria-label="閉じる"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
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

          {/* 経歴セクション */}
          <div className="flex gap-6 md:gap-8 mb-10">
            <div className="shrink-0 pt-0.5">
              <span className="text-sm font-bold text-gray-400 tracking-wider">経歴</span>
            </div>
            <div className="flex-1">
              <ul className="space-y-1.5">
                {item.career.map((line, i) => (
                  <li key={i} className="text-sm md:text-base leading-7 text-gray-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 推薦文セクション */}
          <div className="flex gap-6 md:gap-8">
            <div className="shrink-0 pt-0.5">
              <span className="text-sm font-bold text-gray-400 tracking-wider">推薦文</span>
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-xl p-5 md:p-6 border-l-4 border-gray-300">
                <p className="text-sm md:text-base leading-8 text-gray-700">
                  「{item.recommendation}」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── カード ─────────────── */
function RecommenderCard({
  item,
  onOpen,
}: {
  item: Recommender;
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
            xmlns="http://www.w3.org/2000/svg"
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
export default function RecommendationsSection() {
  const sectionRef = useRevealAnimation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#a5c0dd' }}>
        {/* 装飾：雲 */}
        <Image
          src="/images/legacy/sozai/fuwafuwa_w.png"
          alt=""
          width={140}
          height={140}
          className="absolute bottom-20 right-8 md:bottom-28 md:right-16 w-28 h-auto md:w-36 opacity-65 z-0"
        />
        <Image
          src="/images/legacy/sozai/moku2.png"
          alt=""
          width={100}
          height={100}
          className="absolute top-24 left-12 md:top-32 md:left-20 w-20 h-auto md:w-28 opacity-50 z-0"
        />
        <Image
          src="/images/legacy/sozai/star_0.png"
          alt=""
          width={45}
          height={45}
          className="absolute top-[60%] right-[20%] w-10 aspect-square md:w-12 opacity-70 z-0"
        />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          {/* セクションタイトル（AI木曜会風の太字＋下線装飾） */}
          <div className="text-center mb-16">
            <p className="reveal opacity-0 text-white/80 text-sm tracking-[0.3em] mb-4">
              Community Voice
            </p>
            <h2 className="reveal opacity-0 font-mplus text-3xl md:text-5xl font-black tracking-wide mb-4 text-white">
              コミュニティメンバーからの感想
            </h2>
            <p className="reveal opacity-0 text-sm md:text-base text-white/90">
              トモラボ＋メンバーからいただいたリアルな声をご紹介します。
            </p>
          </div>

          {/* 2列カードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {recommenders.map((item, index) => (
              <RecommenderCard
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
        <RecommenderModal
          item={recommenders[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
