<script setup lang="ts">
  import SectionLabel from '../common/background/SectionLabel.vue';
  import {MOCK_PROJECTS} from '../common/mockData.ts';
  import ProjectItem from '../projects/ProjectItem.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel label="Projects" :index="0" font-size="2rem">
      <h2>Projects</h2>
    </SectionLabel>
    <ul :class="$style.projects">
      <ProjectItem
        v-for="project in MOCK_PROJECTS"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :icons="project.icons"
        :tags="project.tags"
      />
    </ul>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .projects {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
