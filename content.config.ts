import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty()
}

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum,
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum,
  variant: variantEnum
})

const imageSchema = z.object({
  src: z.string().nonempty(),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional()
})

const featureItemSchema = z.object({
  ...baseSchema,
  icon: z.string().nonempty()
})

const sectionSchema = z.object({
  headline: z.string().optional(),
  ...baseSchema,
  features: z.array(featureItemSchema)
})

const userSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  to: z.string().nonempty(),
  avatar: imageSchema
})

const sectionWithLinksSchema = sectionSchema.extend({
  links: z.array(linkSchema)
})

const testimonialUserSchema = userSchema.extend({
  target: z.string().nonempty()
})

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'data',
    schema: z.object({
      ...baseSchema,
      hero: sectionWithLinksSchema,
      features: sectionSchema,
      authorQuote: z.object({
        quote: z.string().nonempty(),
        user: userSchema
      }),
      sections: z.array(
        sectionSchema.extend({
          items: z.array(featureItemSchema),
          links: z.array(linkSchema),
          reverse: z.boolean().optional(),
          code: z.string().optional()
        })
      ),
      templates: sectionWithLinksSchema.extend({
        items: z.array(
          featureItemSchema.extend({
            image: z.string().nonempty(),
            to: z.string().nonempty()
          })
        )
      }),
      pricing: sectionSchema.extend({
        plans: z.array(z.object({
          ...baseSchema,
          price: z.string().nonempty(),
          billing_period: z.string().nonempty(),
          billing_cycle: z.string().nonempty(),
          button: linkSchema,
          features: z.array(z.string().nonempty()),
          highlight: z.boolean().optional()
        }))
      }),
      logos: z.array(z.object({
        src: z.string().nonempty(),
        alt: z.string().nonempty(),
        width: z.string().nonempty(),
        height: z.string().nonempty()
      })),
      testimonials: sectionSchema.extend({
        items: z.array(z.object({
          quote: z.string().nonempty(),
          user: testimonialUserSchema
        }))
      }),
      cta: sectionWithLinksSchema,
      faq: sectionSchema.extend({
        items: z.array(z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
          defaultOpen: z.boolean().optional()
        }))
      })
    })
  })
}
