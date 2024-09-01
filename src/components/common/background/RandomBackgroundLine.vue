<script setup lang="ts">
  import BackgroundLine from './BackgroundLine.vue';

  const randomIndex = Math.floor(Math.random() * 3);
  const randomLeftOffset = `${Math.floor(Math.random() * 90) + 5}%`;
  const randomHidden =  Math.floor(Math.random() * 2) === 0;
</script>

<template>
  <BackgroundLine
    :class="$style.line"
    :index="randomIndex"
    :base-index="-1"
    :hidden="randomHidden"
  />
</template>

<style module>
  .line {
    z-index: -1;
    left: v-bind(randomLeftOffset);
    position: absolute;
    bottom: 0;

    --line-width: 12px;
    --line-gap: 0;
    --gutter-center-x-offset: 0;
    --gutter-innermost-line-x-offset: 0;
  }
</style>
