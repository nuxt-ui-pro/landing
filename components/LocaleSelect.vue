
<script setup lang="ts">
const localePath = useLocalePath()

// console.log(locale.value)
// console.log(availableLocales)
// console.log(t('icon'))
// console.log(messages.value)
// console.log(messages.value[locale.value].icon)

// const selected = ref('en')

const availableLocales = ['en', 'fr', 'nl', 'de']

const EMOJIS = {
  en: '🇬🇧',
  fr: '🇫🇷',
  nl: '🇳🇱',
  // es: '🇪🇸',
  de: '🇩🇪',
  // it: '🇮🇹',
  // pt: '🇵🇹',
  // ru: '🇷🇺',
  // ja: '🇯🇵',
  // zh: '🇨🇳',
  // ko: '🇰🇷',
}

// const selectOptions = computed(() => availableLocales.map((locale) => ({
//   label: EMOJIS[locale],
//   value: locale,
//   // selected: selected.value === locale
// })))

// const selectOptionsByLocale = computed(() => selectOptions.value.reduce((acc, option) => ({
//   [option.value]: option,
//   ...acc
// }), {}))

// const selectedOption = computed(() => selectOptionsByLocale.value[selected.value])

// console.log(selectOptionsByLocale.value)
// console.log(selectedOption.value)

// const items = availableLocales.map((locale) => ({
//   label: EMOJIS[locale],
//   // value: locale,
//   // click: (value: string) => {
//   //   console.log(value)
//   //   console.log(locale)
//   //   console.log('Edit')
//   // },
//   // replace: false,
//   // to: localePath('index', locale),
//   // icon: 'i-heroicons-pencil-square-20-solid',
//   // shortcuts: ['E'],
//   // avatar: {
//   //   src: 'https://avatars.githubusercontent.com/u/739984?v=4'
//   }
// ))

console.log(localePath('index', 'en'))

const items = [
  { label: '🇬🇧', to: localePath('index', 'en') },
  { label: '🇫🇷', to: localePath('index', 'fr') },
  { label: '🇳🇱', to: localePath('index', 'nl') },
  { label: '🇩🇪', to: localePath('index', 'de') },
]

// function getIcon(locale: string) {
//   console.log(locale)
//   console.log(messages.value[locale].icon)
//   return messages.value[locale].icon
// }

console.log(items)

</script>

<template>
  <UDropdown :items="items" :popper="{ arrow: true }">
    <!-- <UButton label="Sign in" color="white" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" /> -->
    <UButton color="primary" variant="outline" :label="$t('icon')" trailing-icon="i-heroicons-chevron-down-20-solid" class="hidden lg:flex" />
    <!-- <template #item="{ item }">
      {{ item.label }}
      {{ item }}
      {{ getIcon(item.label) }}
      <UButton variant="link" :to="localePath('index', item.label)" target="_blank" />
    </template> -->
  </UDropdown>
</template>