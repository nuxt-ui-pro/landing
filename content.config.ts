import { defineCollection, z } from '@nuxt/content'

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'data',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      hero: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        headline: z.object({
          label: z.string().nonempty(),
          to: z.string().nonempty(),
          icon: z.string().nonempty()
        }),
        links: z.array(
          z.object({
            label: z.string().nonempty(),
            icon: z.string().nonempty(),
            trailing: z.string().nonempty(),
            to: z.string().nonempty(),
            size: z.string().nonempty()
          })
        )
      }),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(
          z.string().nonempty()
        )
      }),
      features: z.object({
        headline: z.string().nonempty(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            title: z.string().nonempty(),
            description: z.string().nonempty(),
            icon: z.string().nonempty()
          })
        )
      }),
      pricing: z.object({
        headline: z.string().nonempty(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        plans: z.array(
          z.object({
            title: z.string().nonempty(),
            description: z.string().nonempty(),
            price: z.string().nonempty(),
            billing_period: z.string().nonempty(),
            billing_cycle: z.string().nonempty(),
            button: z.object({
              label: z.string().nonempty()
            }),
            features: z.array(
              z.string().nonempty()
            ),
            highlight: z.boolean().optional()
          })
        )
      }),
      testimonials: z.object({
        headline: z.string().nonempty(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: z.object({
                src: z.string().nonempty(),
                alt: z.string().nonempty()
              })
            })
          })
        )
      }),
      cta: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.object({
          label: z.string().nonempty(),
          size: z.string().nonempty()
        })
      }),
      faq: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty(),
            defaultOpen: z.boolean()
          })
        )
      })
    })
  })
}
