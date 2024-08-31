<script setup lang="ts">
  import type {TagDefinition} from '../common/utils.ts';
  import ExperienceItem from '../experiences/ExperienceItem.vue';

  // TODO: Fetch from data.
  const experiences: Array<{
    role: string;
    org: {
      name: string;
      link?: string;
    };
    description: string;
    dateRange: string;
    tags?: TagDefinition[];
  }> = [{
    role: 'Role 1',
    org: {
      name: 'Organization 1',
      link: 'link 1',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    dateRange: '2024 – Present',
    tags: [{
      label: 'tag 1',
      link: 'link 1',
    }],
  }, {
    role: 'Role 2',
    org: {
      name: 'Organization 2',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateRange: '2023 – 2024',
    tags: [{
      label: 'tag 1',
      link: 'link 1',
    }, {
      label: 'tag 2',
    }],
  }];
</script>

<template>
  <div :class="$style.container">
    <h2>Experience</h2>
    <ul :class="$style.experiences">
      <ExperienceItem
        v-for="experience in experiences"
        :key="experience.org.name"
        :role="experience.role"
        :org="experience.org"
        :description="experience.description"
        :date-range="experience.dateRange"
        :tags="experience.tags"
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

  .experiences {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
