<script lang="ts" setup>
import { techs, type Tech } from '@/data/tech'

const updateBackgroundCard = (_e: any, tech: Tech) => {
  const card = document.getElementById(`comp__${tech.slug}`)

  if (card) {
    card.style.background = `linear-gradient(to top right, ${tech.colors?.join(', ')})`
    card.style.transition = 'background-color 2s ease-out'
  }
}

const resetBackgroundCard = (_e: any, tech: Tech) => {
  const card = document.getElementById(`comp__${tech.slug}`)
  // const app = document.getElementById('app')

  if (card) {
    card.style.background = 'linear-gradient(to top right, var(--tw-gradient-stops))'
    card.style.transition = 'background-color 2s ease-out'
  }
}
</script>

<template>
  <h2 class="font-bold">{{ $t('skills') }}</h2>

  <div id="competencies--container">
    <template v-for="tech in techs" :key="tech.slug">
      <div
        class="card--tech font-italic"
        :id="'comp__' + tech.slug"
        @mouseover="(e) => updateBackgroundCard(e, tech)"
        @mouseleave="(e) => resetBackgroundCard(e, tech)"
        @touchstart="(e) => updateBackgroundCard(e, tech)"
        @touchend="(e) => resetBackgroundCard(e, tech)"
        @touchcancel="(e) => resetBackgroundCard(e, tech)"
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
</template>

<style lang="scss" scoped>
#competencies--container {
  @apply grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4;
}

.card--tech {
  @apply sm:basis-full  md:basis-1/2 lg:basis-1/3;

  @apply bg-gradient-to-tr from-charcoal to-aero-300;
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
    @apply mix-blend-normal;

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
