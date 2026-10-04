// サイト全体で使う文言・データ。
// 「〇〇」や「（ここに〜）」となっている箇所は、正式な内容が決まったら差し替えてください。

export const company = {
  name: '合同会社Fujita-create',
  nameEn: 'FUJITA-CREATE LLC',
  copyright: 'Fujita-create LLC',
  email: 'info@fujita-create.com',
  representative: '藤田 〇〇',
  representativeEn: '〇〇 FUJITA',
};

// フッターの会社情報（2列×4行で表示）
export const companyInfo: { label: string; value: string }[] = [
  { label: '商号', value: company.name },
  { label: '設立', value: '2026年10月' },
  { label: '所在地', value: '〒000-0000 東京都〇〇区〇〇 1-2-3' },
  { label: '資本金', value: '〇〇万円' },
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
  { kind: '個人', cat: 'WEB APPLICATION', year: '2025', title: '（個人開発）〇〇管理アプリ', desc: '日々の記録を手軽に残せるWebアプリ。企画からデザインまで担当。', stack: 'TypeScript / Firebase' },
  { kind: '個人', cat: 'TOOL', year: '2025', title: '（個人開発）開発者向け〇〇ツール', desc: '日常の作業を自動化するコマンドラインツール。オープンソースで公開。', stack: 'Go / GitHub Actions' },
  { kind: '個人', cat: 'WEB APPLICATION', year: '2024', title: '（個人開発）〇〇検索サービス', desc: '公開データを整理し、条件で絞り込めるようにした検索サービス。', stack: 'Python / FastAPI / Vercel' },
];

export const skills = ['TypeScript', 'React', 'Python', 'AWS', 'Docker'];

export const career = [
  { date: '20XX.04', text: '〇〇大学 〇〇学部 入学' },
  { date: '20XX', text: '（学生時代の開発経験・インターン等）' },
  { date: '20XX', text: '個人でのWebアプリケーション開発を開始' },
  { date: '2026.10', text: '合同会社Fujita-create を設立、代表社員に就任' },
  { date: '2027.03', text: '〇〇大学 〇〇学部 卒業（予定）' },
];

// お問い合わせフォームの送信先。
// 静的サイトなので、Formspree などのフォーム送信サービスのURLを入れると動きます。
// 空のままだと、送信ボタンを押したときに「メールでご連絡ください」と案内します。
export const contactFormEndpoint = '';
