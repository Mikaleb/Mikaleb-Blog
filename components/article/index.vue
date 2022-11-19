<template>
  <div>
    <div v-for="post in sortedPosts" id="container" :key="post.id" class="">
      <Content :post="post" :full="false"></Content>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    Content: () => import('~/components/article/content.vue'),
  },
  data() {
    return {
      selectedTag: null,
      activeClass: 'active',
    }
  },
  computed: {
    ...mapState(['posts', 'tags']),

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

<style lang="scss" scoped>
#container {
  @apply flex-1 mb-16 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg p-2;
}
</style>
