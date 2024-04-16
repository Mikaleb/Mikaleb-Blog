<template>
  <div>
    <button @click="toggleTheme()" class="btn" aria-label="toggleLight">
      <svg-icon type="mdi" :path="isDark ? mdiLightbulbOn10 : mdiLightbulb" size="24"></svg-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { mdiLightbulb, mdiLightbulbOn10 } from '@mdi/js'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<style scoped lang="scss">
button {
  @apply p-2 bg-gray-200 rounded-lg;
  @apply hover:bg-charcoal-900;
  @apply dark:bg-charcoal-200 dark:text-white;
  @apply dark:hover:bg-charcoal-500;
}
</style>
