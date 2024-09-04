<script async setup lang="ts">
  import {listExperiences} from '../../api/index.ts';
  import ExperienceItem from './ExperienceItem.vue';

  const data = await listExperiences();
</script>

<template>
  <ul :class="$style.container">
    <ExperienceItem
      v-for="experience in data.experiences"
      :key="experience.org?.display"
      :experience="experience"
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
