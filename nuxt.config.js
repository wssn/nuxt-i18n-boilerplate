const pkg = require('./package')


module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#007bff', height: '2px' },

  css: [
    '@/assets/css/style.css',
    '@/assets/css/sass/style.scss'
  ],

  plugins: [
  ],

  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-GB',
          name: 'English',
          file: 'en.json'
        },
        {
          code: 'tr',
          iso: 'tr-TR',
          name: 'Türkçe',
          file: 'tr.json'
        }
      ],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      defaultLocale: 'en',
      lazy: true,
      langDir: 'lang/',
      fallbackLocale: 'en'
    }]
  ],

  axios: {
  },


  build: {
    extend(config, ctx) {
    }
  }
}
