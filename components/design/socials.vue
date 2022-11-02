<template>
  <div>
    <template v-for="(social, idx) in socials">
      <a
        :key="idx"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="social.icon" :alt="social.name" />
      </a>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Socials',
  data() {
    return {
      socials: [
        {
          name: 'Github',
          url: 'https://github.com/Mikaleb',
          icon: 'github',
        },
      ],
    }
  },
})
</script>
