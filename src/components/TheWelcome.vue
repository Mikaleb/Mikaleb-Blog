<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'

interface Tech {
  slug: string
  name: string
}

const techs: Tech[] = [
  {
    slug: 'vue',
    name: 'Vue.js'
  },
  {
    slug: 'vite',
    name: 'Vite'
  },
  {
    slug: 'typescript',
    name: 'TypeScript'
  },
  {
    slug: 'tailwindcss',
    name: 'Tailwind CSS'
  },
  {
    slug: 'pinia',
    name: 'Pinia'
  },
  {
    slug: 'cypress',
    name: 'Cypress'
  }
]
</script>

<template>
  <div class="p-4 dark:bg-slate-800 text-stone-900 dark:text-yellow-50">
    <!-- Contact information, including relevant social media accounts -->
    <div class="intro">
      <span id="hi">{{ $t('hi') }}</span>
      <span id="who">{{ $t('who') }}</span>
      <span id="tech">{{ $t('tech') }}</span>
    </div>
    <div id="tech">
      <template v-for="tech in techs" :key="tech.slug">
        <span>{{ tech.name }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro {
  @apply flex flex-col mb-4;
  span {
    @apply text-2xl;
  }
}
#tech {
  @apply flex text-stone-900 dark:text-yellow-50;
  flex-wrap: wrap;
  span {
    @apply text-xl pl-2 mt-2;
    flex: 1 0 21%; /* explanation below */
  }
}
</style>
