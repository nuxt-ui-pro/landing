import { default as de } from './lang/de'
import { default as nl } from './lang/nl'
import { default as fr } from './lang/fr'
import { default as en } from './lang/en'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    nl,
    fr,
    de,
  },
  // locales: [
  //   { code: 'en', iso: 'en-US', file: 'en.js' },
  //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
  //   { code: 'de', iso: 'de-DE', file: 'de.js' },
  //   { code: 'nl', iso: 'nl-NL', file: 'nl.js' }
  // ],
  lazy: true,
  // langDir: 'lang/',
  defaultLocale: 'en',
}))
