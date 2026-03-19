"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function SolutionSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section
      ref={sectionRef}
      aria-label="トモラボ＋のご紹介"
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #dce8f5 0%, #e8f0fa 50%, #d4e4f4 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="reveal opacity-0 text-center mb-12">
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            そんなあなたにぴったりなのが
          </p>
          <p
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
            style={{ color: '#e87730' }}
          >
            「トモラボ＋」！
          </p>
        </div>

        <div className="reveal opacity-0 mb-8">
          <div
            className="bg-white rounded-2xl sm:rounded-3xl px-5 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 max-w-2xl mx-auto shadow-lg border-4"
            style={{ borderColor: '#e87730' }}
          >
            <p className="text-sm sm:text-lg md:text-xl font-bold text-center leading-relaxed">
              皆様の作りたい<span style={{ color: '#e87730' }}>AI エージェント</span>＆<span style={{ color: '#e87730' }}>AI ワークフロー</span>を<br />
              <span className="text-xl md:text-2xl font-black" style={{ color: '#e87730' }}>必ず形にします</span>
            </p>
          </div>
        </div>

        <div className="reveal opacity-0 flex justify-center items-center gap-6 md:gap-10 flex-wrap mb-12">
          <div className="text-center">
            <Image
              src="/images/icon/sns2.png"
              alt="SNS自動投稿AI"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">SNS自動投稿AI</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/memo2.png"
              alt="記事の自動分析＆自動投稿AI"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium leading-tight">記事の自動分析<br />＆自動投稿AI</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/mail2.png"
              alt="メールの自動返信AI"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">メールの自動返信AI</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/AI2.png"
              alt="社内業務効率化AI"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">社内業務効率化AI</p>
            <p className="text-[0.6rem] md:text-xs leading-tight text-center text-gray-600">チャットボット、<br />LINEメッセージ記録など…</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/on2 .png"
              alt="音楽生成AI"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">音楽生成AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}

