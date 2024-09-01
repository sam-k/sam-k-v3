<script setup lang="ts">
  const props = defineProps<{
    label: string;
    index: number;
  }>();

  const leftIndex = props.index;
  const rightIndex = 2 - props.index;
  const lineColor = `var(--color-accent-${props.index + 1})`;
</script>

<template>
  <div :class="$style.container">
    <h2>{{ label }}</h2>
    <div :class="$style.backgroundLine" />
    <div :class="$style.backgroundStop" />
  </div>
</template>

<style module>
  .container {
    position: relative;
    font-size: 2rem;

    --line-width: 12px;
    --line-gap: calc(var(--line-width) / 2);

    --gutter-center-x-offset: calc((var(--max-width) - 100vw) / 4);
  }

  .backgroundLine,
  .backgroundBranchLine,
  .backgroundStop {
    width: 100%;
    height: 0;

    &::before,
    &::after {
      position: absolute;
      content: '';
    }
  }

  .backgroundLine {
    &::before,
    &::after {
      width: 0;
      height: 999999px;
      border-left-width: var(--line-width);
      border-left-style: solid;

      --gutter-innermost-line-x-offset: min(
        calc(
          var(--gutter-center-x-offset) + 0.5 * var(--line-width) +
            var(--line-gap)
        ),
        -3 * var(--line-width) - 2 * var(--line-gap)
      );
    }

    &::before {
      bottom: calc(0.5em - var(--line-width) / 4);
      left: calc(
        var(--gutter-innermost-line-x-offset) - v-bind(leftIndex) *
          (var(--line-width) + var(--line-gap))
      );
      border-color: v-bind(lineColor);
    }

    &::after {
      top: calc(0.5em - var(--line-width) / 4);
      right: calc(
        var(--gutter-innermost-line-x-offset) - v-bind(rightIndex) *
          (var(--line-width) + var(--line-gap))
      );
      border-color: v-bind(lineColor);
    }
  }

  .backgroundStop {
    &::before,
    &::after {
      z-index: calc(var(--nav-z-index) - 1);
      bottom: calc(var(--line-width) / 2);
      height: var(--line-width);
      background-color: var(--color-background);
      border: var(--stop-border-width) solid var(--color-text);
      border-radius: var(--rounded-rectangle-border-radius);

      --stop-border-width: var(--line-gap);
      --gutter-stop-x-offset: min(
        calc(
          var(--gutter-center-x-offset) - 1.5 * var(--line-width) -
            var(--line-gap) - var(--stop-border-width)
        ),
        -3 * var(--line-width) - 2 * var(--line-gap)
      );
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
