import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,

    theme: {
      defaultTheme: "dark",
      themes: {
        // light: {
        //   dark: false,
        //   colors: {
        //     primary: "#1e8d99", // #1e8d99
        //     secondary: "#894eff", // #894eff
        //   }
        // },
        dark: {
          dark: true,
          colors: {
            background: '#010345',
            surface: '#010345',
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
            info: '#FFFFFF',
          }
        },
      },
    },
    defaults: {
      // VBtn: {
      //   style: 'text-transform: none; letter-spacing: normal',
      // },
      global: {
        ripple: false,
      },
      VRow: {
        class: 'pa-0 ma-0',
        noGutters: true, // убирает горизонтальные отступы (gutter)
      },
      VCol: {
        class: 'pa-0 ma-0',
      },
    },
    ssr: true,
  })

  nuxtApp.vueApp.use(vuetify)
})
