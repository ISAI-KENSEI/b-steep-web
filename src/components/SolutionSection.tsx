"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function SolutionSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#bfc5d4' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="reveal opacity-0 text-center mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            そんなあなたにぴったりなのが
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#ff6b35' }}>
            「トモラボ＋」！
          </p>
        </div>

        <div className="reveal opacity-0 mb-8">
          <div className="bg-white rounded-3xl px-8 md:px-12 py-6 md:py-8 max-w-2xl mx-auto shadow-lg border-4" style={{ borderColor: '#ff6b35' }}>
            <p className="text-lg md:text-xl font-bold text-center leading-relaxed">
              皆様の作りたい<span className="text-orange-500">AI エージェント</span>＆<span className="text-orange-500">AI ワークフロー</span>を<br />
              <span className="text-orange-500 text-xl md:text-2xl font-black">必ず形にします</span>
            </p>
          </div>
        </div>

        <div className="reveal opacity-0 flex justify-center items-center gap-6 md:gap-10 flex-wrap mb-12">
          <div className="text-center">
            <Image
              src="/images/icon/sns2.png"
              alt="SNS連携可能"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">SNS連携可能</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/memo2.png"
              alt="文章作成自動化"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">文章作成自動化</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/mail2.png"
              alt="メール自動返信"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">メール自動返信</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/AI2.png"
              alt="AIエージェント作成"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">AIエージェント作成</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/icon/on2 .png"
              alt="業務の自動化"
              width={100}
              height={100}
              className="w-20 md:w-24 h-auto mb-2"
            />
            <p className="text-xs md:text-sm font-medium">業務の自動化</p>
          </div>
        </div>
      </div>
    </section>
  );
}
