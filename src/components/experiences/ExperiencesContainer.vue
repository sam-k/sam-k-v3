<script async setup lang="ts">
  import ExperienceItem from './ExperienceItem.vue';

  const data = await (await fetch('/api/experiences')).json();
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
