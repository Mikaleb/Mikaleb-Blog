<template>
  <div>
    <ft-image
      v-if="post.featured_media"
      :media-id="post.featured_media"
      :featured="true"
    />
    <div class="container mx-auto">
      <div v-if="post">
        <Content :post="post" :full="true"></Content>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Article',
  components: {
    Content: () => import('~/components/article/content.vue'),
    FtImage: () => import('~/components/article/ftImage.vue'),
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
})
</script>
