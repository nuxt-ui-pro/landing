// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    ['@nuxtjs/i18n', {
      vueI18n: './i18n.config.ts',
      // locales: [
      //   { code: 'en', iso: 'en-US', file: 'en.js' },
      //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
      //   { code: 'de', iso: 'de-DE', file: 'de.js' },
      //   { code: 'nl', iso: 'nl-NL', file: 'nl.js' }
      // ],
      // lazy: true,
      // langDir: 'lang/',
      // defaultLocale: 'en',
      // vueI18n: {
      //   fallbackLocale: 'en',
      //   messages: {
      //     en: require('./lang/en.js'),
      //     nl: require('./lang/nl.js'),
      //     fr: require('./lang/fr.js'),
      //     de: require('./lang/de.js'),
      //   }
      // }
    }],

  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  ssr: false,
  // i18n: ,
  // i18n: {
  //   locales: ['en', 'fr', 'es'],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en: {
  //         welcome: 'Welcome'
  //       },
  //       fr: {
  //         welcome: 'Bienvenue'
  //       },
  //       es: {
  //         welcome: 'Bienvenido'
  //       }
  //     }
  //   }
  // }
})