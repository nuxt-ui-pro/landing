import { defineCollection, z } from '@nuxt/content'

export const collections = {
  content: defineCollection({
    type: 'data',
    source: '*.yml',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty()
    })
  })
}
