<script setup lang="ts">
  import ProjectItem from '../projects/ProjectItem.vue';
  import type {LinkType} from '../projects/utils.ts';

  // TODO: Fetch from data.
  const projects: Array<{
    name: string;
    description: string;
    icons?: Array<{
      kind: LinkType;
      label?: string;
      link?: string;
    }>;
    tags?: Array<{
      label: string;
      link?: string;
    }>;
  }> = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icons: [
        {
          kind: 'github',
          label: 'label 1',
          link: 'link 1',
        },
      ],
      tags: [
        {
          label: 'tag 1',
          link: 'link 1',
        },
      ],
    }, {
      name: 'Project 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icons: [{
        kind: 'deploy',
        label: 'label 1',
        link: 'link 1',
      }, {
        kind: 'github',
        label: 'label 2',
        link: 'link 2',
      }],
      tags: [{
        label: 'tag 1',
        link: 'link 1',
      }, {
        label: 'tag 2',
        link: 'link 2',
      }],
    },
  ];
</script>

<template>
  <div :class="$style.container">
    <h2>Projects</h2>
    <ul :class="$style.projects">
      <ProjectItem
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
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

