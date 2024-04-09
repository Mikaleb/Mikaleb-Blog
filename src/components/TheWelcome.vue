<script setup lang="ts">
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

const goToGithub = () => {
  window.open('https://github.com/Mikaleb', '_blank')
}

const goToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/mikalebeau/', '_blank')
}
</script>

<template>
  <div class="flex container">
    <div class="w-1/2">
      <div id="hi">
        <p>{{ $t('hi') }}</p>
      </div>
      <div id="who">
        <p>{{ $t('who') }}</p>
      </div>
      <div id="tech">
        <p>{{ $t('tech') }}</p>
      </div>
    </div>
    <div class="w-1/2">
      <span class="longer">{{ $t('longer.intro') }}</span>
      <span class="longer">{{ $t('longer.school') }}</span>

      <div class="mt-6">
        <button @click="goToGithub" class="btn btn-primary">
          {{ $t('goToGithub') }}
        </button>
        <button @click="goToLinkedIn" class="btn btn-secondary ml-4">
          {{ $t('goToLinkedin') }}
        </button>
      </div>
    </div>
  </div>

  <div class="container mt-8 text-stone-900 dark:text-yellow-50">
    <h2>{{ $t('skills') }}</h2>

    <div id="tech">
      <template v-for="tech in techs" :key="tech.slug">
        <span>{{ tech.name }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
#hi {
  @apply text-3xl font-bold;
}

#who {
  @apply text-2xl mt-4 font-semibold;
}

.longer {
  @apply text-lg pr-2;
}

#tech {
  @apply flex text-stone-900 dark:text-yellow-50 flex-wrap text-xl;
}
</style>
