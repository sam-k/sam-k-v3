<script setup lang="ts">
  import {MOCK_PROJECTS} from '../common/mockData.ts';
  import ProjectItem from '../projects/ProjectItem.vue';
</script>

<template>
  <ul :class="$style.container">
    <ProjectItem
      v-for="project in MOCK_PROJECTS"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :icons="project.icons"
      :tags="project.tags"
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
