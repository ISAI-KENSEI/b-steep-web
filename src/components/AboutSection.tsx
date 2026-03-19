"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function AboutSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} aria-label="トモラボについて" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#a5c0dd' }}>
      {/* 装飾：ロケット・雲 */}
      <Image
        src="/images/legacy/sozai/rocket.png"
        alt=""
        width={806}
        height={376}
        className="absolute bottom-16 right-0 w-48 h-auto md:w-72 opacity-55 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/moku.png"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-20 left-8 md:bottom-28 md:left-16 w-20 h-auto md:w-28 opacity-50 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={40}
        height={40}
        className="absolute top-[50%] left-12 w-8 aspect-square md:w-10 opacity-70 z-0"
      />
      
      {/* セクションヘッダー */}
      <div className="text-center mb-14 sm:mb-20 md:mb-28 px-4 sm:px-6 relative z-10">
        <p className="reveal opacity-0 text-white/80 text-sm md:text-base tracking-[0.3em] mb-6">
          What is TomoLab?
        </p>
        <h2 className="reveal opacity-0 font-mplus text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wide text-white">
          トモラボってどんなところ?
        </h2>
      </div>

      {/* コンテンツ：左イラスト＋右テキスト */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-24">
        {/* 右：テキスト */}
        <div className="reveal opacity-0 w-full pt-0 md:pt-8">
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal text-white mb-6 sm:mb-8 md:mb-10 tracking-wide leading-relaxed">
            教科書の学校ではなく、みんなで手を動かす「実験室（ラボ）」
          </h3>
          <p className="text-sm sm:text-base md:text-lg leading-[1.8] sm:leading-[2] md:leading-[2.2] mb-6 sm:mb-8">
            通称、「トモラボ！」と呼ばれる本コミュニティは、AIエージェント・ワークフロー構築に特化した日本有数のコミュニティです！日本人初のn8n公式アンバサダー・武藤匠吾が運営し、「勉強」で終わらせず、作りたいものを「形」にする。それがトモラボの一番のこだわりです。
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-[1.8] sm:leading-[2] md:leading-[2.2]">
            n8nをメインに、Make・Dify・bolt・cursor等の最新ツールを網羅。エラーが出ても大丈夫——質問は無制限で、解決まで付き合います。難しいコードは共有されたJSONをコピペでOK。まずは「動いた！すごい！」という感動を一緒に味わいましょう。
          </p>
        </div>
      </div>
    </section>
  );
}
