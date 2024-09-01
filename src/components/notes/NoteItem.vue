<script setup lang="ts">
  import TagsContainer from '../common/TagsContainer.vue';
  import type {TagDefinition} from '../common/utils.ts';

  defineProps<{
    title: string;
    date: Date;
    link?: string;
    tags?: TagDefinition[];
  }>();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.titleContainer">
      <h3>
        <a :href="link">{{ title }}</a>
      </h3>
      <TagsContainer :tags="tags" />
    </div>
    <span>{{ date.getUTCFullYear() }}</span>
  </li>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
  }

  .titleContainer {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
</style>
