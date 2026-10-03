# site-fujita-create

合同会社Fujita-create のコーポレートサイト（[Astro](https://astro.build/) 製の静的サイト）。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321 で確認
npm run build    # dist/ に静的ファイルを出力
npm run preview  # ビルド結果を確認
```

Node.js 22.12 以上が必要です。

## ページ構成

| URL | ファイル |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about/` | `src/pages/about.astro` |
| `/products/` | `src/pages/products.astro` |
| `/profile/` | `src/pages/profile.astro` |
| `/contact/` | `src/pages/contact/index.astro`（送信完了は `/contact/thanks/`） |
| `/privacy/` | `src/pages/privacy.astro` |

## 内容の差し替え

- 会社情報・事業内容・プロダクト事例・経歴などの文言は `src/data/site.ts` にまとめています。「〇〇」の箇所を正式な内容に置き換えてください。
- 写真は `public/` に置き、次の場所でパスを指定すると表示されます（未指定の間はグレーのプレースホルダー）。
  - トップのメインビジュアル: `src/pages/index.astro` の `heroImage`
  - 下層ページのビジュアル: 各ページの `<PageHero image="...">`
  - プロダクトのスクリーンショット: `src/data/site.ts` の各プロダクトの `image`
  - 代表者の写真: `src/pages/profile.astro` の `portrait`
- お問い合わせフォームは、`src/data/site.ts` の `contactFormEndpoint` に Formspree などのフォーム送信サービスのURLを入れると動作します。
- プライバシーポリシー（`src/pages/privacy.astro`）はたたき台です。公開前に内容を確認してください。
