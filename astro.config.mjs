// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 本番ドメインが決まったら設定してください（canonical URL などに使われます）
  site: 'https://fujita-create.com',
  // 会社概要はトップ（/）に統合したため、旧URLはトップへ転送
  redirects: {
    '/about': '/',
  },
});
