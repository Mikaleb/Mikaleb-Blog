<template>
  <nav>
    <div class="nav--main">
      <img
        alt="logo"
        class="logo dark:block hidden"
        src="@/assets/images/logo_light.svg"
        width="100"
        height="100"
      />
      <img
        alt="logo"
        class="logo dark:hidden"
        src="@/assets/images/logo.svg"
        width="100"
        height="100"
      />
      <div id="links">
        <RouterLink to="/">{{ $t('home') }}</RouterLink>
        <a @click="scrollToSkills" class="router-link hover:cursor-pointer">{{ $t('skills') }}</a>
        <a @click="scrollToPortfolio" class="router-link hover:cursor-pointer">{{
          $t('portfolio')
        }}</a>
        <a @click="scrollToContact" class="router-link hover:cursor-pointer">{{ $t('contact') }}</a>
      </div>
    </div>
    <div class="nav--second">
      <div class="socials centered">
        <ul>
          <li>
            <a href="https://twitter.com/MikalebCom">
              <svg-icon type="mdi" :path="mdiTwitter" :size="size"></svg-icon>
            </a>
          </li>
          <li>
            <a href="https://github.com/Mikaleb">
              <svg-icon type="mdi" :path="mdiGithub" :size="size"></svg-icon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mikalebeau/">
              <svg-icon type="mdi" :path="mdiLinkedin" :size="size"></svg-icon>
            </a>
          </li>
        </ul>
        <div class="switch ml-6">
          <Light-Switch />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LightSwitch from '@/components/LightSwitch.vue'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTwitter, mdiGithub, mdiLinkedin } from '@mdi/js'

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

  // border :
  @apply border-charcoal/[0.5] dark:border-white/[0.5];

  // background :
  @apply bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-50;

  // mobile : bottom centered, 80% width
  @apply fixed bottom-6;

  // tablet and above
  @apply lg:relative;
  @apply bottom-8;

  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
}

.nav {
  &--main {
    @apply flex items-center justify-between;
  }
  &--second {
    @apply flex items-center justify-between;
  }
}

#links {
  @apply ml-8;

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
  @apply transition-all;
  &:hover {
    @apply transition-all transform scale-110;
  }
}

.socials {
  @apply flex items-center text-aero-100 dark:text-white pl-6;

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
