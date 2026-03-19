"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function LecturerSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} aria-label="運営者紹介" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#bfc5d4' }}>
      {/* 装飾：星と雲 */}
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-24 right-16 md:top-32 md:right-24 w-12 aspect-square md:w-14 opacity-65 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={45}
        height={45}
        className="absolute bottom-28 left-16 md:bottom-36 md:left-24 w-10 aspect-square md:w-12 opacity-70 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/moku.png"
        alt=""
        width={95}
        height={95}
        className="absolute top-[55%] right-[8%] w-20 h-auto md:w-26 opacity-40 z-0 hidden md:block"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="mb-12">
          <p className="reveal opacity-0 text-gray-500 text-sm tracking-[0.3em] mb-4">
            Founder
          </p>
          <h2 className="reveal opacity-0 font-mplus text-xl sm:text-3xl md:text-5xl font-black tracking-wide">
            運営者紹介
          </h2>
        </div>

        <div className="reveal opacity-0 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 items-start">
          {/* 左：プロフィール写真 */}
          <div className="w-full md:w-2/5 shrink-0">
            <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden mx-auto">
              <Image
                src="/images/legacy/profile_tomo.png"
                alt="トモ"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>

          {/* 右：プロフィールテキスト */}
          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <span className="inline-block border border-gray-800 rounded-full px-4 py-1 text-xs font-medium mb-2">
                株式会社B-Steep 代表取締役社長
              </span>
              <span className="inline-block border border-gray-800 rounded-full px-4 py-1 text-xs font-medium mb-4 ml-2">
                n8n公式アンバサダー
              </span>
              <h3 className="font-mplus text-2xl sm:text-3xl md:text-4xl font-black mb-2">
                武藤 匠吾（トモ）
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                AIワークフロー解説のトモ｜YouTubeチャンネル登録者1.2万人超｜日本人初 n8n公式アンバサダー
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 mb-6">
              神奈川県藤沢市を拠点に、AIワークフロー・ AIエージェント領域に特化したDX推進企業「株式会社B-Steep」を運営。世界約55名のみが選出されるn8n公式アンバサダーに日本人として初めて就任。YouTubeチャンネルは開始3ヶ月で1万人登録を突破し、非エンジニアでもAI自動化が組めるようになる動画を発信しています。
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 mb-8">
              社名「B-Steep」は、英語の「Baby Step（赤ちゃんのヨチヨチ歩き）」と「Steep（険しい道のり）」をかけ合わせた造語。カナダ留学時代、英語が全く話せず惔しい思いをしていた時に友人から「小さな歩幅でも前に進むことに価値がある」と励まされた原体験から。「厳しい道のりへの挑戦に、小さくても確実な一歩を提供する」——その想いでトモラボを運営しています。
            </p>

            {/* SNSリンク */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.youtube.com/@tomos_aiagent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                YouTube →
              </a>
              <a
                href="https://www.skool.com/tomolab-plus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                Skool →
              </a>
              <a
                href="https://b-steep.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                株式会社B-Steep →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
