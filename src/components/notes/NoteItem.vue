<script setup lang="ts">
  import {RouterLink} from 'vue-router';
  import TagsContainer from '../common/TagsContainer.vue';
  import type {LinkInfo} from '../common/utils.ts';

  defineProps<{
    note: {
      filename?: string;
      title?: string;
      date?: string;
      tags?: LinkInfo[];
    };
  }>();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.titleContainer">
      <h3>
        <RouterLink :to="`/notes/${note.filename}`">
          {{ note.title }}
        </RouterLink>
      </h3>
      <TagsContainer :tags="note.tags" />
    </div>
    <span v-if="note.date" :class="$style.date">
      {{ new Date(note.date).getUTCFullYear() }}
    </span>
  </li>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .titleContainer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (width < 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .date {
    text-align: end;
    text-wrap: nowrap;
  }
</style>
