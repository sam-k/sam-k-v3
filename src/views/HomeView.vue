<script setup lang="ts">
  import ExperienceBlock from '../components/home/ExperienceBlock.vue';
  import IntroBlock from '../components/home/IntroBlock.vue';
  import NotesBlock from '../components/home/NotesBlock.vue';
  import ProjectsBlock from '../components/home/ProjectsBlock.vue';
</script>

<template>
  <main>
    <IntroBlock />
    <ProjectsBlock />
    <NotesBlock />
    <ExperienceBlock />
    <!-- TODO: Implement other blocks. -->
  </main>
</template>

<style module>
  main {
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
  }
</style>
