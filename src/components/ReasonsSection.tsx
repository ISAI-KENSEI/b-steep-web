"use client";

import Image from "next/image";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const reasons = [
  {
    number: "1",
    title: "日本人初のn8n公式アンバサダーが運営",
    description:
      "世界約55名のみが選出されるn8n公式アンバサダー・武藤匠吾が直接運営。n8nをメインに、Make・Dify・bolt・cursor等の最新ツールも網羅した、AIワークフロー構築に特化した日本最大規模のコミュニティです。",
  },
  {
    number: "2",
    title: "質問無制限！挫折ゼロで学べる",
    description:
      "エラーが出ても大丈夫。n8nやMakeでつまづいたら、すぐに質問してください。解決まで無制限で付き合います。難しいコードは共有されたJSONをコピペして動かすところから始めましょう。",
  },
  {
    number: "3",
    title: "スキルが「仕事」や「武器」に変わる",
    description:
      "コミュニティ内では、メンバー同士のコラボや仕事の相談が生まれ、実際に案件紹介もあります。YouTube Shorts 130万回再生、AIエージェント案件の契約獲得など、学びが成果に直結しています。",
  },
  {
    number: "4",
    title: "「ひとり」じゃないから面白い！仲間と繋がる",
    description:
      "新しい技術への挑戦は孤独になりがち。でもトモラボには同じ熱量を持った仲間がいます。東京・大阪でのオフ会や勉強会でリアルに繋がり、ワイワイ楽しみながら学びましょう。",
  },
];

