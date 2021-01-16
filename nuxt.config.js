import colors from 'vuetify/es5/util/colors'

require('dotenv').config()
const { GOOGLE_API_KEY, FORMRUN_ID } = process.env

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - sakajiri-client-nuxt',
    title: '千葉県柏市の音楽教室なら坂尻ミュージックスクール',
    script: [
      {
        src: 'https://sdk.form.run/js/v2/formrun.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '千葉県柏市にあるピアノ教室・エレクトーン教室です。個人指導レッスン40分。指導歴35年以上の講師が一人ひとりにあわせたレッスンを提供します。'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'さかじり音楽教室' },
      { hid: 'og:title', property: 'og:title', content: 'さかじり音楽教室 | 千葉県柏市のピアノ・エレクトーン教室' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://cranky-torvalds-9fe3dd.netlify.app' },
      { hid: 'og:image', property: 'og:image', content: 'https://cranky-torvalds-9fe3dd.netlify.app/ogp.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue2-google-maps.js' },
    { src: '~/plugins/vue-scrollmagic.js' },
    { src: '~/plugins/vue-scrollto.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#F2A0D5', // 淡いピンク
          accent: '#F27ECA', // 濃いピンク
          secondary: '#81A649', // 緑
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {},
    transpile: [/^vue2-google-maps($|\/)/]
  },

  webfontloader: {
    google: {
      families: ['Caveat:400,700'] // Loads Lato font with weights 400 and 700
    }
  },
  env: {
    GOOGLE_API_KEY,
    FORMRUN_ID
  },

  googleAnalytics: {
    id: 'G-DL2TEWRJYX'
  }

}
