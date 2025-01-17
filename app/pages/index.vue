<script setup lang="ts">
const page = await queryCollection('content').first()

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description
})

const cards = [{
  title: 'Color Palette',
  description: 'Choose a primary and a gray color from your Tailwind CSS color palette. Components will be styled accordingly.',
  variant: 'subtle' as const,
  icon: 'i-lucide-palette',
  class: 'col-span-2',
  image: {
    path: 'https://ui.nuxt.com/illustrations/color-palette',
    width: 363,
    height: 152
  },
  orientation: 'horizontal' as const
}, {
  title: 'Fully Customizable',
  description: 'Change the style of any component in your App Config or customize them specifically through the ui prop.',
  variant: 'subtle' as const,
  icon: 'i-lucide-wrench',
  image: {
    path: 'https://ui.nuxt.com/illustrations/fully-customizable',
    width: 444,
    height: 160
  },
  class: 'row-span-1.5',
  orientation: 'vertical' as const
}, {
  title: 'Light & Dark',
  description: 'Every component is designed with dark mode in mind. Works out of the box with @nuxtjs/color-mode.',
  icon: 'i-lucide-moon',
  variant: 'subtle' as const,
  image: {
    path: 'https://ui.nuxt.com/illustrations/dark-mode',
    width: 444,
    height: 160
  },
  class: '',
  orientation: 'vertical' as const
}, {
  title: 'Icons',
  description: 'Choose any of the 100k+ icons from the most popular icon libraries with the Icon component or the icon prop.',
  variant: 'subtle' as const,
  icon: 'i-lucide-smile',
  image: {
    path: 'https://ui.nuxt.com/illustrations/icon-library',
    width: 362,
    height: 184
  },
  class: 'col-span-2',
  orientation: 'horizontal' as const
}]

const isDark = computed(() => useColorMode().value == 'dark')
</script>

