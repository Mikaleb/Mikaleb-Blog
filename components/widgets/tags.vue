<template>
  <div>
    <h2 class="tags-title">Tags</h2>
    <div class="tags-list">
      <ul>
        <li
          v-for="tag in tags"
          :key="tag.id"
          :class="[tag.id === selectedTag ? activeClass : '']"
          @click="updateTag(tag)"
        >
          <a>{{ tag.name }}</a>
          <span v-if="tag.id === selectedTag">✕</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$store.state.tags
    },
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
