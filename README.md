# Nuxt
Minimalistic Boilerplate for Nuxt.JS applications with fully ready Nuxt i18n module.


## Installation

```sh
git clone https://github.com/Wssn/nuxt-i18n-boilerplate.git
cd nuxt-i18n-boilerplate
npm install
npm run dev
```


## Features
- Integration with [nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/)
- [Boostrap Vue](https://bootstrap-vue.js.org/)
- Search Engine Optimization
- Well-organized separated language files.
- SEO friendly URL

## Language Files

There is a `lang` directory in root folder. Each language has their own `.json` file.

### SEO Friendly URLs

pages/example.vue

```javascript
nuxtI18n: {
  paths: {
    // add your multilanguage seo friendly urls for each lang
    en: '/example-route',
    tr: '/ornek-route'
  }
}
```

