<script setup lang="ts">
  import SectionLabel from '../components/common/background/SectionLabel.vue';
  import NotesContainer from '../components/notes/NotesContainer.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel :index="1" font-size="3rem" :show-all-lines="true">
      <h1>Notes</h1>
    </SectionLabel>
    <p>Articles and random notes I’ve written over the years.</p>
    <Suspense>
      <NotesContainer />
    </Suspense>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
