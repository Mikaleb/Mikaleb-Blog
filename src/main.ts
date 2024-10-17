import './assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'

//@ts-ignore
import KonamiCode from 'vue3-konami-code'

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

import App from './App.vue'
import router from './router'

import { createHead } from '@unhead/vue'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  //   legacy: false,
  globalInjection: true,
  messages: {
    en: en,
    fr: fr
  }
})

export type Item = {
  date: string
  title: string
  company: string
  contractType: string
  description: string
  link: string | null
  isFirst?: boolean
  skills?: string[]
  screenshots?: Screenshot[]
}

export type Screenshot = {
  src: string
  caption: string
  alt: string
}

const app = createApp(App)

const head = createHead()

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

app.use(createPinia()).use(router).use(i18n).use(head).use(MotionPlugin)

app.use(KonamiCode, {
  onKonamiCodeEntered: function () {
    alert('You know your stuff, gg')
  }
})

app.mount('#app')
