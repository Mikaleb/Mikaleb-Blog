<template>
  <nav>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/about">About Me</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="socials">
      <ul>
        <li>
          <a href="https://twitter.com/MikalebCom" class="mx-2">
            <svg-icon type="mdi" :path="mdiTwitter" :size="size"></svg-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/Mikaleb" class="mx-2">
            <svg-icon type="mdi" :path="mdiGithub" :size="size"></svg-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mikalebeau/" class="mx-2">
            <svg-icon type="mdi" :path="mdiLinkedin" :size="size"></svg-icon>
          </a>
        </li>
        <li>
          <a @click="toggleTheme" class="mx-2 hover:cursor-pointer">
            <svg-icon type="mdi" :path="mdiThemeLightDark" :size="size"></svg-icon>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiThemeLightDark } from '@mdi/js'

const size = 32

const toggleTheme = () => {
  const html = document.querySelector('html')
  if (html) {
    html.classList.toggle('dark')
  }
}
</script>

<style scoped lang="scss">
nav {
  @apply sm:block md:flex flex items-center justify-between align-middle flex-wrap gap-6 w-full;
}

nav a.router-link-exact-active {
  @apply text-blue-500;
}

nav a {
  @apply font-semibold text-lg p-2;
  display: inline-block;

  &:hover {
    background-color: var(--color-bg);
  }
}

nav a:first-of-type {
  border: 0;
}

.socials {
  @apply flex items-center;

  & ul {
    @apply flex items-center sm:only:mt-4;

    & li {
      &:hover {
        & a {
          @apply text-blue-500 transition-all;
        }
      }
    }
  }
}

.links {
  @apply font-semibold dark:text-yellow-50;
  & a:hover {
    @apply text-blue-500 transition-all;
  }
}
</style>
