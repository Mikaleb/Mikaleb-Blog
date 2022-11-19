<template>
  <main v-if="post" class="post individual">
    <Post :post="post"></Post>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    Post: () => import('~/components/article/read.vue'),
  },
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  head() {
    let meta = []
    if (this.post.meta && this.post.meta.length) {
      // @ts-ignore
      meta = this.post.meta.map((meta: any) => {
        return {
          hid: meta,
          name: meta,
          content: meta,
        }
      })
    }

    return {
      // @ts-ignore
      title: this.title,
      meta,
    }
  },
  computed: {
    post() {
      return this.$store.state.post
    },
    title() {
      return this.$store.state.post.title?.rendered
    },
  },
  beforeMount() {
    this.$store.dispatch('getPost', this.slug)
  },
})
</script>
