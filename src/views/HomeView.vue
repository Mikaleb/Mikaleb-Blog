<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

const siteData = {
  title: `Mikaleb`,
  description: `Portfolio of Mikaleb : Front-end Web Developer VueJS`,
  keywords: `Mikaleb, Mikaleb Beau, Mikaleb Portfolio, Mikaleb VueJS, Mikaleb Front-end Web Developer, Mikaleb Web Developer, Mikaleb Web Development, Mikaleb VueJS Developer, Mikaleb VueJS Development, Mikaleb VueJS Web Developer, Mikaleb VueJS Web Development, Mikaleb VueJS Front, VueJS, Typescript, Javascript, HTML, CSS, SCSS, SASS, TailwindCSS, Bootstrap, Vuetify, Buefy, Quasar, NuxtJS, Gridsome, VuePress, VueRouter, Vuex, VueX, VueX Store, VueX Store Management, VueX Store Management System, VueX Store Management System Development, VueX Store Management System Development VueJS, VueX Store Management System Development VueJS Front-end, VueX Store Management System Development VueJS Front-end Web, VueX Store Management System Development VueJS Front-end Web Developer, VueX Store Management System Development VueJS Front-end Web Development, VueX Store Management System Development VueJS Front-end Web Developer Mikaleb, VueX Store`
}

useHead({
  // Can be static or computed
  title: siteData.title,
  meta: [
    {
      name: `description`,
      content: siteData.description
    },
    {
      name: `keywords`,
      content: siteData.keywords
    },
    {
      name: `author`,
      content: `Mikaleb`
    }
  ]
})

useSeoMeta({
  title: siteData.title,
  description: siteData.description,
  ogDescription: siteData.description,
  ogTitle: siteData.title,
  ogImage: 'https://mikaleb.com/website.png',
  twitterCard: 'summary_large_image',
  author: 'Mikaleb',
  keywords: siteData.keywords,
  ogUrl: 'https://mikaleb.com',
  ogSiteName: 'Mikaleb',
  ogType: 'website',
  ogLocale: 'en_US',
  ogImageAlt: 'Mikaleb'
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
