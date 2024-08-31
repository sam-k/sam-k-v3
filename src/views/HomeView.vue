<script setup lang="ts">
  import IntroBlock from '../components/home/IntroBlock.vue';
  import NotesBlock from '../components/home/NotesBlock.vue';
  import ProjectsBlock from '../components/home/ProjectsBlock.vue';
</script>

<template>
  <main>
    <IntroBlock />
    <ProjectsBlock />
    <NotesBlock />
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
