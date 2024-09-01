<script setup lang="ts">
  const props = defineProps<{
    index: number;
    fontSize?: string;
    baseIndex?: number;
    hidden?: boolean;
  }>();

  const leftIndex = props.index;
  const rightIndex = 2 - props.index;
  const fontSizeOrDefault = props.fontSize ?? '1em';

  const leftDisplay =
    props.index >= (props.baseIndex ?? props.index)
      ? 'inherit'
      : 'none';
  const rightDisplay =
    props.index <= (props.baseIndex ?? props.index)
      ? 'inherit'
      : 'none';

  const yOffset = props.hidden ? '-99999px': `calc(${fontSizeOrDefault} / 2)`;

  const lineColor = `var(--color-accent-${props.index + 1})`;
  const lineOpacity = props.hidden ? '25%' : '100%';
</script>

<template>
  <div :class="$style.backgroundLine" />
</template>

<style module>
  .backgroundLine {
    --gutter-innermost-line-x-offset: min(
      calc(
        var(--gutter-center-x-offset) + 0.5 * var(--line-width) +
          var(--line-gap)
      ),
      -3 * var(--line-width) - 2 * var(--line-gap)
    );
    --line-color: color-mix(
      in srgb,
      v-bind(lineColor) v-bind(lineOpacity),
      transparent
    );

    width: 100%;
    height: 0;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 999999px;
      border-left-width: var(--line-width);
      border-left-style: solid;
    }

    &::before {
      display: v-bind(leftDisplay);
      bottom: v-bind(yOffset);
      left: calc(
        var(--gutter-innermost-line-x-offset) - v-bind(leftIndex) *
          (var(--line-width) + var(--line-gap))
      );
      border-color: var(--line-color);
    }

    &::after {
      display: v-bind(rightDisplay);
      top: v-bind(yOffset);
      right: calc(
        var(--gutter-innermost-line-x-offset) - v-bind(rightIndex) *
          (var(--line-width) + var(--line-gap))
      );
      border-color: var(--line-color);
    }
  }
</style>
