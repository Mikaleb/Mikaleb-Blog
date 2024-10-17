<template>
  <nav>
    <div class="nav--main">
      <img alt="logo" class="logo dark:block hidden" src="@/assets/images/logo_light.svg" />
      <img alt="logo" class="logo dark:hidden" src="@/assets/images/logo.svg" />
      <div id="links">
        <a
          class="router-link hover:cursor-pointer"
          @click="scrollToSection('home')"
          :class="{ active: activeSection === 'home' }"
          >{{ $t('home') }}</a
        >
        <a
          @click="scrollToSection('skills')"
          class="router-link hover:cursor-pointer"
          :class="{ active: activeSection === 'skills' }"
          >{{ $t('skills') }}</a
        >
        <a
          @click="scrollToSection('portfolio')"
          class="router-link hover:cursor-pointer"
          :class="{ active: activeSection === 'portfolio' }"
          >{{ $t('portfolio') }}</a
        >
        <a
          @click="scrollToSection('contact')"
          class="router-link hover:cursor-pointer"
          :class="{ active: activeSection === 'contact' }"
          >{{ $t('contact') }}</a
        >
      </div>
    </div>
    <div class="nav--second socials centered">
      <ul>
        <li>
          <a href="https://twitter.com/MikalebCom" aria-label="Go to twitter">
            <svg-icon type="mdi" :path="mdiTwitter" :size="size"></svg-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/Mikaleb" aria-label="Go to github">
            <svg-icon type="mdi" :path="mdiGithub" :size="size"></svg-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mikalebeau/" aria-label="Go to linkedin">
            <svg-icon type="mdi" :path="mdiLinkedin" :size="size"></svg-icon>
          </a>
        </li>
        <li>
          <a
            @click="scrollToSection('contact')"
            class="hover:cursor-pointer"
            aria-label="Go to contact part"
          >
            <svg-icon type="mdi" :path="mdiEmail" :size="size"></svg-icon>
          </a>
        </li>
      </ul>
      <div class="ml-4 switch md:ml-6 flex space-x-3">
        <Light-Switch />
        <Sound-Switch />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import LightSwitch from '@/components/LightSwitch.vue'
import SoundSwitch from '@/components/SoundSwitch.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'
import { ref } from 'vue'

const breakpoints = useBreakpoints(breakpointsTailwind)

// Can be 'mobile' or 'tablet' or 'laptop' or 'desktop'
const laptop = breakpoints.between('md', '2xl')
const activeSection = ref('home')

const size = ref(laptop.value ? 32 : 24)

// find by ID

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (!section) return
  section.scrollIntoView({ behavior: 'smooth' })
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
)

const sections = ['home', 'skills', 'portfolio', 'contact']

const observeSections = () => {
  sections.forEach((section) => {
    const element = document.getElementById(section)
    if (element) {
      observer.observe(element)
    }
  })
}

// on scroll, trigger the observer
window.addEventListener('scroll', () => {
  observeSections()
})
</script>

<style scoped lang="scss">
nav {
  @apply transform lg:rounded-full border flex justify-center space-x-4 p-4 sm:p-4 md:p-6 lg:p-4;
  @apply md:border-charcoal/[0.5] dark:border-white/[0.5];
  @apply bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-50;
  @apply fixed left-2/4 -translate-x-2/4 -translate-y-2/4 lg:relative -bottom-4;
  @apply flex-col md:flex-row;
  @apply overflow-auto;
  // make sure if it overflow that it stack vertically
  @apply md:flex-wrap;

  img {
    @apply sm:w-12 sm:h-12 min-w-20;
  }

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.nav {
  &--main {
    @apply flex flex-row items-center justify-between;
  }
  &--second {
    @apply flex flex-row items-center justify-between mt-2 md:mt-0;
  }
}

#links {
  @apply md:ml-8;
  @apply md:flex hidden;

  a {
    @apply font-semibold text-lg  inline-block text-charcoal dark:text-white px-2;
    @apply transition-all duration-300 ease-in-out;

    &.active {
      @apply text-aero dark:text-aero;
    }

    &:first-of-type {
      border: 0;
    }
    &:hover {
      @apply text-aero;
    }
  }
}

.logo {
  @apply transition-all max-w-20 sm:max-w-16;
  &:hover {
    @apply transition-all transform scale-110;
  }
}

.socials {
  @apply flex flex-row text-aero-100 dark:text-white md:pl-6;

  & ul {
    @apply flex items-center;

    & li {
      @apply mr-2;
      &:hover a {
        @apply text-aero  transition-all;
      }
    }
  }
}
</style>
