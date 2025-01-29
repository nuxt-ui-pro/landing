<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  active: route.hash === '#features'
}, {
  label: 'Templates',
  to: '#templates',
  active: route.hash === '#templates'
}, {
  label: 'Pricing',
  to: '#pricing',
  active: route.hash === '#pricing'
}, {
  label: 'Testimonials',
  to: '#testimonials',
  active: route.hash === '#testimonials'
}, {
  label: 'FAQ',
  to: '#faq',
  active: route.hash === '#faq'
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt-ui-pro/landing/tree/v3"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>

    <template #content>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
