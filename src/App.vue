<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

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

<template>
  <header class="dark:bg-slate-800 dark:text-white">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

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
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  @apply md:flex items-center p-4 sm:block;
}

nav {
  @apply sm:block md:flex items-center justify-between align-middle;
  width: 100%;
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.links {
  @apply font-semibold;
  & a:hover {
    @apply text-blue-500 transition-all;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  &:hover {
    @apply transition-all transform scale-110 text-blue-800;

    fill: blue;
  }
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
