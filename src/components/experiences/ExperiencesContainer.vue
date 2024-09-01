<script setup lang="ts">
  import {MOCK_EXPERIENCES} from '../common/mockData.ts';
  import ExperienceItem from './ExperienceItem.vue';
</script>

<template>
  <ul :class="$style.container">
    <ExperienceItem
      v-for="experience in MOCK_EXPERIENCES"
      :key="experience.org.name"
      :role="experience.role"
      :org="experience.org"
      :description="experience.description"
      :date-range="experience.dateRange"
      :tags="experience.tags"
    />
  </ul>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
