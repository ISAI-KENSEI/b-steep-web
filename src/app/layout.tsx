import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, M_PLUS_1p } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "トモラボ！｜今日から始めるAIワークフロー教室",
  description:
    "日本人初のn8n公式アンバサダー・武藤匠吾が運営するAIワークフロー特化コミュニティ。n8nをメインに、非エンジニアでもAI自動化が組めるようになる。質問無制限・挫折ゼロ。無料コミュニティあり。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${mPlus1p.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          メインコンテンツへスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
