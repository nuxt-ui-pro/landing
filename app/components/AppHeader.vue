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
  <UHeader mode="drawer">
    <template #title>
      <div class="flex items-end gap-2">
        <LogoPro class="w-auto h-6 shrink-0" />
        <UBadge
          label="Landing"
          variant="subtle"
        />
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Sign in"
        color="neutral"
        variant="ghost"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:flex"
      />
    </template>

    <template #content>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        block
        class="mb-3"
      />
    </template>
  </UHeader>
</template>
