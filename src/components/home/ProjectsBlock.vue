<script setup lang="ts">
  import ProjectItem from '../projects/ProjectItem.vue';
  import type {LinkType} from '../projects/utils.ts';

  // TODO: Fetch from data.
  const projects: Array<{
    title: string;
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
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icons: [{
        kind: 'github',
        label: 'label 1',
        link: 'link 1',
      }],
      tags: [{
        label: 'tag 1',
        link: 'link 1',
      }],
    }, {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icons: [{
        kind: 'deploy',
        label: 'label 1',
        link: 'link 1',
      }, {
        kind: 'github',
        label: 'label 2',
      }],
      tags: [{
        label: 'tag 1',
        link: 'link 1',
      }, {
        label: 'tag 2',
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

    /* Line on background. */
    h2::before {
      left: var(--bg-rightmost-line-left-pos);
      border-color: var(--color-accent-3);
    }

    /* Stop on background. */
    h2::after {
      width: calc(3 * var(--bg-line-width) + 2 * var(--bg-line-gap));
    }
  }

  .projects {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>

