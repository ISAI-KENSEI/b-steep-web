"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function WhatSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="reveal opacity-0 font-mplus text-3xl md:text-5xl font-black mb-6">
            「AIワークフロー」とは？
          </h2>
          <p className="reveal opacity-0 text-lg md:text-xl">
            仕事の流れを一部/全部AIで自動化したフローのことです。
          </p>
        </div>

        <div className="reveal opacity-0 mb-16">
          <Image
            src="/images/flow.webp"
            alt="AIワークフロー図"
            width={800}
            height={500}
            className="mx-auto w-full max-w-4xl h-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="reveal opacity-0 bg-blue-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold mb-4">
                情報収集
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-black text-blue-700">→</div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold mb-4">
                記事作成
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-black text-blue-700">→</div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold mb-4">
                入稿
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-black text-blue-700">→</div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold mb-4">
                記事公開
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="/images/legacy/キャラロゴ-20251130T150426Z-1-001/mikan.png"
                  alt="AI"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </div>
              <p className="text-sm md:text-base font-medium">みかんちゃん<br />（AIエージェント）</p>
            </div>

            <div className="text-4xl md:text-5xl font-black text-blue-700">→</div>

            <div className="flex-1 max-w-md">
              <div className="bg-orange-500 text-white px-8 py-4 rounded-xl shadow-lg text-center">
                <p className="text-lg md:text-xl font-black">記事公開</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
