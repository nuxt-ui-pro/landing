<script setup lang="ts">
const logos = [
  'i-simple-icons-nuxtdotjs',
  'i-simple-icons-vuedotjs',
  'i-simple-icons-visualstudiocode',
  'i-simple-icons-stackblitz',
  'i-simple-icons-microsoft',
  'i-simple-icons-github',
  'i-simple-icons-tailwindcss',
  'i-simple-icons-vite',
  'i-simple-icons-tsnode',
  'i-simple-icons-css3',
  'i-simple-icons-windicss',
  'i-simple-icons-html5'
]

const featuresFree = [
  'Access all components',
  'Community Starters',
  'Unlimited updates',
  'Upgrade when ready to deploy'
]
const featuresSolo = [
  'One developer',
  'Unlimited projects',
  'Advanced Starters',
  'Access to the GitHub repository',
  'Unlimited minor & patch updates',
  'Lifetime access'
]
const featuresTeam = [
  'Up to 20 developers',
  'Unlimited projects',
  'Everything in Pro',
  'Prioritized feature requests',
  'Unlimited minor & patch updates',
  'Lifetime access'
]

const faqItems = [
  {
    label: 'What colors does your product come in?',
    content: 'Our product is available in a dazzling array of colors, including invisible, camouflage, and unicorn sparkle.'
  },
  {
    label: 'How long does shipping take?',
    content: 'Shipping time varies, but expect it to arrive just in time for your next solar eclipse viewing party.'
  },
  {
    label: 'Can I use it underwater?',
    content: 'Absolutely! Our product is not only waterproof but also capable of throwing an underwater dance party for dolphins.'
  },
  {
    label: 'Is it compatible with time travel?',
    content: 'Yes, it is! Our product works seamlessly in all time periods, past, present, and future.'
  },
  {
    label: "What's the return policy?",
    content: "We have a `30-second satisfaction guarantee`. If you're not happy within the first 30 seconds, well, it's too late."
  },
  {
    label: 'How do I upgrade to the deluxe version ?',
    content: "Simply chant the magic words `Upgradeus Maximus` three times while doing a cartwheel, and you'll be upgraded automatically!"
  }
]
</script>

<template>
  <UMain>
    <ULandingHero description="This is your starter, make something unique!">
      <template #title>
        Welcome to Nuxt UI Pro <br>Landing template!
      </template>
      <template #links>
        <UButton to="#features" icon="i-heroicons-rocket-launch" size="xl">
          Features
        </UButton>
        <UButton
          to="https://ui.nuxt.com/pro"
          target="_blank"
          color="gray"
          size="xl"
          icon="i-heroicons-book-open"
          trailing-icon="i-heroicons-arrow-top-right-on-square-solid"
        >
          UI Pro Documentation
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection id="features">
      <template #title>
        Amazing <span class="text-primary">Features</span>
      </template>
      <template #description>
        Welcome to my amazing landing page made with Nuxt UI Pro, look at all these amazing fake features!
      </template>
      <UPageGrid>
        <ULandingCard
          icon="i-heroicons-chart-bar"
          title="Analyze"
          description="Learn more about what worked, what didn't, and why."
          color="pink"
        />
        <ULandingCard
          icon="i-heroicons-bolt"
          title="Empower & decide"
          description=" Seize control and make impactful decisions with confidence."
          color="teal"
        />
        <ULandingCard
          icon="i-heroicons-sparkles"
          title="Understand"
          description="Gain clarity and make informed decisions effortlessly."
        />
        <ULandingCard
          icon="i-heroicons-presentation-chart-line"
          title="Mastering Productivity Overnight"
          description="Discover a shortcut to productivity that's too good to be true."
          color="blue"
        />
        <ULandingCard
          icon="i-heroicons-cog"
          title="Creativity and innovation"
          description="Explore the dynamic duo of Creativity and Innovation as they reshape the future of industries"
          color="violet"
        />
        <ULandingCard
          icon="i-heroicons-globe-europe-africa"
          title="Flexible"
          description="Discover the power of flexibility and adaptability in an ever-changing world."
          color="yellow"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection align="left" :ui="{ title: 'text-center lg:text-left', description: 'text-center lg:text-left' }">
      <template #title>
        Expressing <span class="text-primary">Gratitude</span>
      </template>
      <template #description>
        Thank you for building strong and sincere bonds with us.
      </template>
      <ULandingLogos title="We thank them for their Trust" :ui="{ images: 'grid grid-cols-3 sm:grid-cols-4 gap-8' }">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          class="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-6 flex items-center justify-center"
        >
          <UIcon :name="logo" class="w-12 h-12" />
        </div>
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection>
      <template #title>
        Pricing plans for teams of <br><span class="text-primary">all sizes</span>
      </template>
      <template #description>
        Pricing plans designed to accommodate teams of any size,ensuring flexibility and scalability for your
        business needs.
      </template>
      <UPricingGrid class="p-4" :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-3' }">
        <UPricingCard
          title="Free"
          description="Get started for free in development."
          :features="featuresFree"
          :button="{ label: 'Get Started for Free', color: 'white' }"
        />
        <UPricingCard
          title="Solo"
          description="For bootstrappers and indie hackers."
          :features="featuresSolo"
          scale
          highlight
          price="$199"
          :button="{ label: 'Buy now', to: 'https://ui.nuxt.com/pro/purchase/solo' }"
          :badge="{ label: 'Most popular' }"
          cycle="/year"
        />
        <UPricingCard
          price="$699"
          title="Team"
          description="Unlimited license for growing teams."
          :features="featuresTeam"
          cycle="/year"
          :button="{ label: 'Buy now', to: 'https://ui.nuxt.com/pro/purchase/team' }"
        />
      </UPricingGrid>
    </ULandingSection>

    <ULandingSection title="Frequently asked questions">
      <ULandingFAQ :items="faqItems" />
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA
        card
        :links="[{ label: 'I want try', color: 'black', size: 'md' }, { label: 'Learn more', color: 'black', variant: 'link', size: 'md', trailingIcon: 'i-heroicons-arrow-right-20-solid' }]"
        :ui="{
          background: 'dark:bg-gradient-to-b from-gray-800 to-gray-900',
          links: 'flex-col gap-y-4 sm:flex-row'
        }"
        class="w-full h-full rounded-md"
      >
        <template #title>
          Revolutionize your life with our <br> new Product!
        </template>
        <template #description>
          Experience a transformation like never before with our groundbreaking product. Elevate your daily routine and
          embrace a new era of possibilities, making every moment extraordinary.
        </template>
      </ULandingCTA>
    </ULandingSection>
  </UMain>
</template>
