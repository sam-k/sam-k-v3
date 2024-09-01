<script setup lang="ts">
  import {MOCK_NOTES} from '../common/mockData.ts';
  import NoteItem from './NoteItem.vue';
</script>

<template>
  <ul :class="$style.container">
    <NoteItem
      v-for="note in MOCK_NOTES"
      :key="note.title"
      :title="note.title"
      :date="note.date"
      :link="note.link"
      :tags="note.tags"
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
