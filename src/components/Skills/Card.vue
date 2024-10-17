<template>
  <div
    class="card--tech font-italic transition-all duration-500 ease-in-out"
    :id="'comp__' + tech.slug"
    ref="target"
    v-motion
    :initial="{ opacity: 0, y: 100, scale: 1 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :delay="200"
    :duration="600"
  >
    <div id="bg" :class="isOutside ? 'opacity-100' : 'opacity-0'"></div>
    <div
      id="bg-hovered"
      :style="gradientBackground"
      :class="isOutside ? 'opacity-0' : 'opacity-100'"
    ></div>
    <div class="relative">
      <div class="flex align-middle">
        <img
          class="card--tech--image"
          :src="tech.image || 'default.svg'"
          :alt="tech.name"
          @click="handleClick()"
        />
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

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { type Tech } from '@/data/tech'
import clickSound from '@/assets/sounds/blop.mp3'

import { rand, useMouseInElement, useStorage } from '@vueuse/core'
// @ts-ignore
import { useSound } from '@vueuse/sound'
import { useElementTransform } from '@vueuse/motion'

const playBackRate = ref(1)
const flagSound = useStorage('flag-sound', true)

const { play, stop: stopSound } = useSound(clickSound, {
  playBackRate,
  interrupt: true
})
const isActive = ref(true)
const target = ref<HTMLElement>()

const { transform } = useElementTransform(target)

const handleClick = () => {
  if (isActive.value) {
    playBackRate.value = rand(0.5, 4)
    if (flagSound.value) play()
    playBackRate.value = 1
  } else {
    // reverse sound
    playBackRate.value = -playBackRate.value
    if (flagSound.value) play()
  }
  transform.scale = isActive.value ? 0.9 : 1
  transform.y = 0
  transform.rotate = isActive.value ? -5 : 0
  isActive.value = !isActive.value
}

const props = defineProps<{
  tech: Tech
}>()

const { isOutside } = useMouseInElement(target)

const gradientBackground = computed(() => {
  return {
    background: `linear-gradient(to top right, ${props.tech.colors?.join(', ')})`
  }
})
</script>

<style lang="scss" scoped>
#bg {
  @apply bg-gradient-to-tr from-aero-100 to-aero;
  @apply min-h-12 min-w-12 rounded-2xl;
  @apply absolute inset-0;
  @apply transition-all duration-500 ease-in-out;
}

#bg-hovered {
  @apply min-h-12 min-w-12 rounded-2xl;
  @apply absolute inset-0;
  @apply transition-all duration-500 ease-in-out;
  @apply cursor-pointer;
}

.card--tech {
  @apply sm:basis-full  md:basis-1/2 lg:basis-1/3;
  @apply transition-all duration-500 ease-in-out relative;

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
      @apply mix-blend-normal cursor-pointer;
    }
  }

  h1 {
    @apply text-white text-xl font-semibold content-end mt-4;
  }

  &--image {
    @apply max-h-12 relative mix-blend-luminosity flex-col justify-start items-start inline-flex transition pr-4 cursor-pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: background 0.5s;
}
.fade-enter,
.fade-leave-to {
  background: transparent;
}
</style>
