<template>
  <li class="mb-10 ms-4 text-wrap border dark:border-charcoal-700 rounded-lg p-4">
    <div
      class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
    ></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
      date
    }}</time>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
    <span class="text-charcoal dark:text-charcoal-900">{{ company }}</span>
    <p
      class="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400"
      v-html="description"
    ></p>
    <a v-if="link" :href="link" class="link font-medium">
      Learn more
      <svg
        class="w-3 h-3 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        ></path>
      </svg>
    </a>

    <div class="flex-wrap text-wrap flex gap-2">
      <template v-for="skill in skills" :key="skill">
        <span
          class="bg-charcoal-900 text-charcoal-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-aero-100 dark:text-aero"
          >{{ skill }}</span
        >
      </template>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { type Item } from '@/types/portfolio'
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object as () => Item,
    required: true
  }
})

const { date, title, description, link, company, skills } = props.item
</script>

<style scoped lang="scss">
a.link {
  @apply inline-flex items-center px-4 py-2 text-sm  text-charcoal bg-white border border-gray-200 rounded-lg;
  @apply hover:bg-gray-100 hover:text-aero;
  @apply focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-aero-400;
  @apply dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700;
}
/* Add any additional styles for the timeline item here */
</style>
@/types/portfolio
