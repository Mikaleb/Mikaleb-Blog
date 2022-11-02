<template>
  <div class="flex">
    <main id="posts" class="flex flex-grow w-2/3">
      <article-index />
    </main>
    <aside id="sidebar" class="w-1/3">
      <About></About>
      <Tags></Tags>
    </aside>
  </div>
</template>

<script>
import ArticleIndex from '@/components/article/index'

export default {
  components: {
    ArticleIndex,
    About: () => import('~/components/widgets/about.vue'),
    Tags: () => import('~/components/widgets/tags.vue'),
  },
  data() {
    return {
      selectedTag: null,
      activeClass: 'active',
    }
  },
}
</script>
