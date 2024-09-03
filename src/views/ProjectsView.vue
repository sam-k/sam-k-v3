<script setup lang="ts">
  import SectionLabel from '../components/common/background/SectionLabel.vue';
  import ProjectsContainer from '../components/projects/ProjectsContainer.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel :index="0" font-size="3rem" :show-all-lines="true">
      <h1>Projects</h1>
    </SectionLabel>
    <p>
      Open-source projects I’ve built over the years, including this website.
    </p>
    <Suspense>
      <ProjectsContainer />
    </Suspense>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
