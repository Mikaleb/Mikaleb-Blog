<template>
  <picture v-if="mediaId && media">
    <img :src="media_src" :alt="media.alt_text" />
  </picture>
</template>

<script lang="ts">
// eslint-disable-next-line camelcase
import { WP_REST_API_Attachment } from 'wp-types'

import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  props: {
    mediaId: {
      type: Number || String,
      required: true,
    } as PropOptions<number | string>,
    featured: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
    mediaSize: {
      type: String,
      default: 'large',
    } as PropOptions<string>,
  },
  data() {
    return {
      // eslint-disable-next-line camelcase
      media: null as WP_REST_API_Attachment | null,
    }
  },
  async fetch() {
    if (this.mediaId) {
      this.media = await fetch(
        `${process.env.NUXT_ENV_WP_URL}/wp-json/wp/v2/media/${this.mediaId}`
      ).then((res) => res.json())
    }
  },

  computed: {
    // eslint-disable-next-line camelcase
    media_src(): string {
      if (this.media) {
        const mediaSizes: any = this.media.media_details
        // check if object has named property
        if (
          Object.prototype.hasOwnProperty.call(mediaSizes.sizes, this.mediaSize)
        ) {
          return mediaSizes.sizes[this.mediaSize].source_url
        }
        return mediaSizes.sizes.full.source_url
      }
      return ''
    },
  },
})
</script>
