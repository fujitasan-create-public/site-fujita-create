// サイト全体で使う文言・データ。
// 「〇〇」や「（ここに〜）」となっている箇所は、正式な内容が決まったら差し替えてください。

export const company = {
  name: '合同会社Fujita-create',
  nameEn: 'FUJITA-CREATE LLC',
  copyright: 'Fujita-create LLC',
  email: 'info@fujita-create.com',
  representative: '藤田 香成',
  representativeEn: 'KANARU FUJITA',
};

// フッターの会社情報（2列×4行で表示）
export const companyInfo: { label: string; value: string }[] = [
  { label: '商号', value: company.name },
  { label: '設立', value: '2026年10月' },
  { label: '所在地', value: '〒000-0000 東京都〇〇区〇〇 1-2-3' },
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
  year: string;
  title: string;
  desc: string;
  stack: string;
  // public/ に置いた画像のパス（例: '/images/products/reserve.jpg'）。未設定ならプレースホルダー表示
  image?: string;
};

export const products: Product[] = [
  { kind: '法人', cat: 'WEB APPLICATION', year: '2026', title: '〇〇業向け 予約管理システム', desc: '電話とFAXで受けていた予約をWebで一元管理。', stack: 'Next.js / PostgreSQL / AWS' },
  { kind: '法人', cat: 'BUSINESS SYSTEM', year: '2026', title: '在庫・受発注業務のシステム化', desc: '表計算で管理していた在庫と発注を一つの画面に統合。', stack: 'React / Python / GCP' },
  { kind: '法人', cat: 'INFRASTRUCTURE', year: '2026', title: 'オンプレミスからクラウドへの移行', desc: '社内サーバーをクラウドへ移行し、監視と自動バックアップを整備。', stack: 'AWS / Terraform / Docker' },
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
