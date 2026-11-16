// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 公開 URL（canonical URL などに使われる）
  site: 'https://site.fujita-create.com',
  // 会社概要はトップ（/）に統合したため、旧URLはトップへ転送
  redirects: {
    '/about': '/',
  },
});
