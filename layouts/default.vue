<template>
  <div class="">
    <header
      class="sticky top-0 z-40 w-full mx-auto lg:z-50 max-w-8xl bg-mkGray"
    >
      <Hmenu />
    </header>
    <div class="w-full mx-auto">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Hmenu from '~/components/design/Hmenu.vue'

export default {
  components: {
    Hmenu,
  },
}
</script>
