<script lang="ts" setup>
import TimelineItem from '@/components/Portfolio/Element.vue'

const images = import.meta.glob('@/assets/images/portfolio/medicalib/*.png')
console.debug('🚀 ~ images:', images)

import { type Item } from '@/types/portfolio'

const timelineItems: Item[] = [
  {
    date: 'December 2022 - July 2024',
    title: 'Front-end web developer VueJS',
    company: 'Medicalib',
    contractType: 'CDI',
    description:
      'Creating and implementing a Design System that unifies the different iterations and implementations of front-ends across multiple internal and external products.',
    link: null,
    isFirst: true,
    skills: [
      'Vue',
      'Tailwind',
      'Vuetify',
      'Capacitor',
      'Typescript',
      'Cypress',
      'Docker',
      'Git',
      'SASS',
      'AWS',
      'Terraform'
    ],
    screenshots: [images]
  },
  {
    date: 'January 2021 - December 2022',
    title: 'Front-end developer VueJS',
    company: 'Datananas',
    contractType: 'CDI',
    description: `
     <ul><li>Stabilization of the Vue product, migration to Nuxt</li>
<li> Customer Support</li>
<li> Creation of UI/UX reports</li>
<li> Implementation of Typescript, Tailwind
  `,
    link: null,
    skills: [
      'Javascript',
      'Typescript',
      'Vue',
      'Nuxt',
      'Cypress',
      'ES6',
      'Sass',
      'Tailwind',
      'Tiptap',
      'Node.js',
      'UI/UX',
      'DOM Manipulation'
    ]
  },
  {
    date: 'Nov. 2019 - March 2020',
    title: 'Front-end web developer VueJS',
    link: null,
    company: 'ABBD',
    contractType: 'CDI',
    description: `Creating a front-end dashboard of data utilizing Javascript, Typescript, Vue, Nuxt, Jest, Docker, Git, HTML5, CSS3 and SASS`,
    skills: [
      'Javascript',
      'Typescript',
      'Vue',
      'Nuxt',
      'Jest',
      'Docker',
      'Git',
      'HTML5',
      'CSS3',
      'SASS'
    ]
  },
  {
    date: 'Nov. 2019 - March 2020',
    title: 'Developer Full Stack',
    company: 'Ayctor',
    contractType: 'CDI',
    link: null,
    isFirst: false,
    description: `Laravel back-end developer, design and VueJS integrator`,
    skills: ['Javascript', 'Laravel', 'VueJS', 'API', 'Mailchimp', 'SCSS']
  },
  {
    date: 'sept. 2018 - nov. 2018',
    title: 'Developer web',
    company: 'KOBALTT',
    contractType: 'CDD',
    link: null,
    isFirst: false,
    description: `Laravel back-end developer, design and VueJS integrator`,
    skills: ['Laravel', 'Vue', 'Firestore', 'Docker']
  },
  {
    date: 'sept. 2017 - aug 2018',
    title: 'Developer Full Stack',
    company: 'Softia',
    contractType: 'Alternance',
    link: null,
    description: `Laravel back-end developer, design and VueJS integrator`,
    skills: [
      'PHP5',
      'Symfony 1.4',
      'JS',
      'CSS',
      'Bootstrap',
      'Moodle',
      'MySQL',
      'PostgreSQL',
      'Git',
      'Eclipse',
      'Linux',
      'Sprint (agile)',
      'JAVA',
      'Confluence',
      'SysAdmin'
    ]
  }
]
</script>

<template>
  <h2 class="font-bold">{{ $t('portfolio') }}</h2>

  <div
    class="p-5 bg-white dark:bg-charcoal-300 dark:rounded dark:mt-4 antialiased text-wrap container"
  >
    <ol class="relative border-s border-gray-200 dark:border-gray-700 text-wrap">
      <TimelineItem :key="item.title" v-for="item in timelineItems" :item="item" />
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.ms-4 {
  -webkit-margin-start: 1rem;
  margin-inline-start: 1rem;
}
</style>
