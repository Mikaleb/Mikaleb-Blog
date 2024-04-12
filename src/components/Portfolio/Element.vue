<template>
  <li class="flex mb-10 ms-4 text-wrap border dark:border-charcoal-700 rounded-lg p-4">
    <div
      class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
    ></div>
    <div class="w-2/3">
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

      <div class="flex-wrap text-wrap flex gap-2 gap-y-3">
        <template v-for="skill in skills" :key="skill">
          <span
            class="bg-charcoal-900 text-charcoal-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-aero-100 dark:text-aero"
            >{{ skill }}</span
          >
        </template>
      </div>
    </div>

    <div class="experience-images--container">
      <img
        v-for="(s, key) in screenshots"
        :key="key"
        class="experience-images--item"
        :src="'/assets/portfolio/' + company.toLowerCase() + '/' + s.src"
        :alt="s.alt"
        @click="openModal(s)"
      />
      <Transition name="fade">
        <modal v-if="isModalOpen" @close="isModalOpen = false">
          <template v-if="modalScreenshot">
            <img
              :src="'/assets/portfolio/' + company.toLowerCase() + '/' + modalScreenshot.src"
              :alt="modalScreenshot.alt"
              @click="openModal(s)"
            />
          </template>
        </modal>
      </Transition>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { type Item, type Screenshot } from '@/types/portfolio'
import { defineProps, ref } from 'vue'
import Modal from '@/components/Modal.vue'

const props = defineProps({
  item: {
    type: Object as () => Item,
    required: true
  }
})

const isModalOpen = ref(false)
const modalScreenshot = ref<Screenshot | null>(null)

const { date, title, description, link, company, skills, screenshots } = props.item

const openModal = (screenshot: Screenshot) => {
  modalScreenshot.value = screenshot
  isModalOpen.value = true
}
</script>

<style scoped lang="scss">
a.link {
  @apply inline-flex items-center px-4 py-2 text-sm  text-charcoal bg-white border border-gray-200 rounded-lg;
  @apply hover:bg-gray-100 hover:text-aero;
  @apply focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-aero-400;
  @apply dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700;
}
/* Add any additional styles for the timeline item here */

.experience-images {
  &--container {
    @apply flex flex-wrap gap-2 mt-4 w-1/3 justify-center;
  }
  &--item {
    @apply h-24 object-cover rounded-lg;
    @apply shadow hover:cursor-pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
