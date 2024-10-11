<template>
  <div
    class="card--tech font-italic transition-all duration-500 ease-in-out"
    :id="'comp__' + tech.slug"
    ref="target"
    @click="handleClick()"
  >
    <div id="bg" :class="isOutside ? 'opacity-100' : 'opacity-0'"></div>
    <div
      id="bg-hovered"
      :style="gradientBackground"
      :class="isOutside ? 'opacity-0' : 'opacity-100'"
    ></div>
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

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { type Tech } from '@/data/tech'
import clickSound from '@/assets/sounds/SFX_PRESS_AB.wav'

import { useMouseInElement } from '@vueuse/core'
import { useSound } from '@vueuse/sound'

const { play, stop } = useSound(clickSound)
const isActive = ref(true)

const handleClick = () => {
  isActive.value = !isActive.value
  isActive.value ? play() : stop()
}

const props = defineProps<{
  tech: Tech
}>()
const target = ref(null)

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

.fade-enter-active,
.fade-leave-active {
  transition: background 0.5s;
}
.fade-enter,
.fade-leave-to {
  background: transparent;
}
</style>
