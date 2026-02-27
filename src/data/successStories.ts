export interface SuccessItem {
  text: string;
  name: string;
  tag: string;
  number: string;
  image: string;
}

export const successItems: SuccessItem[] = [
  {
    number: "1,300,000",
    text: "n8nとSora2（動画生成AI）を組み合わせ、YouTube Shortsの運用を半自動化。開始わずか1ヶ月で130万回再生を達成し、収益化ラインの登録者1,000人を突破。AIワークフローを単なるツールではなく「武器」として使いこなした事例です。",
    name: "宮城博（みやひろ）さん（経営者）",
    tag: "YouTube Shorts 130万回再生",
    image: "/images/workflow/youtube-shorts.png",
  },
  {
    number: "AI Agent",
    text: "n8n×OpenAI APIを使ったリサーチ精度の向上に挑戦。「通常のChatGPTに比べてAPIの回答が雑になる」という課題に対し、Web検索（Tavily等）を組み合わせる解決策をコミュニティで共有・実現。中規模のAIエージェント案件の契約獲得に成功しました。",
    name: "Atuki Furukiさん",
    tag: "AIエージェント案件の契約獲得",
    image: "/images/workflow/ai-agent.png",
  },
  {
    number: "2 weeks",
    text: "SaaS企業の重要課題「カスタマーサポート音声の活用」に着手。n8nを使ってわずか2週間で音声分析システムを構築。AIによる文字起こし→構造化→タグ付けで、現場の声を「経営判断に使えるデータ」としてデータテーブルに蓄積される仕組みを完成させました。",
    name: "大森さん",
    tag: "CS音声を経営資源に昇華",
    image: "/images/workflow/cs-voice.png",
  },
  {
    number: "Auto",
    text: "YouTubeの競合分析自動化、Sora2での動画自動作成、RSSスクレイピングとプラットフォームへの自動展開を実現。ライター業務の効率が劇的に改善されています。",
    name: "あまねさん（仮想通貨ライター）",
    tag: "競合分析・動画自動作成",
    image: "/images/workflow/competitor-analysis.png",
  },
  {
    number: "OCR→Mail",
    text: "交流会で大量に貰った名刺を写メしてドライブにアップするだけで、メールを自動作成する仕組みを構築。営業後のフォローアップ業務を大幅に効率化しました。",
    name: "Aさん（あっきーさん・経営者）",
    tag: "名刺→メール自動化",
    image: "/images/workflow/ocr-mail.png",
  },
  {
    number: "PDF→List",
    text: "メールの下書き作成・返信・自動振り分けに加え、PDFから必要な情報を抽出し不足情報はWebから自動取得して補完。一覧リストとして整理するAIワークフローを開発しました。",
    name: "リョウさん（RPAセールスエンジニア）",
    tag: "メール自動化・PDF情報抽出",
    image: "/images/workflow/pdf-extraction.png",
  },
  {
    number: "Daily",
    text: "メールで受信した請求書を自動でドライブ保存。データの自動整理と日次メール送信も自動化。経理業務の手作業を大幅に削減しました。",
    name: "ゆうさん",
    tag: "請求書・データ自動整理",
    image: "/images/workflow/invoice-auto.png",
  },
  {
    number: "Multi-Flow",
    text: "Gmail仕訳+下書きワークフロー、ポッドキャストのSNS自動投稿ワークフローを開発。スケジュール調整エージェントも構築し、日常業務の多くを自動化しています。",
    name: "テクテクさん・けんまるさん",
    tag: "Gmail・SNS・スケジュール自動化",
    image: "/images/workflow/multi-flow.png",
  },
];
