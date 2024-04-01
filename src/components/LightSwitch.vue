<template>
  <div>
    <button @click="toggleTheme()">
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { mdiMoonFull, mdiSun } from '@mdi/js'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<style scoped lang="scss">
button {
  @apply p-2 bg-gray-200 rounded-lg shadow-md;
  @apply hover:bg-gray-300;
  @apply dark:bg-gray-800 dark:text-gray-200;
  @apply dark:hover:bg-gray-700;
}
</style>