<template>
  <div class="relative">
    <div
      class="absolute rounded-full dark:bg-[var(--ui-primary)] blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80"
    />
    <UPageHero
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <template #title>
        <div class="relative">
          <ParticlesBg
            class="absolute inset-0"
            :quantity="100"
            :ease="100"
            :color="isDark ? '#FFF' : '#000'"
            :staticity="10"
            refresh
          />
          <div class="max-w-4xl mx-auto text-center">
            <UIcon
              name="i-simple-icons-nuxtdotjs"
              class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
            />
            <h1 class="">
              {{ page.hero.title }}
            </h1>
          </div>
        </div>
      </template>

      <ImagePlaceholder />

      <!--      <ULandingLogos
        :title="page.logos.title"
        align="center"
      >
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
        />
      </ULandingLogos> -->
    </UPageHero>

    <UPageSection
      id="features"
      headline="Features"
      title="Everything you expect from a UI component library"
    >
      <UPageGrid>
        <UPageCard
          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
        >
          <UColorModeImage
            :light="`${card.image.path}-light.svg`"
            :dark="`${card.image.path}-dark.svg`"
            :width="card.image.width"
            :height="card.image.height"
            :alt="card.title"
            loading="lazy"
            class="object-cover w-full"
          />
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="templates"
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
      orientation="horizontal"
      class="overflow-hidden"
      :features="page.features.items"
      :links="[{
        label: 'Explore',
        to: '/docs',
        color: 'neutral',
        variant: 'subtle',
        trailingIcon: 'i-lucide-arrow-right'
      }]"
    >
      <div class="flex items-start justify-start">
        <UColorModeImage
          light="https://ui.nuxt.com/templates/dashboard3.png"
          dark="https://ui.nuxt.com/templates/dashboard2.png"
          alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem] ring ring-[var(--ui-border)]"
          width="4804"
          height="3000"
        />
      </div>
    </UPageSection>

    <UPageSection
      id="pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :headline="page.pricing.headline"
    >
      <UContainer>
        <UPricingPlan
          title="Free in development"
          description="Try Nuxt UI Pro for free in development, no credit card required. Upgrade when ready to deploy."
          orientation="horizontal"
          class="mb-16"
        >
          <template #button>
            <div class="flex flex-col w-full gap-2">
              <UButton
                color="neutral"
                variant="subtle"
                label="Get started for Free"
                to="https://ui3.nuxt.dev/getting-started"
                target="_blank"
                size="lg"
                block
              />
            </div>
          </template>
        </UPricingPlan>

        <UPricingPlans
          class="mb-16"
          scale
        >
          <UPricingPlan
            v-for="(plan, index) in page.pricing.plans"
            :key="index"
            :title="plan.title"
            :description="plan.description"
            :price="plan.price"
            :billing-period="plan.billing_period"
            :billing-cycle="plan.billing_cycle"
            :highlight="plan.highlight"
            :scale="plan.highlight"
            variant="soft"
            :features="plan.features"
            :button="plan.button"
          />
        </UPricingPlans>

        <UPricingPlan
          title="Figma Kit Pro"
          description="Get all Nuxt UI Pro components in a Figma kit to design your next application before coding. Everything you need, from wire-framing to high-fidelity web integration."
          orientation="horizontal"
          price="$99"
          billing-period="plus local taxes"
          billing-cycle="one-time payment"
          tagline="Pay once, own it forever"
          terms="Invoices and receipts available for easy company reimbursement"
          :features="[
            '1500+ components & variants from Nuxt UI & UI Pro',
            'Light & dark mode support',
            'Auto-layout & responsive ready',
            'Free lifetime updates',
            'Variables: primary, gray, fonts, rounded, shadows, etc.',
            'Templates: Landing, Docs, SaaS and Dashboard (soon)',
            'Tailwind CSS assets & icons included',
            'Includes Nuxt UI Figma Kit'
          ]"
        >
          <template #button>
            <div class="flex flex-col w-full gap-2">
              <UButton
                color="neutral"
                label="Buy now"
                to="https://nuxt.lemonsqueezy.com/buy/17213c49-621b-4c2c-9478-3a50a099003d"
                size="lg"
                block
              />
              <UButton
                color="neutral"
                variant="subtle"
                icon="i-simple-icons-figma"
                label="Preview in Figma"
                to="https://www.figma.com/community/file/1288455405058138934/nuxt-ui-v3-official-design-kit-free"
                target="_blank"
                block
                size="lg"
              />
            </div>
          </template>
        </UPricingPlan>
      </UContainer>
    </UPageSection>

    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UContainer>
        <UPageColumns class="xl:columns-4">
          <UPageCard
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            variant="subtle"
            :description="testimonial.quote"
            :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
          >
            <template #footer>
              <UUser
                v-bind="testimonial.user"
                size="xl"
              />
            </template>
          </UPageCard>
        </UPageColumns>
      </UContainer>
    </UPageSection>

    <UPageCTA
      description="“Nuxt UI, born from a desire to improve Vue component development, is the go-to library for building modern web interfaces. We aim to provide you with a comprehensive set of tools to create and customize your next UI while maintaining the best developer experience.”"
      variant="soft"
      class="rounded-none"
      :ui="{ container: 'lg:py-12' }"
    >
      <UUser
        name="Benjamin Canac"
        description="Author of Nuxt UI"
        to="https://github.com/benjamincanac"
        :avatar="{ src: 'https://github.com/benjamincanac.png' }"
        size="xl"
        class="justify-center"
      />
    </UPageCTA>

    <UPageSection>
      <UPageCTA
        v-bind="page.cta"
      />
    </UPageSection>

    <UPageSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <UPageAccordion
        multiple
        :items="page.faq.items"
        class="max-w-4xl mx-auto"
      >
        <template #body="{ item }">
          <MDC
            :value="item.content"
            unwrap="p"
          />
        </template>
      </UPageAccordion>
    </UPageSection>
  </div>
</template>
