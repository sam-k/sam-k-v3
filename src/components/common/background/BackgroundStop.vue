<script setup lang="ts">
  const props = defineProps<{
    index: number;
    fontSize?: string;
  }>();

  const leftIndex = props.index;
  const rightIndex = 2 - props.index;
  const fontSizeOrDefault = props.fontSize ?? '1em';
</script>

<template>
  <div :class="$style.backgroundStop" />
</template>

<style module>
  .backgroundStop {
    --stop-border-width: var(--line-gap);
    --gutter-stop-x-offset: min(
      calc(
        var(--gutter-center-x-offset) - 1.5 * var(--line-width) -
          var(--line-gap) - var(--stop-border-width)
      ),
      -5 * var(--line-width) - 4 * var(--line-gap) - var(--stop-border-width)
    );

    width: 100%;
    height: 0;

    &::before,
    &::after {
      position: absolute;
      content: '';
      z-index: calc(var(--nav-z-index) - 1);
      bottom: calc((v-bind(fontSizeOrDefault) - var(--line-width)) / 2);
      height: var(--line-width);
      background-color: var(--color-background);
      border: var(--stop-border-width) solid var(--color-text);
      border-radius: var(--rounded-rectangle-border-radius);
    }

    &::before {
      left: var(--gutter-stop-x-offset);
      width: calc(
        (v-bind(rightIndex) + 1) * var(--line-width) + v-bind(rightIndex) *
          var(--line-gap)
      );
    }

    &::after {
      right: var(--gutter-stop-x-offset);
      width: calc(
       (v-bind(leftIndex) + 1) * var(--line-width) + v-bind(leftIndex) *
          var(--line-gap)
      );
    }
  }
</style>
