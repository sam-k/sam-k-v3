<script setup lang="ts">
  import SectionLabel from '../common/background/SectionLabel.vue';
  import {MOCK_NOTES} from '../common/mockData.ts';
  import NoteItem from '../notes/NoteItem.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel label="Notes" :index="1" font-size="2rem">
      <h2>Notes</h2>
    </SectionLabel>
    <ul :class="$style.notes">
      <NoteItem
        v-for="note in MOCK_NOTES"
        :key="note.title"
        :title="note.title"
        :date="note.date"
        :link="note.link"
        :tags="note.tags"
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

  .notes {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>
