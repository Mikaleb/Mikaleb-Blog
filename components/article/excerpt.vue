<template>
  <div v-if="post">
    <h2 class="w-full px-6 text-2xl font-bold text-gray-900">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <a :href="`blog/${post.slug}`" v-html="postTitle(post)" />
    </h2>
    <small class="w-full px-6 text-xs text-gray-600 md:text-sm">
      {{ post.date | dateformat }}
    </small>
    <section
      class="mb-5 font-serif text-basetext-gray-800"
      v-html="post.content.rendered"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Article',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    postTitle(post: { title: { rendered: any } }) {
      return post.title.rendered
    },
  },
})
</script>
