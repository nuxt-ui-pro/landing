<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
const { isLoading } = useLoadingIndicator()
const appear = ref(false)
const appeared = ref(false)

useSeoMeta({
  ogImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

onMounted(() => {
  setTimeout(() => {
    appear.value = true
    setTimeout(() => {
      appeared.value = true
    }, 1000)
  }, 0)
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />

    <UMain class="relative">
      <HeroBackground
        class="absolute w-full -top-px transition-all text-(--ui-primary) shrink-0"
        :class="[
          isLoading ? 'animate-pulse' : (appear ? '' : 'opacity-0'),
          appeared ? 'duration-[400ms]': 'duration-1000'
        ]"
      />
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
