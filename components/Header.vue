<script setup lang="ts">
const links = [{
  label: 'Features',
  to: '#features',
  exactHash: true
}, {
  label: 'Pricing',
  to: '#pricing',
  exactHash: true
}, {
  label: 'Testimonials',
  to: '#testimonials',
  exactHash: true
}, {
  label: 'FAQ',
  to: '#faq',
  exactHash: true
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro <UBadge label="Landing" variant="solid" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Sign in" color="gray" variant="ghost" />

      <UButton label="Get started" color="black" />
    </template>
  </UHeader>
</template>