<template>
  <div v-if="post">
    <h2 class="w-full pt-6 text-2xl font-bold text-gray-900">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <NuxtLink
        v-html="postTitle"
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
      ></NuxtLink>
    </h2>
    <small class="w-full text-xs text-gray-600 md:text-sm">
      {{ post.date | dateformat }}
    </small>
    <section id="section" class="text-basetext-gray-800" v-html="postContent" />
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
    postTitle(): string {
      // @ts-ignore
      return this.post?.title?.rendered || this.post?.title
    },
    postContent(): any {
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

<style lang="scss" scoped>
#section {
  @apply my-6 font-serif;
}
</style>
