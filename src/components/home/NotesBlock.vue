<script setup lang="ts">
  import SectionLabel from '../common/background/SectionLabel.vue';
  import NotesContainer from '../notes/NotesContainer.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel label="Notes" :index="1" font-size="2rem">
      <h2>Notes</h2>
    </SectionLabel>
    <NotesContainer />
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
