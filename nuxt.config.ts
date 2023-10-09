// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro',
  modules: ['@nuxt/ui'],

  ui: {
    icons: ['heroicons', 'simple-icons']
  }
})