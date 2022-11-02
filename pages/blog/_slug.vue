<template>
  <main v-if="post" class="post individual">
    <Post :post="post"></Post>
  </main>
</template>

<script>
export default {
  components: {
    Post: () => import('~/components/article/read.vue'),
  },
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    post() {
      return this.$store.state.post
    },
  },
  created() {
    this.$store.dispatch('getPost', this.slug)
  },
}
</script>
