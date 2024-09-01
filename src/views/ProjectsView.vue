<script setup lang="ts">
  import {MOCK_PROJECTS} from '../components/common/mockData.ts';
  import SectionLabel from '../components/common/background/SectionLabel.vue';
  import ProjectItem from '../components/projects/ProjectItem.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel :index="0" font-size="3rem" :show-all-lines="true">
      <h1>Projects</h1>
    </SectionLabel>
    <p>
      Open-source projects I’ve built over the years, including this website.
    </p>
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
</style>
