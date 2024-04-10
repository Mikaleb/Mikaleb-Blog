<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenu from '@/components/TheMenu.vue'
</script>

<template>
  <header class="flex">
    <div class="menu container">
      <TheMenu />
    </div>
  </header>

  <div class="mt-16 p-8">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 10vh;
  @apply md:flex items-center p-8 sm:block;
}

.menu {
  @apply fixed inset-x-0 mx-auto z-50 top-16;
}

.logo {
  margin: 0 auto 2rem;
  &:hover {
    @apply transition-all transform scale-110;
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
