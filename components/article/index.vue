<template>
  <div>
    <div
      v-for="post in sortedPosts"
      :key="post.id"
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg mb-16"
    >
      <div
        class="container w-full max-w-6xl mx-auto bg-white object-cover rounded"
        :style="`
          background-image: url('${post.featured_image_src.large}');
          height: 25vh;
        `"
      ></div>
      <!-- <div>
        <img
          :src="post.featured_image_src.large"
          class="h-80 w-full rounded-t pb-6 object-cover"
        />
      </div> -->
      <div class="container max-w-5xl mx-auto -mt-16">
        <div class="mx-0 sm:mx-6">
          <div
            class="bg-white w-full p-8 md:p-8 text-xl md:text-2xl text-gray-800 leading-normal"
          >
            <h2 class="w-full font-bold text-2xl text-gray-900 px-6">
              <a :href="`blog/${post.slug}`" v-html="post.title.rendered"></a>
            </h2>
            <small class="w-full text-gray-600 text-xs md:text-sm px-6">
              {{ post.date | dateformat }}
            </small>
            <div
              class="text-gray-800 font-serif text-base mb-5"
              v-html="post.content.rendered"
            ></div>
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
      if (!this.selectedTag) return this.posts
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
