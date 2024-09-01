<script setup lang="ts">
  import SectionLabel from '../common/background/SectionLabel.vue';
  import ProjectsContainer from '../projects/ProjectsContainer.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel label="Projects" :index="0" font-size="2rem">
      <h2>Projects</h2>
    </SectionLabel>
    <ProjectsContainer />
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
