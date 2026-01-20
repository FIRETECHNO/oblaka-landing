import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker'],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      title: "Облака - ресторан-бар",
      meta: [
        { name: 'yandex-verification', content: 'b2615989a7977ad7' },
        {
          name: 'description',
          content: `Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни.`
        },
        { name: 'keywords', content: 'пермь,облака,бар-ресторан,бар,эскобар,room bar,рум бар' },
        { name: 'icon', content: "https://oblaka-perm.ru/favicon.ico" }, // ← исправлено: name, а не property
        // Open Graph
        { property: 'og:title', content: 'Облака - ресторан-бар' },
        { property: 'og:description', content: 'Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни' },
        { property: 'og:image', content: '/icons/logo.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://oblaka-perm.ru/' },
        // Twitter (исправлены названия — должны быть с префиксом `twitter:`)
        { name: 'twitter:title', content: 'Облака - ресторан-бар' },
        { name: 'twitter:description', content: 'Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни' },
        { name: 'twitter:image', content: 'https://oblaka-perm.ru/favicon.ico' },
        { name: 'twitter:card', content: 'summary' },
      ],
      script: [
        {
          innerHTML: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=106354730', 'ym');
          ym(106354730, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: "dataLayer",
            accurateTrackBounce: true,
            trackLinks: true
          });
        `,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/106354730" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
    },
  },
  css: ["@/assets/styles/main.css", "@/assets/styles/fonts.css"],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  robots: {
    groups: [
      {
        userAgent: '*',
        disallow: ['/admin/**', '/login/**', '/registration/**'],
      },
    ]
  },

  sitemap: {
    exclude: ['/admin/**', '/login/**', '/registration/**'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(), // Set last modification date
    }
  },

  runtimeConfig: {
    ycAccessKeyId: process.env.YC_KEY_ID,
    ycSecretAccessKey: process.env.YC_SECRET,
    ycBucket: process.env.YC_BUCKET,
    vkAccessToken: process.env.VK_ACCESS_TOKEN,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  routeRules: {
    '/admin/**': { ssr: false },
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    }
  },
})