export default function ReasonsSection() {
  const sectionRef = useRevealAnimation();

  return (
    <section ref={sectionRef} aria-label="トモラボが選ばれる理由" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#bfc5d4' }}>
      {/* 装飾：chi・シャトル・星 */}
      <Image
        src="/images/legacy/sozai/chi.png"
        alt=""
        width={582}
        height={582}
        className="absolute top-12 right-8 md:top-16 md:right-16 w-20 aspect-square md:w-28 opacity-60 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/shuttle.png"
        alt=""
        width={120}
        height={120}
        className="absolute top-12 left-8 md:top-20 md:left-16 w-24 h-auto md:w-32 opacity-60 z-0 hidden sm:block"
      />
      <Image
        src="/images/legacy/sozai/star_0.png"
        alt=""
        width={60}
        height={60}
        className="absolute bottom-20 right-8 md:bottom-32 md:right-20 w-12 aspect-square md:w-16 opacity-75 z-0"
      />
      <Image
        src="/images/legacy/sozai/star_1.png"
        alt=""
        width={50}
        height={50}
        className="absolute top-[50%] right-12 w-10 aspect-square md:w-12 opacity-65 z-0"
      />
      <Image
        src="/images/legacy/sozai/mokumoku.png"
        alt=""
        width={90}
        height={90}
        className="absolute bottom-[40%] left-[15%] w-20 h-auto md:w-24 opacity-45 z-0"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <h2 className="reveal opacity-0 font-mplus text-xl sm:text-3xl md:text-5xl font-black tracking-wide mb-12 sm:mb-20">
          トモラボが選ばれる4つの理由
        </h2>

        {/* カルーセル風 */}
        <div className="relative">
          <div className="space-y-20 md:space-y-0">
            {reasons.map((reason, index) => (
              <div
                key={reason.number}
                className="reveal opacity-0 flex flex-col md:flex-row items-center gap-8 md:gap-16 py-8 md:py-16 border-b border-gray-100 last:border-b-0"
              >
                {/* 左：イラストエリア */}
                <div className="w-full md:w-[45%] flex justify-center">
                  <ReasonIllustration index={index} />
                </div>

                {/* 右：テキスト */}
                <div className="w-full md:w-[55%]">
                  <span className="font-mplus text-4xl sm:text-6xl md:text-8xl text-gray-200 font-black block mb-2 leading-none">
                    {reason.number}.
                  </span>
                  <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-500 mb-4 sm:mb-6 tracking-wide leading-relaxed">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 text-gray-700">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonIllustration({ index }: { index: number }) {
  const illustrations = [
    // 1. ワークフロー
    <svg key="workflow" viewBox="0 0 300 300" className="w-48 sm:w-56 md:w-64 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="60" width="80" height="50" rx="8" stroke="#111" strokeWidth="2.5" fill="none" />
      <text x="38" y="90" fontSize="14" fill="#111" fontFamily="monospace">n8n</text>
      <rect x="140" y="20" width="80" height="50" rx="8" stroke="#111" strokeWidth="2.5" fill="none" />
      <text x="155" y="50" fontSize="14" fill="#111" fontFamily="monospace">Make</text>
      <rect x="140" y="100" width="80" height="50" rx="8" stroke="#111" strokeWidth="2.5" fill="none" />
      <text x="155" y="130" fontSize="14" fill="#111" fontFamily="monospace">Dify</text>
      <rect x="80" y="200" width="140" height="60" rx="12" stroke="#111" strokeWidth="2.5" fill="none" />
      <text x="100" y="236" fontSize="16" fill="#111" fontFamily="monospace">AI Agent</text>
      <path d="M100 85 L140 45" stroke="#111" strokeWidth="2" />
      <path d="M100 85 L140 125" stroke="#111" strokeWidth="2" />
      <path d="M180 70 L150 200" stroke="#111" strokeWidth="2" strokeDasharray="6 4" />
      <path d="M180 150 L150 200" stroke="#111" strokeWidth="2" strokeDasharray="6 4" />
    </svg>,
    // 2. 無料スタート
    <svg key="free" viewBox="0 0 300 300" className="w-48 sm:w-56 md:w-64 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="150" cy="100" r="50" stroke="#111" strokeWidth="2.5" fill="none" />
      <text x="120" y="108" fontSize="28" fill="#111" fontFamily="monospace">¥0</text>
      <path d="M100 160 L80 240" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M200 160 L220 240" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M150 150 L150 260" stroke="#111" strokeWidth="2.5" fill="none" />
      <rect x="60" y="240" width="180" height="35" rx="17" stroke="#111" strokeWidth="2" fill="none" />
      <text x="90" y="263" fontSize="14" fill="#111" fontFamily="monospace">Step Up!</text>
      <path d="M110 60 L115 45 L120 60" stroke="#111" strokeWidth="2" />
      <path d="M170 55 L175 40 L180 55" stroke="#111" strokeWidth="2" />
    </svg>,
    // 3. 成功事例
    <svg key="success" viewBox="0 0 300 300" className="w-48 sm:w-56 md:w-64 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="30" y="40" width="240" height="140" rx="12" stroke="#111" strokeWidth="2.5" fill="none" />
      <polygon points="120,70 120,150 190,110" fill="none" stroke="#111" strokeWidth="2.5" />
      <text x="60" y="210" fontSize="14" fill="#111" fontFamily="monospace">130万回再生</text>
      <text x="60" y="235" fontSize="14" fill="#111" fontFamily="monospace">登録者1,000人</text>
      <path d="M50 260 L250 260" stroke="#111" strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="60" y="270" width="60" height="20" rx="10" stroke="#111" strokeWidth="1.5" fill="none" />
      <rect x="140" y="270" width="100" height="20" rx="10" stroke="#111" strokeWidth="1.5" fill="none" />
    </svg>,
    // 4. オフ会
    <svg key="offkai" viewBox="0 0 300 300" className="w-48 sm:w-56 md:w-64 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="80" cy="100" r="25" stroke="#111" strokeWidth="2.5" fill="none" />
      <circle cx="150" cy="90" r="28" stroke="#111" strokeWidth="2.5" fill="none" />
      <circle cx="220" cy="100" r="25" stroke="#111" strokeWidth="2.5" fill="none" />
      <path d="M60 125 Q80 180 80 220" stroke="#111" strokeWidth="2" fill="none" />
      <path d="M100 125 Q80 180 80 220" stroke="#111" strokeWidth="2" fill="none" />
      <path d="M125 118 Q150 180 150 220" stroke="#111" strokeWidth="2" fill="none" />
      <path d="M175 118 Q150 180 150 220" stroke="#111" strokeWidth="2" fill="none" />
      <path d="M200 125 Q220 180 220 220" stroke="#111" strokeWidth="2" fill="none" />
      <path d="M240 125 Q220 180 220 220" stroke="#111" strokeWidth="2" fill="none" />
      <rect x="40" y="230" width="220" height="40" rx="8" stroke="#111" strokeWidth="2" fill="none" />
      <text x="75" y="256" fontSize="16" fill="#111" fontFamily="monospace">MEETUP</text>
    </svg>,
  ];
  return illustrations[index] || illustrations[0];
}
