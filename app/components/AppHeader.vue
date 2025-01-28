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
    <template #title>
      <div class="flex items-center gap-2">
        <LogoPro class="w-auto h-6 shrink-0" />
        <UDropdownMenu
          v-slot="{ open }"
          :modal="false"
          :items="[{
            label: `Starter`,
            to: 'https://starter-template.nuxt.dev/'
          }, {
            label: `Landing`,
            to: 'https://landing-template.nuxt.dev/',
            active: true,
            checked: true,
            type: 'checkbox'
          }, {
            label: `Docs`,
            to: 'https://docs-template.nuxt.dev/'
          }, {
            label: `SaaS`,
            to: 'https://saas-template.nuxt.dev/'
          }, {
            label: `Dashboard`,
            to: 'https://dashboard-template.nuxt.dev/'
          }]"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
          size="xs"
        >
          <UButton
            label="Landing"
            variant="subtle"
            trailing-icon="i-lucide-chevron-down"
            size="xs"
            class="-mb-[6px] font-semibold rounded-full truncate"
            :class="[open && 'bg-[var(--ui-primary)]/15 ']"
            :ui="{
              trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
            }"
          />
        </UDropdownMenu>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

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
