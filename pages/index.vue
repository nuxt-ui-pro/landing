<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <div>
    <Jumbo />

    <ULandingHero>
      <template #title>
        <span v-html="page.hero.title" />
      </template>

      <template #description>
        <span v-html="page.hero.description" />
      </template>
    </ULandingHero>

    <ULandingSection id="pricing" :title="page.pricing.title" :description="page.pricing.description">
      <UPricingGrid v-bind="page.pricing.grid" compact>
        <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index" v-bind="plan" />
      </UPricingGrid>
    </ULandingSection>

    <ULandingSection id="faq" :title="page.faq.title" :description="page.faq.description">
      <ULandingFAQ :items="page.faq.items" multiple />
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA v-bind="page.cta" />
    </ULandingSection>
  </div>
</template>
