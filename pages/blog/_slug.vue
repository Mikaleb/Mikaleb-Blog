<template>
  <main class="post individual">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <h1 v-html="post.title.rendered" />
    <small class="date">{{ post.date | dateformat }}</small>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section v-html="post.content.rendered" />
  </main>
</template>

<script>
export default {
  data () {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    },
    post () {
      return this.posts.find(el => el.slug === this.slug)
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style lang="scss" scoped>
main.post {
  margin: 60px auto 50px;
  max-width: 800px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>
