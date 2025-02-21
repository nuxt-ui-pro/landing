<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => {
  return queryCollection('content').first()
})

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const isDark = computed(() => useColorMode().value == 'dark')
</script>

<template>
  <div class="relative">
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      class="relative"
    >
      <template #top>
        <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80" />

        <ParticlesBg
          class="absolute inset-0 z-[-1] h-[400px]"
          :quantity="100"
          :ease="100"
          :color="isDark ? '#FFF' : '#000'"
          :staticity="10"
          refresh
        />
      </template>
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      v-bind="section"
      orientation="horizontal"
    />

    <UPageSection
      v-bind="page.features"
      :ui="{ title: 'text-left', description: 'text-left' }"
    />

    <UPageSection
      id="pricing"
      v-bind="page.pricing"
    >
      <UContainer>
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
      </UContainer>
    </UPageSection>

    <UPageSection
      id="testimonials"
      v-bind="page.testimonials"
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

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />

      <StarsBg />
    </UPageCTA>
  </div>
</template>
