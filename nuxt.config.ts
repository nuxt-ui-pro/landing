// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxt/ui'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  // Fonts
  fontMetrics: {
    fonts: ['Noto Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Noto+Sans': [400, 500, 600, 700]
    }
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
