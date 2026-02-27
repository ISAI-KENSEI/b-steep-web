"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function ValueSection() {
  const sectionRef = useRevealAnimation();

  const values = [
    {
      title: "作りたいAIワークフローを必ず形に",
      items: [
        "エラー時はトモ＆メンバーが即サポート",
        "AI構築のロードマップで「何から始めよう？」を解決",
        "豊富なワークフロー事例から業務改善のアイデアが得られる"
      ]
    },
    {
      title: "業界随一のAIシステム構築特化コンテンツ",
      items: [
        "ここでしか見られない10時間超の動画教材",
        "コピペで動くJSONコードを多数共有",
        "毎週のAIニュース＋毎月新コンテンツを継続配信",
        "AIツール専門家へのインタビュー動画"
      ]
    },
    {
      title: "各業界の仲間と繋がれるコミュニティ",
      items: [
        "作ったAIを投稿すると仲間から改善フィードバック",
        "案件相談やコラボが生まれ、副業・キャリアのチャンスにも",
        "メンバー同士での仕事やコラボが生まれた実績あり",
        "各業界で活躍する、AI感度の高いメンバーが多数参加"
      ]
    },
    {
      title: "ライブイベントで楽しく学べる",
      items: [
        "四半期ごとにオフ会(東京・大阪)を多数開催",
        "オンラインで「トモのAI勉強会」を定期開催",
        "最新AI知識＆実践スキルをコミュニティと一緒に習得"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0b245b' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="reveal opacity-0 text-center font-mplus text-3xl md:text-5xl font-black text-white mb-16">
          「トモラボ＋」が誇る4つの提供価値
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="reveal opacity-0 bg-white rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                {value.title}
              </h3>
              <ul className="space-y-2">
                {value.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base leading-relaxed">
                    ・{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
