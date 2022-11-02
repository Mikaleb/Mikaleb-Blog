<template>
  <div>
    <div
      class="container object-cover w-full max-w-6xl mx-auto bg-white rounded"
      :style="
        post.featured_image_src
          ? `background-image: url('${post.featured_image_src.large}');  height: 25vh;`
          : ''
      "
    />
    <div class="container mx-auto">
      <div v-if="post">
        <Excerpt :post="post"></Excerpt>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Article',
  components: {
    Excerpt: () => import('~/components/article/excerpt.vue'),
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
</script>
