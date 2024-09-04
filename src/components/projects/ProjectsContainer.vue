<script setup lang="ts">
  import {listProjects} from '../../api/index.ts';
  import ProjectItem from '../projects/ProjectItem.vue';

  const props = defineProps<{featured?: boolean}>();

  const data = await listProjects(props.featured);
</script>

<template>
  <ul :class="$style.container">
    <ProjectItem
      v-for="project in data.projects"
      :key="project.title"
      :project="project as any"
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
