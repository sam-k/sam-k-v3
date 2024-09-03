<script setup lang="ts">
  import ProjectItem from '../projects/ProjectItem.vue';

  const props = defineProps<{featured?: boolean}>();

  const data = await (
    await fetch(`/api/projects${props.featured ? '/featured' : ''}`)
  ).json();
</script>

<template>
  <ul :class="$style.container">
    <ProjectItem
      v-for="project in (data.projects ?? [])"
      :key="project.title"
      :project="project"
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
