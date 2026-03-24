# AGENTS.md — トモラボHP（株式会社B-steep）

> AIコーディングエージェント向けのプロジェクトコンテキスト。

## プロジェクト概要

株式会社B-steepの公式HP。Next.js（TypeScript）で構築。「やさしくてかわいい」デザイントーンのトモラボブランド。

## 技術スタック

- **フレームワーク**: Next.js (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS (Vanilla)
- **リンター**: ESLint (`eslint.config.mjs`)
- **型チェック**: TypeScript strict mode (`tsconfig.json`)

## ビルド・テスト

```bash
npm run dev        # 開発サーバー起動
npm run build      # プロダクションビルド
npm run lint       # ESLint実行
```

## ディレクトリ構造

```
株式会社B-steep/
├── src/           ← メインソースコード
├── public/        ← 静的アセット（画像等）
├── 引き継ぎ/      ← クライアントへの引き継ぎ資料
└── デバッグ       ← デバッグログ
```

## コーディング規約

- `coding-standards-skill` を適用
- **デザイントーン**: やさしい・かわいい・親しみやすい（トモラボブランド）
- コンポーネントは機能別に分割（種類別ではなく）
- 画像はpublic/配下に配置
- 日本語コメントOK

## セキュリティ

- .env ファイルは .gitignore に含まれていることを確認
- APIキー等の認証情報はハードコードしない

## 変更時の注意

- UI変更後は `npm run build` でビルドエラーがないことを確認
- ブラウザで実際の表示を確認（browser_subagent使用）
