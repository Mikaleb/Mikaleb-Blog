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
</script>

<template>
  <div class="flex">
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
    </div>
  </div>

  <div class="text-stone-900 dark:text-yellow-50">
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
  @apply text-3xl;
  font-family: 'GeneralSans-Bold', cursive;
}

.longer {
  @apply text-lg pr-2;
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
