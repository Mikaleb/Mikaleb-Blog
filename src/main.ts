import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

import App from './App.vue'
import router from './router'

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

const app = createApp(App)

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

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
