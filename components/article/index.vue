<template>
  <div>
    <div
      v-for="post in sortedPosts"
      :key="post.id"
      class="flex-1 mb-16 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg"
    >
      <Post :post="post"></Post>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Post: () => import('~/components/article/read.vue'),
  },
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
    postTitle(post) {
      if (post.title !== undefined) {
        return post.title.rendered
      }
      return post.name
    },
  },
}
</script>
