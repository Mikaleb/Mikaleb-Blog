<script setup lang="ts">
import { computed, reactive } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import { useHead } from '@unhead/vue'

const siteData = reactive({
  title: `Mikaleb`,
  description: `The portfolio of Mikaleb - Web Developer`
})

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description)
    }
  ]
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
