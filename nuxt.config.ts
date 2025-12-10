import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {

      title: "Облака - ресторан-бар",
      meta: [
        {
          name: 'description', content: `Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни.`
        },
        { name: 'keywords', content: 'пермь,облака,бар-ресторан,бар,эскобар,room bar,рум бар' },

        // Open Graph (для соцсетей)
        { property: 'og:title', content: 'Облака - ресторан-бар' },
        { property: 'og:description', content: 'Самый высокий бар-ресторан города с летней террасой Мы предлагаем вам обширную карту коктейльной классики, изысканные блюда средиземноморской, паназиатской и европейской кухни' },
        { property: 'og:image', content: '/icons/logo.png' },
        { property: 'og:type', content: 'website' },
      ],
    }
  },
  css: ["@/assets/styles/main.css", "@/assets/styles/fonts.css"],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  runtimeConfig: {
    ycAccessKeyId: process.env.YC_KEY_ID,
    ycSecretAccessKey: process.env.YC_SECRET,
    ycBucket: process.env.YC_BUCKET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  routeRules: {
    '/admin/**': { ssr: false },
  },
})