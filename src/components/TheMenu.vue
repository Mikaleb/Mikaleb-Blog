<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/portfolio">Portfolio</RouterLink>
    <RouterLink to="/about">About Me</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <!-- <div class="socials">
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
    </div> -->
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
  @apply transform rounded-full border border-transparent  bg-white flex justify-center space-x-4 px-8 py-6;
  @apply dark:border-white/[0.2] dark:bg-black bg-opacity-50 dark:bg-opacity-50;

  // mobile : bottom centered, 80% width
  @apply fixed bottom-6 left-1/2 -translate-x-1/2 -translate-y-1/2;

  // tablet and above
  @apply lg:relative lg:w-4/5;
  @apply bottom-8;
}

nav a.router-link-exact-active {
  @apply text-tiffany_blue;
}

nav a {
  @apply font-semibold text-lg  inline-block text-old_lace;
}

nav a:first-of-type {
  border: 0;
}

// .socials {
//   @apply flex items-center;

//   & ul {
//     @apply flex items-center sm:only:mt-4;

//     & li:hover a {
//       @apply text-blue-500 transition-all;
//     }
//   }
// }

// .links {
//   @apply font-semibold dark:text-yellow-50;

//   & a:hover {
//     @apply text-blue-500 transition-all;
//   }
// }
</style>
