<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <div class="bg-white/10 ring-1 ring-white/20 rounded-2xl -m-4 p-4">
        <img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="rounded-md shadow">
      </div>

      <ULandingLogos :title="page.logos.title" align="center">
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon" class="w-24 h-24 flex-shrink-0" />
      </ULandingLogos>
    </ULandingHero>

    <div class="bg-white -mt-[800px] pt-[800px]">
      <ULandingSection id="features" :title="page.features.title" :description="page.features.description">
        <UPageGrid v-bind="page.pricing.grid">
          <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
        </UPageGrid>
      </ULandingSection>
    </div>

    <ULandingSection
      id="pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :ui="{
        title: 'text-white selection:bg-primary-600',
        description: 'text-primary-100 selection:bg-primary-600'
      }"
    >
      <UPricingGrid v-bind="page.pricing.grid">
        <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index" v-bind="plan" />
      </UPricingGrid>
    </ULandingSection>

    <ULandingSection id="testimonials" class="bg-gray-50" :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns>
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <UPageCard>
            <q class="italic text-lg text-gray-500 dark:text-gray-400">
              {{ testimonial.quote }}
            </q>

            <template #footer>
              <div class="flex items-center gap-3">
                <UAvatar
                  :src="testimonial.author.avatar"
                  :alt="testimonial.author.name"
                  loading="lazy"
                  size="md"
                />

                <div class="text-sm">
                  <p class="font-medium text-gray-900 dark:text-white">
                    {{ testimonial.author.name }}
                  </p>
                  <p class="text-gray-500 dark:text-gray-400">
                    {{ testimonial.author.title }}
                  </p>
                </div>
              </div>
            </template>
          </UPageCard>
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection class="bg-white">
      <ULandingCTA v-bind="page.cta" />
    </ULandingSection>

    <ULandingSection id="faq" :title="page.faq.title" :description="page.faq.description" class="bg-gray-50">
      <ULandingFAQ :items="page.faq.items" multiple class="max-w-3xl mx-auto" />
    </ULandingSection>
  </div>
</template>
