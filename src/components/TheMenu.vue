<template>
  <nav>
    <div class="nav--main">
      <img alt="logo" class="logo dark:block hidden" src="@/assets/images/logo_light.svg" />
      <img alt="logo" class="logo dark:hidden" src="@/assets/images/logo.svg" />
      <div id="links">
        <RouterLink to="/">{{ $t('home') }}</RouterLink>
        <a @click="scrollToSkills" class="router-link hover:cursor-pointer">{{ $t('skills') }}</a>
        <a @click="scrollToPortfolio" class="router-link hover:cursor-pointer">{{
          $t('portfolio')
        }}</a>
        <a @click="scrollToContact" class="router-link hover:cursor-pointer">{{ $t('contact') }}</a>
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
          <a @click="scrollToContact" class="hover:cursor-pointer" aria-label="Go to contact part">
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
import { RouterLink } from 'vue-router'
import LightSwitch from '@/components/LightSwitch.vue'
import SoundSwitch from '@/components/SoundSwitch.vue'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'

const size = 32

// find by ID

const scrollToSkills = () => {
  const skills = document.getElementById('skills')
  console.debug('🚀 ~ scrollToSkills ~ skills:', skills)
  if (!skills) return
  skills.scrollIntoView({ behavior: 'smooth' })
}
const scrollToPortfolio = () => {
  const portfolio = document.getElementById('portfolio')
  if (!portfolio) return
  portfolio.scrollIntoView({ behavior: 'smooth' })
}
const scrollToContact = () => {
  const contact = document.getElementById('contact')
  if (!contact) return
  contact.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
nav {
  @apply transform rounded-full border flex justify-center space-x-4 p-4;
  min-width: 80%;
  @apply translate-x-[10%] sm:translate-x-0;

  // border :
  @apply border-charcoal/[0.5] dark:border-white/[0.5];

  // background :
  @apply bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-50;

  // mobile : bottom centered, 80% width
  @apply fixed bottom-2;

  img {
    @apply sm:w-12 sm:h-12 min-w-20;
  }

  // tablet and above
  @apply lg:relative;
  @apply bottom-8;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.nav {
  &--main {
    @apply flex flex-row items-center justify-between;
  }
  &--second {
    @apply flex flex-row items-center justify-between;
  }
}

#links {
  @apply md:ml-8;
  @apply md:flex hidden;

  a.router-link-exact-active {
    @apply text-aero dark:text-aero;
  }

  a {
    @apply font-semibold text-lg  inline-block text-charcoal dark:text-white px-2;
    @apply transition-all duration-300 ease-in-out;

    &:first-of-type {
      border: 0;
    }
    &:hover {
      @apply text-aero;
    }
  }
}

.logo {
  @apply transition-all max-w-20;
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
