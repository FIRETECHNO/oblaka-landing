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
        {
          name: 'description', content: `Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни.`
        },
        { name: 'keywords', content: 'пермь,облака,бар-ресторан,бар,эскобар,room bar,рум бар' },
        { property: 'icon', content: "https://oblaka-perm.ru/favicon.ico" },
        // Open Graph (для соцсетей)
        { property: 'og:title', content: 'Облака - ресторан-бар' },
        { property: 'og:description', content: 'Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни' },
        { property: 'og:image', content: '/icons/logo.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://oblaka-perm.ru/' },
        { property: "twitterTitle", content: 'Облака - ресторан-бар' },
        { property: "twitterDescription", content: 'Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни' },
        { property: "twitterImage", content: 'https://oblaka-perm.ru/favicon.ico' },
        { property: "twitterCard", content: 'summary' },
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
        disallow: ['/admin/**','/login/**','/registration/**'],
      },
    ]
  },

  sitemap: {
    exclude: ['/admin/**','/login/**','/registration/**'],
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