<template>
  <li class="element">
    <div class="element--indicator"></div>
    <div class="element--container">
      <div class="md:w-2/3 w-full">
        <time class="mb-1 text-sm font-normal leading-none text-charcoal-500 dark:text-gray-500">{{
          date
        }}</time>
        <span class="text-charcoal-500 dark:text-gray-500">
          <a v-if="link" :href="link" target="_blank" class="link font-medium mb-4 ml-2">
            {{ company }}
          </a>
          <span v-else>{{ company }}</span>
        </span>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>

        <p
          class="mb-4 mt-2 text-base font-normal text-gray-500 dark:text-gray-400"
          v-html="description"
        ></p>

        <div class="flex-wrap text-wrap flex gap-2 gap-y-3">
          <template v-for="skill in skills" :key="skill">
            <span
              class="bg-charcoal-900 text-charcoal-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-aero-200 dark:text-aero"
              >{{ skill }}</span
            >
          </template>
        </div>
      </div>

      <div class="experience-images--container">
        <div v-for="(s, key) in screenshots" :key="key" class="flex align-center items-center">
          <img
            class="experience-images--item"
            :src="'/assets/portfolio/' + company.toLowerCase() + '/' + s.src"
            :alt="s.alt"
            @click="isSmallScreen ? openImage(s, key) : openModal(s, key)"
          />
        </div>

        <Transition name="fade">
          <modal
            v-if="isModalOpen"
            @close="isModalOpen = false"
            @prev="changeModalScreenshot('prev')"
            @next="changeModalScreenshot('next')"
          >
            <template v-if="modalScreenshot">
              <img
                :src="'/assets/portfolio/' + company.toLowerCase() + '/' + modalScreenshot.src"
                :alt="modalScreenshot.alt"
              />
            </template>
          </modal>
        </Transition>
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import { type Item, type Screenshot } from '@/main'
import { defineProps, ref } from 'vue'
import Modal from '@/components/Modal.vue'
import { useMediaQuery } from '@vueuse/core'

const props = defineProps({
  item: {
    type: Object as () => Item,
    required: true
  }
})

const isModalOpen = ref(false)
const modalScreenshot = ref<Screenshot | null>(null)
const modalIndex = ref(0)

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const { date, title, description, link, company, skills, screenshots } = props.item

const openModal = (screenshot: Screenshot, key: number) => {
  modalScreenshot.value = screenshot
  modalIndex.value = key
  isModalOpen.value = true
}
const openImage = (screenshot: Screenshot, key: number) => {
  window.open(`/assets/portfolio/${company.toLowerCase()}/${screenshot.src}`, '_blank')
  // modalScreenshot.value = screenshot
  // modalIndex.value = key
  // isModalOpen.value = true
}

const changeModalScreenshot = (direction: 'prev' | 'next') => {
  const nextIndex = direction === 'prev' ? modalIndex.value - 1 : modalIndex.value + 1
  if (!screenshots) return
  if (nextIndex >= 0 && nextIndex < screenshots.length) {
    modalScreenshot.value = screenshots[nextIndex]
    modalIndex.value = nextIndex
  }
}
</script>

<style scoped lang="scss">
.element {
  @apply flex mb-10 ms-4 text-wrap border dark:border-charcoal-700 rounded-lg p-4;
}
.element--indicator {
  @apply absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 gap-2 text-wrap;
}
.element--container {
  @apply flex flex-col md:flex-row w-full;
}

a.link {
  @apply inline-flex items-center p-2 text-sm  text-charcoal-500 dark:text-gray-500 bg-white  border-gray-200 rounded-lg transition-all duration-300 ease-in-out;
  @apply hover:bg-gray-100 hover:text-aero;
  @apply focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-aero-400;
  @apply dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700;
}

.experience-images {
  &--container {
    @apply flex flex-wrap gap-2 mt-4 md:w-1/3 w-full  justify-center;
  }
  &--item {
    @apply max-w-24 md:max-w-40 2xl:max-w-56 object-cover rounded-lg transition-all duration-300 ease-in-out;
    @apply shadow hover:cursor-pointer hover:shadow-lg hover:scale-105;
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
