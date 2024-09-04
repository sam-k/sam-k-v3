<script setup lang="ts">
  import TagsContainer from '../common/TagsContainer.vue';
  import type {LinkInfo} from '../common/utils.ts';

  defineProps<{
    note: {
      title: string;
      date: string;
      tags?: LinkInfo[];
    };
  }>();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.titleContainer">
      <h3>
        <a href="">{{ note.title }}</a>
      </h3>
      <TagsContainer :tags="note.tags" />
    </div>
    <span>{{ new Date(note.date).getUTCFullYear() }}</span>
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
