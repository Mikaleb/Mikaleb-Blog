<script lang="ts" setup>
import { techs, type Tech } from '@/data/tech'
import SkillCard from '@/components/Skills/Card.vue'
</script>

<template>
  <h2 class="font-bold">{{ $t('skills') }}</h2>

  <div id="competencies--container">
    <template v-for="tech in techs" :key="tech.slug">
      <skill-card :tech="tech" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
#competencies--container {
  @apply grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4;
}
</style>
