<script setup lang="ts">
const page = await queryCollection('content').first()

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description
})
</script>

<template>
  <div>
    <UPageHero
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <template #title>
        <div>
          <UIcon
            name="i-simple-icons-nuxtdotjs"
            class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"
          />
          <h1 class="">
            {{ page.hero.title }}
          </h1>
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
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
      orientation="horizontal"
      reverse
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
      <div class="flex items-start justify-end">
        <img
          src="https://ui.nuxt.com/templates/dashboard3.png"
          alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem] ring ring-[var(--ui-border)]"
          width="4804"
          height="3000"
        >
      </div>
    </UPageSection>

    <!--    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(&#45;&#45;header-height)+140px+128px+96px)]"
      >
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </UPageSection> -->

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
      />
    </UPageSection>
  </div>
</template>
