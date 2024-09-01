<script setup lang="ts">
  import BackgroundLine from './BackgroundLine.vue';
  import BackgroundStop from './BackgroundStop.vue';

  defineProps<{
    index: number;
    fontSize: string;
    showAllLines?: boolean;
  }>();
</script>

<template>
  <div :class="$style.container">
    <slot />
    <BackgroundLine :index="index" :font-size="fontSize" />
    <BackgroundLine
      v-if="showAllLines"
      :index="(index + 1) % 3"
      :font-size="fontSize"
      :base-index="index"
      :hidden="true"
    />
    <BackgroundLine
      v-if="showAllLines"
      :index="(index + 2) % 3"
      :font-size="fontSize"
      :base-index="index"
      :hidden="true"
    />
    <BackgroundStop :index="index" :font-size="fontSize" />
  </div>
</template>

<style module>
  .container {
    position: relative;
    font-size: v-bind(fontSize);

    --line-width: 12px;
    --line-gap: calc(var(--line-width) / 2);
    --gutter-center-x-offset: calc((var(--max-width) - 100vw) / 4);
  }
</style>
