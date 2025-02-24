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
</script>

<template>
  <div class="relative">
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      class="relative"
      :ui="{ container: 'md:pt-18 lg:pt-24' }"
    >
      <template #title>
        <MDC
          :value="page.hero.title"
          class="*:leading-11"
        />
      </template>
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute -bottom-24 h-full"
      />
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      v-bind="section"
      orientation="horizontal"
      :ui="{ container: 'lg:px-0 mx-0 max-w-none md:mr-10', features: 'border-l border-(--ui-border) pl-4' }"
      reverse
    >
      <template #title>
        <MDC
          :value="section.title"
          class="sm:*:leading-11"
        />
      </template>
      <img
        :src="section.images.desktop"
        :alt="section.title"
        class="hidden lg:block left-0 w-full max-w-2xl"
      >
      <img
        :src="section.images.mobile"
        :alt="section.title"
        class="block lg:hidden"
      >
    </UPageSection>

    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />
    <UPageSection
      id="features"
      v-bind="page.features"
      :ui="{ title: 'text-left @container relative', description: 'text-left' }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-(--ui-primary) opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-(--ui-primary) opacity-30 blur-[200px]" />
      <template #title>
        <MDC
          :value="page.features.title"
        />
        <UColorModeImage
          light="/images/light/line-2.svg"
          dark="/images/dark/line-2.svg"
          class="hidden @min-[1070px]:block absolute right-0 top-1/3 transform translate-y-1/2 translate-x-1/2"
        />
      </template>
    </UPageSection>
    <USeparator :ui="{ border: 'border-(--ui-primary)/30' }" />

    <UPageSection
      id="steps"
      v-bind="page.steps"
      class="relative overflow-hidden"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2"
        />
      </template>
      <template #title>
        <MDC :value="page.steps.title" />
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.steps.items"
          :key="index"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
        >
          <UColorModeImage
            :light="step.image?.light"
            :dark="step.image?.dark"
            :alt="step.title"
            class="size-full"
          />
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-(--ui-text-muted)">
              {{ step.description }}
            </span>
          </div>
        </UPageCard>
      </template>
    </UPageSection>

    <UPageSection
      id="pricing"
      v-bind="page.pricing"
    >
      <template #title>
        <MDC :value="page.pricing.title" />
      </template>

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
      <template #headline>
        <UColorModeImage
          light="/images/light/line-5.svg"
          dark="/images/dark/line-5.svg"
          class="absolute -top-10 sm:top-0 right-1/2"
        />
      </template>
      <template #title>
        <MDC :value="page.testimonials.title" />
      </template>
      <UContainer>
        <UPageColumns class="xl:columns-3">
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
      class="relative overflow-hidden"
    >
      <UColorModeImage
        light="/images/light/line-6.svg"
        dark="/images/dark/line-6.svg"
        class="absolute left-10 -top-10 sm:top-0 right-1/2 h-1/2"
      />
      <UColorModeImage
        light="/images/light/line-7.svg"
        dark="/images/dark/line-7.svg"
        class="absolute right-0 bottom-0 h-full"
      />
      <template #title>
        <MDC :value="page.cta.title" />
      </template>
      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
    </UPageCTA>
  </div>
</template>
