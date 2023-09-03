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
  <div class="p-4 dark:bg-slate-800 dark:text-white">
    <!-- Contact information, including relevant social media accounts -->

    <span id="hi">{{ $t('hi') }}</span>
    <span id="who">{{ $t('who') }}</span>
    <span id="tech">{{ $t('tech') }}</span>
    <div id="tech">
      <template v-for="tech in techs" :key="tech.slug">
        <span>{{ tech.name }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
#tech {
  span {
    @apply text-2xl pl-2;
  }
}
</style>
