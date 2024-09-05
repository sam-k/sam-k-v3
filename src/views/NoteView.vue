<script setup lang="ts">
  import {useRoute} from 'vue-router';
  import NoteContent from '../components/notes/NoteContent.vue';

  const route = useRoute();
</script>

<template>
  <div :class="$style.container">
    <Suspense>
      <NoteContent :name="route.params.name as string" />
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
