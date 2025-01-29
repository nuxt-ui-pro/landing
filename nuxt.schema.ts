import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      description: 'UI configuration',
      icon: 'i-ph-palette-fill',
      fields: {
        colors: group({
          primary: field({
            type: 'string',
            title: 'Primary',
            description: 'Primary color of your UI.',
            icon: 'i-mdi-palette-outline',
            default: 'green',
            required: ['sky', 'mint', 'rose', 'amber', 'violet', 'emerald', 'fuchsia', 'indigo', 'lime', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'green', 'blue', 'cyan', 'gray', 'white', 'black']
          }),
          neutral: field({
            type: 'string',
            title: 'Neutral',
            description: 'Neutral color of your UI.',
            icon: 'i-mdi-palette-outline',
            default: 'slate',
            required: ['slate', 'neutral', 'stone', 'gray', 'zinc']
          })
        })
      }
    })
  }
})
