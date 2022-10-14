<template>
  <div>
    <div
      v-for="post in sortedPosts"
      :key="post.id"
      class="
        flex-1
        mb-16
        overflow-hidden
        bg-white
        rounded-t rounded-b-none
        shadow-lg
      "
    >
      <div
        class="container object-cover w-full max-w-6xl mx-auto bg-white rounded"
        :style="
          featured_image_src
            ? `background-image: url('${post.featured_image_src.large}');  height: 25vh;`
            : ''
        "
      />
      <div class="container max-w-5xl mx-auto -mt-16">
        <div class="mx-0 sm:mx-6">
          <div
            class="
              w-full
              p-8
              text-xl
              leading-normal
              text-gray-800
              bg-white
              md:p-8 md:text-2xl
            "
          >
            <h2 class="w-full px-6 text-2xl font-bold text-gray-900">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <a :href="`blog/${post.slug}`" v-html="post.title.rendered" />
            </h2>
            <small class="w-full px-6 text-xs text-gray-600 md:text-sm">
              {{ post.date | dateformat }}
            </small>
            <div
              v-html="post.content.rendered"
              class="mb-5 font-serif text-basetext-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTag: null,
      activeClass: 'active',
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    tags() {
      return this.$store.state.tags
    },
    sortedPosts() {
      if (!this.posts || !this.posts.length) {
        return []
      }
      if (!this.selectedTag) {
        return this.posts
      }
      return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    },
  },
}
</script>
