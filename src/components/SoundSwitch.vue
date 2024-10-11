<template>
  <div>
    <button type="checkbox" @click="handleClick()" class="btn">
      <svg-icon type="mdi" :path="isActive ? mdiVolumeHigh : mdiVolumeOff" size="24"></svg-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { mdiVolumeHigh, mdiVolumeOff } from '@mdi/js'
import { useSound } from '@vueuse/sound'
import clickSound from '@/assets/sounds/flashlight_ click.mp3'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { ref } from 'vue'

const { play, stop } = useSound(clickSound)
const isActive = ref(true)
const handleClick = () => {
  isActive.value = !isActive.value
  isActive.value ? play() : stop()
}
</script>

<style scoped lang="scss">
button {
  @apply p-2 bg-gray-200 rounded-lg;
  @apply hover:bg-charcoal-900;
  @apply dark:bg-charcoal-200 dark:text-white;
  @apply dark:hover:bg-charcoal-500;
}
</style>
