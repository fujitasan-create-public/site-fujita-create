// サイト全体で使う文言・データ。
// 「〇〇」や「（ここに〜）」となっている箇所は、正式な内容が決まったら差し替えてください。

export const company = {
  name: '合同会社Fujita-create',
  nameEn: 'FUJITA-CREATE LLC',
  copyright: 'Fujita-create LLC',
  email: 'kanaru.fujita@fujita-create.com',
  representative: '藤田 香成',
  representativeEn: 'KANARU FUJITA',
};

// フッターの会社情報（2列×4行で表示）
export const companyInfo: { label: string; value: string }[] = [
  { label: '商号', value: company.name },
  { label: '設立', value: '2026年11月' },
  // \n の位置で改行して表示されます
  { label: '所在地', value: '〒106-0032 東京都港区六本木2丁目1番19号\nS-Building 3階' },
  { label: '資本金', value: '500,000円' },
  { label: '代表社員', value: company.representative },
  { label: '事業年度', value: '4月1日〜翌年3月31日' },
  { label: '事業内容', value: 'Webアプリ・業務システム開発、インフラ構築' },
  { label: '連絡先', value: company.email },
];

export const nav = [
  { href: '/', label: '会社概要', en: 'ABOUT' },
  { href: '/products/', label: 'プロダクト事例', en: 'PRODUCTS' },
  { href: '/profile/', label: '代表者について', en: 'PROFILE' },
];

export const services = [
  {
    title: 'Webアプリケーション開発',
    en: 'WEB APPLICATION',
    lead: '予約・会員管理・社内ツールなど、ブラウザで動くサービスを設計から公開まで。',
    short: '予約・会員管理・社内ツールなどの設計・開発・保守',
  },
  {
    title: '業務システム受託開発',
    en: 'BUSINESS SYSTEMS',
    lead: '表計算や紙で回している業務を、無理のない範囲でシステムに置き換えます。',
    short: '既存業務の整理からシステム化、運用支援まで',
  },
  {
    title: 'インフラ／クラウド構築',
    en: 'INFRASTRUCTURE & CLOUD',
    lead: 'AWS・Google Cloud等での環境構築、移行、監視・保守の設計。',
    short: 'AWS・Google Cloud等の環境構築、移行、監視・保守',
  },
];

export const values = [
  { title: '業務を深く理解し、伴走する', text: '開発者自身がお客様の業界・業務の知識をしっかりと身につけ、課題の本質を理解したうえで、解決まで伴走します。' },
  { title: '無理をさせない', text: '現場の業務や予算に合わせ、必要な分だけをシステムにします。' },
  { title: '長く保守できる', text: '読みやすいコードと記録を残し、将来の改修や引き継ぎに備えます。' },
];

export type ProductKind = '法人' | '個人';

export type Product = {
  kind: ProductKind;
  cat: string;
  // 期間（例: '2025.04 – 現在'）
  period: string;
  title: string;
  // 概要（カードの最初に出る説明）
  desc: string;
  // 課題・取り組み・成果（省略可）
  challenge?: string;
  approach?: string;
  result?: string;
  stack: string;
  // public/ に置いた画像のパス（例: '/images/products/reserve.jpg'）。未設定ならプレースホルダー表示
  image?: string;
};

// 守秘義務のため、お客様の社名・チーム構成などは載せていません
export const products: Product[] = [
  {
    kind: '法人',
    cat: 'BUSINESS SYSTEM',
    period: '2025.04 – 現在',
    title: '製造業向け業務システム マスタ登録機能の設計・開発',
    desc: '製造業のお客様向け業務システムで、マスタ登録画面と登録・検査フローのUI・API設計から実装までを担当。チームのリードとして、新しいメンバーへのタスク分配や進捗管理も担いました。',
    challenge: 'ご要望は「この資料をアプリに入れてほしい」という抽象的なもので、内容の異なる8つの資料から、開発できる要件を整理する必要がありました。',
    approach: '資料を横断的に分析して共通項を抽出し、要件と開発タスクに落とし込み。お客様のレビューを経たうえで、基本設計から詳細設計、コア機能の実装まで一貫して主導しました。',
    result: '使いにくかった箇所の改善が反映され、お客様から良好な評価をいただきました。',
    stack: 'Next.js / Python / AWS / Terraform',
  },
  {
    kind: '法人',
    cat: 'INFRASTRUCTURE',
    period: '2025.04 – 現在',
    title: 'AWS開発環境のインフラコスト最適化',
    desc: '同じ業務システムの開発で、開発環境のAWSインフラコストの見直しを主導しました。',
    challenge: '開発環境のインフラコストがかさんでおり、最適化が求められていました。',
    approach: 'VPCエンドポイントの整理、RDS構成の見直し、ECSサービスの稼働スケジューリングを組み合わせた施策を立案・実行しました。',
    result: '月々のインフラコストを約180ドル削減しました。',
    stack: 'AWS / Terraform',
  },
  {
    kind: '法人',
    cat: 'WEB APPLICATION',
    period: '2024.08 – 2025.02',
    title: '医療業界向け業務システムの新規開発',
    desc: '新規プロダクトの立ち上げ期から参画し、技術選定とアーキテクチャ設計の提案、5名の開発チームの取りまとめを担当。フロントエンド・バックエンド双方の実装にも携わりました。',
    challenge: '新しい組織での新規開発で、実務経験の浅いメンバーが多い中、開発の標準を整えながらチームを進める必要がありました。',
    approach: 'チームの習熟度を踏まえてFastAPIを採用。層を分ける設計思想は保ちつつ、実装の複雑さを抑えたレイヤードアーキテクチャを提案し、設計方針と開発標準を整備しました。',
    result: '経験の浅いメンバーでも迷わず開発できる環境を整え、アプリケーションを完成まで導きました。',
    stack: 'Next.js / Python (FastAPI) / Vercel',
  },
];

export const skills = ['TypeScript', 'React', 'Python', 'AWS', 'Docker'];

// 経歴（代表者ページのタイムライン）
// title：見出し / detail：補足（省略可） / tag：右上の小さなラベル（省略可）
// highlight：オレンジで目立たせる節目 / future：これからの予定（中抜きの玉で表示）
export type CareerItem = {
  date: string;
  title: string;
  detail?: string;
  tag?: string;
  highlight?: boolean;
  future?: boolean;
};

export const career: CareerItem[] = [
  { date: '2003.05', title: '静岡県に生まれる' },
  { date: '2022.03', title: '静岡県内の高等学校を卒業' },
  { date: '2022.04', title: '京都大学に入学' },
  {
    date: '2023.10',
    title: 'フリーランスとして受託開発を開始',
    detail: 'クラウドワークス・ココナラなどを通じて個人のお客様からの開発案件を受託し、要件の整理から納品までを一人で担当。',
  },
  {
    date: '2024.08',
    title: '企業の開発プロジェクトに参画',
    detail: '知人の紹介をきっかけに、初めて企業案件に参画。以降、複数社の開発プロジェクトに継続して携わる。',
    tag: '現在も継続中',
    highlight: true,
  },
  {
    date: '2026.11',
    title: '合同会社Fujita-create を設立',
    detail: '代表社員に就任。これまでの経験を生かし、法人として開発の受託を開始。',
    highlight: true,
  },
  { date: '2027.03', title: '京都大学を卒業（予定）', future: true },
];

// お問い合わせフォームの送信先。
// 静的サイトなので、Formspree などのフォーム送信サービスのURLを入れると動きます。
// 空のままだと、送信ボタンを押したときに「メールでご連絡ください」と案内します。
export const contactFormEndpoint = '';
