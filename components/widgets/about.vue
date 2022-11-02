<template>
  <div class="widget">
    <p>hello, world and welcome on my blog Mikaleb.com !</p>
    <Socials></Socials>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'About',
  components: {
    Socials: () => import('~/components/design/socials.vue'),
  },
})
</script>
