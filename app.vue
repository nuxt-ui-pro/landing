<script setup lang="ts">
const links = [{
  label: 'Features',
  to: '#features',
  exactHash: true
}, {
  label: 'Testimonials',
  to: '#testimonials',
  exactHash: true
}, {
  label: 'Pricing',
  to: '#pricing',
  exactHash: true
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6 text-primary" />
    </template>

    <template #right>
      <UButton label="Sign in" color="white" variant="ghost" />

      <UButton label="Get started" color="black" />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }} ZenTech - Cloud Solutions
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

      <UButton to="https://github.com/nuxt-ui-pro/starter" target="_blank" icon="i-simple-icons-github" aria-label="GitHub" color="gray" variant="ghost" size="sm" />
    </template>
  </UFooter>
</template>
