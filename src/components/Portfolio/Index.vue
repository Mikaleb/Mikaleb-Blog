<script lang="ts" setup>
import TimelineItem from '@/components/Portfolio/Element.vue'

import { type Item } from '@/types/portfolio'

const timelineItems: Item[] = [
  {
    date: 'December 2022 - July 2024',
    title: 'Front-end web developer VueJS',
    company: 'Medicalib',
    contractType: 'CDI',
    description:
      'Creating and implementing a Design System that unifies the different iterations and implementations of front-ends across multiple internal and external products.',
    link: 'https://www.medicalib.fr/',
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
    screenshots: [
      {
        src: '1.png',
        alt: 'Medicalib',
        caption: 'Medicalib care selection'
      },
      {
        src: '3.png',
        alt: 'Medicalib',
        caption: 'Admin CPTS'
      },
      {
        src: '4.png',
        alt: 'Medicalib',
        caption: 'Admin activities'
      },
      {
        src: '5.png',
        alt: 'Medicalib',
        caption: 'Admin activities'
      }
    ]
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
    link: 'https://www.datananas.com/',
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
    ],
    screenshots: [
      {
        src: '1.png',
        alt: 'Datananas',
        caption: 'Datananas'
      },
      {
        src: '2.png',
        alt: 'Datananas',
        caption: 'Datananas'
      },
      {
        src: '3.png',
        alt: 'Datananas',
        caption: 'Datananas'
      },
      {
        src: '8.png',
        alt: 'Datananas',
        caption: 'Datananas'
      }
    ]
  },
  {
    date: 'Nov. 2019 - March 2020',
    title: 'Front-end web developer VueJS',
    link: 'https://www.runview.fr/',
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
    link: 'https://ayctor.com/',
    isFirst: false,
    description: `Laravel back-end developer, design and VueJS integrator`,
    skills: ['Javascript', 'Laravel', 'VueJS', 'API', 'Mailchimp', 'SCSS'],
    screenshots: [
      {
        src: '1.png',
        alt: 'Ayctor',
        caption: 'Ayctor'
      }
    ]
  },
  {
    date: 'sept. 2018 - nov. 2018',
    title: 'Developer web',
    company: 'Kobaltt',
    contractType: 'CDD',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7158516192297512961/',
    isFirst: false,
    description: `Laravel back-end developer, design and VueJS integrator`,
    skills: ['Laravel', 'Vue', 'Firestore', 'Docker']
  },
  {
    date: 'sept. 2017 - aug 2018',
    title: 'Developer Full Stack',
    company: 'Softia',
    contractType: 'Alternance',
    link: 'https://www.softia.fr/fr',
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
