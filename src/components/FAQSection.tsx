"use client";

import { useState } from "react";
import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const faqs = [
  {
    question: "トモラボ！（無料版）とトモラボ！＋（有料版）の違いは何ですか？",
    answer:
      "トモラボ！（無料版）ではコミュニティへの参加や一部コンテンツの閲覧が可能です。トモラボ！＋（有料版）では全カリキュラム（Lv.1〜Lv.5）見放題、質問無制限サポート、成功事例の共有、オフ会・勉強会への参加、案件紹介・副業のチャンスなど、より充実した環境をご利用いただけます。",
  },
  {
    question: "AIやプログラミングの知識がなくても大丈夫ですか？",
    answer:
      "はい、非エンジニアでも全く問題ありません。Lv.1「本コミュニティの歩き方」から始まり、段階的にスキルアップできるカリキュラムを用意しています。難しいコードは共有されたJSONをコピペでOK。質問は無制限で、解決まで強き合います。",
  },
  {
    question: "どんなツールを学べますか？",
    answer:
      "n8nをメインに、Make、Dify、bolt、cursor等の最新AIワークフローツールを網羅しています。実際に作れるものの例として、SNS（Insta/TikTok）自動投稿、メール自動返信＆業務効率化bot、記事作成＆分析エージェントなどがあります。",
  },
  {
    question: "Skoolとは何ですか？",
    answer:
      "Skoolは海外発のコミュニティ・学習プラットフォームです。コミュニティ機能、カリキュラム機能、カレンダー機能などが一体となっており、トモラボではこのプラットフォーム上でコンテンツ配信やメンバー間の交流を行っています。",
  },
  {
    question: "オフ会や勉強会はどこで開催されますか？",
    answer:
      "主に東京・大阪で開催しています。勉強会ではみんなでコメントしながらワイワイ楽しみましょう！オンラインでの参加も可能なイベントもあります。",
  },
  {
    question: "退会はいつでもできますか？",
    answer:
      "はい、いつでも退会可能です。Skoolプラットフォーム上から簡単にお手続きいただけます。退会金などは一切かかりません。",
  },
  {
    question: "運営者・運営会社について教えてください。",
    answer:
      "株式会社B-Steep（代表取締役：武藤匠吾）が運営しています。神奈川県藤沢市に本社を置く、AIワークフロー・AIエージェント領域に特化したDX推進企業です。武藤は日本人初のn8n公式アンバサダーでもあり、YouTubeチャンネル「AIワークフロー解説のトモ」の運営も行っています。",
  },
];

export default function FAQSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#bfc5d4' }}>
      {/* 装飾：星と雲 */}
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={55}
        height={55}
        className="absolute top-20 right-12 md:top-28 md:right-20 w-12 aspect-square md:w-16 opacity-70 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={45}
        height={45}
        className="absolute bottom-24 left-12 md:bottom-32 md:left-20 w-10 aspect-square md:w-12 opacity-75 z-0"
      />
      <Image
        src="/images/legacy/sozai/mokumoku.png"
        alt=""
        width={90}
        height={90}
        className="absolute top-[50%] left-[8%] w-20 h-auto md:w-24 opacity-45 z-0"
      />
      <Image
        src="/images/legacy/sozai/fuwafuwa.png"
        alt=""
        width={85}
        height={85}
        className="absolute bottom-[40%] right-[10%] w-18 h-auto md:w-22 opacity-50 z-0"
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal opacity-0 text-gray-400 text-sm tracking-[0.3em] mb-4">
            FAQ
          </p>
          <h2 className="reveal opacity-0 font-mplus text-3xl md:text-5xl font-black tracking-wide">
            よくある質問
          </h2>
        </div>

        <div className="reveal opacity-0 divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="font-mplus text-2xl text-gray-400 font-bold shrink-0">Q.</span>
          <span className="text-base md:text-lg font-bold">{question}</span>
        </div>
        <span
          className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-lg text-gray-400 shrink-0 ml-4 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <div className="pl-12">
          <p className="text-sm md:text-base leading-7 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
