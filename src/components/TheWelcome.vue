<script setup lang="ts">
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGithub, mdiLinkedin } from '@mdi/js'

import { techs } from '@/data/tech'
import type { Tech } from '@/data/tech'

const size = 32

const goToGithub = () => {
  window.open('https://github.com/Mikaleb', '_blank')
}

const goToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/mikalebeau/', '_blank')
}

const updateBackgroundCard = (e, tech: Tech) => {
  const card = document.getElementById(`comp__${tech.slug}`)
  const app = document.getElementById('app')

  if (card) {
    card.style.background = `linear-gradient(to top right, ${tech.colors?.join(', ')})`
    card.style.transition = 'background-color 2s ease-out'
  }

  // if (app) {
  //   const colorsOpacity = tech.colors?.map((color) => `${color}20`)
  //   app.style.background = `linear-gradient(to top right, ${colorsOpacity?.join(', ')})`
  // }
}
const resetBackgroundCard = (e, tech: Tech) => {
  const card = document.getElementById(`comp__${tech.slug}`)
  // const app = document.getElementById('app')

  if (card) {
    card.style.background = 'linear-gradient(to top right, var(--tw-gradient-stops))'
    card.style.transition = 'background-color 2s ease-out'
  }

  // if (app) {
  //   app.style.background = ''
  // }
}
</script>

<template>
  <div class="flex container gap-8">
    <div class="w-1/2">
      <div id="hi" class="font-bold">
        <p>{{ $t('hi') }}</p>
      </div>
      <div class="w-1/2">
        <div id="who" class="font-semibold">
          <p>{{ $t('who') }}</p>
        </div>
        <div id="tech" class="font-semibold">
          <p>{{ $t('tech') }}</p>
        </div>
      </div>
    </div>
    <div class="w-1/2">
      <span class="longer font-regular">{{ $t('longer.intro') }}</span>
      <span class="longer font-regular">{{ $t('longer.school') }}</span>

      <div class="mt-6 flex">
        <button @click="goToGithub" class="btn btn-primary">
          <svg-icon type="mdi" :path="mdiGithub" :size="size" class="mr-2"></svg-icon>

          {{ $t('goToGithub') }}
        </button>
        <button @click="goToLinkedIn" class="btn btn-secondary ml-4">
          <svg-icon type="mdi" :path="mdiLinkedin" :size="size" class="mr-2"></svg-icon>
          {{ $t('goToLinkedin') }}
        </button>
      </div>
    </div>
  </div>

  <div class="container mt-8 text-stone-900 dark:text-yellow-50">
    <h2 class="font-bold">{{ $t('skills') }}</h2>

    <div id="competencies--container">
      <template v-for="tech in techs" :key="tech.slug">
        <div
          class="card--tech font-italic"
          :id="'comp__' + tech.slug"
          @mouseover="(e) => updateBackgroundCard(e, tech)"
          @mouseleave="(e) => resetBackgroundCard(e, tech)"
        >
          <div class="relative">
            <div class="flex align-middle">
              <img class="card--tech--image" :src="tech.image || 'default.svg'" :alt="tech.name" />
              <div class="centered">
                <h1>{{ tech.name }}</h1>
              </div>
            </div>
            <div class="card--tech--description font-variable">
              {{ tech.description || '' }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
#hi {
  @apply text-3xl;
}

#who {
  @apply text-2xl mt-4 font-semibold;
}

.longer {
  @apply text-lg pr-2;
}

#tech {
  @apply flex text-stone-900 dark:text-yellow-50 flex-wrap text-xl mt-4;
}

#competencies--container {
  @apply flex flex-wrap gap-4 mt-4;
}

.card--tech {
  flex: 0 0 24%;
  max-width: 24%;
  @apply bg-gradient-to-tr from-charcoal to-aero-200;
  @apply dark:bg-yellow-50;
  @apply text-white;
  @apply p-4 rounded-2xl;

  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;

  &--description {
    @apply text-white text-base leading-normal mt-4;
  }

  &:hover {
    @apply mix-blend-normal cursor-pointer;

    .card--tech--image {
      @apply mix-blend-normal;
    }
  }

  h1 {
    @apply text-white text-xl font-semibold content-end mt-4;
  }

  &--image {
    @apply max-h-12 relative mix-blend-luminosity flex-col justify-start items-start inline-flex transition pr-4;
  }
}
</style>
