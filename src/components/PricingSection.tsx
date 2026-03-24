"use client";

import Link from "next/link";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

/* ─── 機能データ ─── */
interface Feature {
  text: string;
  free: boolean;
}

const features: Feature[] = [
  { text: "AIワークフローテンプレート",              free: true },
  { text: "コミュニティメンバーとの交流",            free: true },
  { text: "毎週配信AIニュース",                      free: true },
  { text: "質問への個別回答",                        free: false },
  { text: "AIエージェント・ワークフロー構築アドバイス", free: false },
  { text: "有料限定コンテンツ",                       free: false },
  { text: "オンライン・オフラインイベント",            free: false },
  { text: "お仕事・求人情報の紹介",                   free: false },
];

/* ─── チェック / バツ アイコン ─── */
function Check() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(74,222,128,0.15)" />
      <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.06)" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── メインコンポーネント ─── */
export default function PricingSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section
      ref={sectionRef}
      id="join"
      aria-label="料金プラン"
      className="relative py-16 sm:py-24 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a2d55 0%, #1e3d78 40%, #264d92 70%, #1e3d78 100%)",
      }}
    >
      {/* 背景グロー */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,152,224,0.4) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        {/* ── セクション見出し ── */}
        <div className="reveal opacity-0 text-center mb-16">
          <p className="text-sky-400 font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white mb-4">
            あなたに合ったプランを選択
          </h2>
          <p className="text-white/50 text-xs sm:text-sm md:text-base max-w-lg mx-auto">
            まずは無料版で体験。<br className="hidden sm:inline" />さらにステップアップしたい方はトモラボ＋へ。
          </p>
        </div>

        {/* ── カード2枚 ── */}
        <div className="reveal opacity-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* ---- 無料版カード ---- */}
          <div
            className="rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white/60 text-sm font-semibold tracking-wide uppercase mb-2">Free</p>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-1">トモラボ</h3>
            <p className="text-white/40 text-sm mb-6">無料で始められるコミュニティ</p>

            <div className="mb-8">
              <span className="text-4xl md:text-5xl font-black text-white">¥0</span>
              <span className="text-white/40 text-sm ml-2">/月</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {features.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  {f.free ? <Check /> : <Cross />}
                  <span className={`text-sm leading-snug ${f.free ? "text-white/80" : "text-white/25 line-through"}`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="https://www.skool.com/tomolab"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 rounded-xl text-sm font-bold transition-all
                         text-white/70 hover:text-white
                         border border-white/15 hover:border-white/30
                         hover:bg-white/5"
            >
              無料で始める →
            </Link>
          </div>

          {/* ---- トモラボ＋ カード（推奨） ---- */}
          <div
            className="relative rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col"
            style={{
              background: "linear-gradient(165deg, rgba(56,152,224,0.15) 0%, rgba(56,152,224,0.05) 100%)",
              border: "1px solid rgba(56,152,224,0.3)",
              boxShadow: "0 0 60px rgba(56,152,224,0.1), 0 25px 50px rgba(0,0,0,0.3)",
            }}
          >
            {/* おすすめバッジ */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
                おすすめ
              </span>
            </div>

            <p className="text-sky-400 text-sm font-semibold tracking-wide uppercase mb-2">Premium</p>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-1">トモラボ＋</h3>
            <p className="text-white/40 text-sm mb-6">すべての機能をフルで活用</p>

            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-black text-white">約¥5,791</span>
              <span className="text-white/40 text-sm ml-2">/月</span>
            </div>
            <p className="text-white/30 text-xs mb-8">
              ※ 実際のご請求額は$39/月（2025年平均レート換算）
            </p>

            {/* 0円ポイント */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-8">
              {["入会金 0円", "追加費用 0円", "退会金 0円"].map((txt) => (
                <span
                  key={txt}
                  className="text-xs font-semibold text-sky-300/80 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(56,152,224,0.12)",
                    border: "1px solid rgba(56,152,224,0.2)",
                  }}
                >
                  {txt}
                </span>
              ))}
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {features.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <Check />
                  <span className="text-sm leading-snug text-white/80">{f.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://www.skool.com/tomolab-plus"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 rounded-xl text-sm font-bold transition-all
                         text-white
                         bg-gradient-to-r from-orange-500 to-orange-600
                         hover:from-orange-600 hover:to-orange-700
                         shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40
                         hover:scale-[1.01] active:scale-[0.99]"
            >
              トモラボ＋に参加する →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
