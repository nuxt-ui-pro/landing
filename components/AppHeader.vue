<script setup lang="ts">
import { useApi } from '~/composables/useApi'

const nuxtApp = useNuxtApp()
const { $axios } = useNuxtApp()
const { getData } = useApi()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Pricing',
  to: '#pricing',
  active: activeHeadings.value.includes('pricing')
}, {
  label: 'Testimonials',
  to: '#testimonials',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials')
  ])
})

// Định nghĩa interface cho dữ liệu trả về từ API Test
interface Post {
  userId?: number
  id?: number
  title?: string
  body?: string
}

const fetchData = async (): Promise<Post[]> => {
  try {
    const response = await $axios.get<Post[]>('/posts')
    console.log('Dữ liệu nhận được:', response.data)
    return response.data
  } catch (error) {
    console.error('Lỗi khi gọi API:', error)
    throw error
  }
}

const loadData = async () => {
  try {
    const data = await getData<Post[]>('/posts')
    console.log('Dữ liệu từ API (composable):', data)
  } catch (error) {
    console.error('Lỗi:', error)
  }
}

onMounted(() => {
  // fetchPosts()
  fetchData()
  loadData()
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        label="Download App"
        variant="subtle"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        label="Download App"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
