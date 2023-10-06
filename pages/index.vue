<template>
  <UMain>
    <ULandingHero title="Welcome to Nuxt UI Pro!" description="This is your starter, make something unique!">
      <template #links>
        <UButton to="/features" icon="i-heroicons-rocket-launch">Features</UButton>
        <UButton to="https://ui.nuxt.com/pro" target="_blank" color="gray" icon="i-heroicons-book-open" trailing-icon="i-heroicons-arrow-top-right-on-square-solid">UI Pro Documentation</UButton>
      </template>
    </ULandingHero>
    <ULandingSection>
      <template #title>
        Amazing <span class="text-primary">Features</span>
      </template>
      <template #description>
        Welcome to my amazing landing page made with Nuxt UI Pro, look at all these amazing fake features!
      </template>
      <UPageGrid>
        <ULandingCard icon="i-heroicons-banknotes" title="Feature #1" description="This is the number one feature you are dreaming of!" />
        <ULandingCard icon="i-heroicons-beaker" title="Feature #2" description="I am an important feature, please look at me." />
        <ULandingCard icon="i-heroicons-bolt" title="Feature #3" description="This is the third feature you are looking at, it looks nice right?" />
      </UPageGrid>
    </ULandingSection>
  </UMain>
</template>