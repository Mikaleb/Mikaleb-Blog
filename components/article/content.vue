<template>
  <div v-if="post">
    <h2 class="w-full px-6 text-2xl font-bold text-gray-900">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <a :href="`blog/${post.slug}`" v-html="postTitle" />
    </h2>
    <small class="w-full px-6 text-xs text-gray-600 md:text-sm">
      {{ post.date | dateformat }}
    </small>
    <section
      class="mb-5 font-serif text-basetext-gray-800"
      v-html="postContent"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Content',
  props: {
    post: {
      type: Object,
      required: true,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    postTitle() {
      // @ts-ignore
      return this.post?.title?.rendered || this.post?.title
    },
    postContent() {
      if (this.full) {
        // @ts-ignore
        return this.post?.content?.rendered || this.post?.content
      }
      // @ts-ignore
      return this.post?.excerpt?.rendered
    },
  },
  methods: {},
})
</script>
