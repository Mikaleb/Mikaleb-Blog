<script setup lang="ts">
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGithub, mdiLinkedin } from '@mdi/js'

import SkillsIndex from '@/components/Skills/Index.vue'
import PortfolioIndex from '@/components/Portfolio/Index.vue'

const size = 32

const goToGithub = () => {
  window.open('https://github.com/Mikaleb', '_blank')
}

const goToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/mikalebeau/', '_blank')
}
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 container gap-8 overflow-auto">
    <div>
      <div id="hi">
        <p class="font-bold">{{ $t('hi') }}</p>
      </div>
      <div class="md:w-3/4 w-full pt-3">
        <div id="who">
          <p class="font-semibold">{{ $t('who') }}</p>
        </div>
        <div id="tech">
          <p class="font-semibold">{{ $t('tech') }}</p>
        </div>
      </div>
    </div>
    <div class="w-full mt-6 md:mt-0">
      <span class="longer font-regular">{{ $t('longer.intro') }}</span>
      <span class="longer font-regular">{{ $t('longer.school') }}</span>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        <button @click="goToGithub" class="btn btn-primary" aria-label="github">
          <svg-icon type="mdi" :path="mdiGithub" :size="size" class="mr-2"></svg-icon>

          {{ $t('goToGithub') }}
        </button>
        <button @click="goToLinkedIn" class="btn btn-secondary" aria-label="linkedin">
          <svg-icon type="mdi" :path="mdiLinkedin" :size="size" class="mr-2"></svg-icon>
          {{ $t('goToLinkedin') }}
        </button>
      </div>
    </div>
  </section>

  <section class="container mt-12" id="skills">
    <skills-index></skills-index>
  </section>
  <section class="container mt-16" id="portfolio">
    <portfolio-index></portfolio-index>
  </section>
  <section class="container mt-16" id="contact">
    <div class="bg-charcoal-900 p-8 rounded-lg dark:bg-charcoal-400">
      <h2 class="text-2xl font-semibold mb-4">{{ $t('contact') }}</h2>
      <a
        class="text-lg mt-4 hover:text-aero transition-all hover:font-bold text-aero-100 hover:cursor-pointer underline"
        href="mailto:mikaleb@live.fr"
        >📧 mikaleb[at]live[dot]fr</a
      >
    </div>
  </section>
</template>

<style scoped lang="scss">
#hi {
  @apply text-3xl mt-4 md:mt-0;
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
</style>
