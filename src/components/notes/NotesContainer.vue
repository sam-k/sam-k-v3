<script setup lang="ts">
  import {listNotes} from '../../api/index.ts';
  import NoteItem from './NoteItem.vue';

  const props = defineProps<{featured?: boolean}>();

  const data = await listNotes(props.featured);
</script>

<template>
  <ul :class="$style.container">
    <NoteItem
      v-for="note in data.metadata"
      :key="note.title"
      :note="note"
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
