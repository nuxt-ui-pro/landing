<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: route.hash === '#features'
}, {
  label: 'Pricing',
  to: '#pricing',
  icon: 'i-heroicons-credit-card',
  active: route.hash === '#pricing'
}, {
  label: 'Testimonials',
  to: '#testimonials',
  icon: 'i-heroicons-academic-cap',
  active: route.hash === '#testimonials'
}, {
  label: 'FAQ',
  to: '#faq',
  icon: 'i-heroicons-question-mark-circle',
  active: route.hash === '#faq'
}])
</script>

<template>
  <UHeader>
    <template #title>
      Nuxt UI Pro
      <UBadge
        label="Landing"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Sign in"
        color="neutral"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>

    <!--    <template #panel>
      <UAsideLinks :links="links" />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        block
        class="mb-3"
      />
      <UButton
        label="Get started"
        block
      />
    </template> -->
  </UHeader>
</template>
