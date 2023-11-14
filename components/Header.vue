<script setup lang="ts">
const links = [{
  label: 'Features',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  exactHash: true
}, {
  label: 'Pricing',
  to: '#pricing',
  icon: 'i-heroicons-credit-card',
  exactHash: true
}, {
  label: 'Testimonials',
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  exactHash: true
}, {
  label: 'FAQ',
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  exactHash: true
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro <UBadge label="Landing" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Sign in" color="gray" variant="ghost" class="hidden lg:flex" />
      <UButton label="Get started" color="black" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="gray" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>