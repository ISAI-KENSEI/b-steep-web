"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer role="contentinfo" className="text-white py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0b245b' }}>
      {/* 装飾：月・button2・星 */}
      <Image
        src="/images/legacy/sozai/tuki.png"
        alt=""
        width={150}
        height={150}
        className="absolute top-8 right-8 md:top-12 md:right-16 w-24 h-auto md:w-36 opacity-60 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={50}
        height={50}
        className="absolute bottom-32 left-8 md:bottom-40 md:left-16 w-10 aspect-square md:w-12 opacity-80 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={40}
        height={40}
        className="absolute top-32 left-20 md:top-40 md:left-32 w-8 aspect-square md:w-10 opacity-70 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={35}
        height={35}
        className="absolute bottom-20 right-32 md:bottom-24 md:right-48 w-8 aspect-square md:w-10 opacity-65 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={30}
        height={30}
        className="absolute top-[60%] right-[15%] w-8 aspect-square opacity-60 z-0"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* CTAエリア */}
        <div className="text-center mb-16">
          <h2 className="font-mplus text-xl sm:text-2xl md:text-4xl font-black tracking-wide mb-4 sm:mb-6">
            トモラボで、AIワークフローを始めよう
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            トモラボは「作る」「学ぶ」「仲間とつながる」が全てそろったAIコミュニティです。<br className="hidden md:block" />
            あなたも今日から一緒に、「トモラボ」でやりたいことを形にしてみませんか？
          </p>
          <Link
            href="#join"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold tracking-wide rounded-lg transition-colors"
            style={{ 
              backgroundColor: '#ffffff',
              color: '#0b245b'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            トモラボに参加する
            <span className="ml-1">→</span>
          </Link>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
            {/* 左側：ロゴ */}
            <div className="flex items-center">
              <Image
                src="/images/legacy/logo.webp"
                alt="トモラボ"
                width={200}
                height={200}
                className="h-16 md:h-20 w-auto"
                quality={100}
              />
            </div>

            {/* 右側：ナビリンク + SNSアイコン */}
            <div className="flex flex-col items-center md:items-end gap-6">
              {/* リンク */}
              <nav aria-label="フッターナビゲーション" className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">
                  トップ
                </Link>
                <Link href="https://www.skool.com/tomolab-free" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  トモラボ（無料）
                </Link>
                <Link href="https://www.skool.com/tomolab-plus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  トモラボ＋
                </Link>
                <Link href="https://www.youtube.com/channel/UCAmdG83hIqRQfwLaNQS7H2w" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  YouTube
                </Link>
              </nav>

              {/* SNS */}
              <div className="flex items-center gap-4">
                <a href="https://www.youtube.com/channel/UCAmdG83hIqRQfwLaNQS7H2w" target="_blank" rel="noopener noreferrer" aria-label="YouTubeチャンネル" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://www.skool.com/tomolab-plus" target="_blank" rel="noopener noreferrer" aria-label="Skoolコミュニティ" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* B-Steepロゴ・コピーライト */}
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="mb-3 opacity-70">
              <Image
                src="/images/bsteep-logo.webp"
                alt="株式会社B-Steep"
                width={120}
                height={40}
                className="h-8 w-auto mx-auto"
                quality={100}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-xs text-gray-600">
              Copyright © 株式会社B-Steep
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
