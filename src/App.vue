<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from '@/components/TheMenu.vue'
</script>

<template>
  <header class="dark:bg-slate-800 dark:text-yellow-50">
    <img
      alt="logo"
      class="logo dark:block hidden"
      src="@/assets/logo_light.svg"
      width="125"
      height="125"
    />
    <img alt="logo" class="logo dark:hidden" src="@/assets/logo.svg" width="125" height="125" />
    <TheMenu />
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  @apply md:flex items-center p-4 sm:block;
}

.logo {
  margin: 0 auto 2rem;
  &:hover {
    @apply transition-all transform scale-110 text-blue-800;

    fill: blue;
  }
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
