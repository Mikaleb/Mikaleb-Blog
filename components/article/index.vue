<template>
  <div>
    <div v-for="post in sortedPosts" :key="post.id" class="post">
      <h3>
        <a :href="`blog/${post.slug}`" v-html="post.title.rendered"></a>
      </h3>
      <small>{{ post.date | dateformat }}</small>
      <div v-html="post.excerpt.rendered"></div>
      <a :href="`blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
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
