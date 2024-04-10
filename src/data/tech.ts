import Vue from '@/assets/images/competencies/vue.svg'
import Vite from '@/assets/images/competencies/vite.svg'
import TypeScript from '@/assets/images/competencies/typescript.svg'
import Tailwind from '@/assets/images/competencies/tailwindcss.svg'
import Pinia from '@/assets/images/competencies/Pinialogo.svg'
import Cypress from '@/assets/images/competencies/cypress-logo-light.png'

export interface Tech {
  slug: string
  name: string
  description?: string
  image?: string
  colors?: string[]
}

export const techs: Tech[] = [
  {
    slug: 'vue',
    name: 'Vue.js',
    description:
      "The Progressive JavaScript Framework, I've started using Vue in version 2, did the transition with composables and now using v3.",
    image: Vue,
    colors: ['#41B883', '#35495E']
  },
  {
    slug: 'vite',
    name: 'Vite',
    description:
      'Vite is a local server for Vue and React templates. It supports TypeScript, JSX, bundling, Hot Module Replacement, server-side rendering, and can proxy requests to a back-end server.',
    image: Vite,
    colors: ['#41D1FF', '#BD34FE', '#FFC61E']
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    image: TypeScript,
    colors: ['#007ACC', '#3178C6']
  },
  {
    slug: 'tailwindcss',
    name: 'Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
    image: Tailwind,
    colors: ['#0ed7b5', '#2298bd']
  },
  {
    slug: 'pinia',
    name: 'Pinia',
    description: 'Pinia is a Vue Store that is designed to be easy to use and understand.',
    image: Pinia,
    colors: ['#52ce63', '#FFDB5C']
  },
  {
    slug: 'cypress',
    name: 'Cypress',
    image: Cypress,
    description:
      'Cypress is a front-end testing tool that makes it easy to write automated tests for web applications.',
    colors: ['#69d3a7', '#1b1e2e']
  }
]
