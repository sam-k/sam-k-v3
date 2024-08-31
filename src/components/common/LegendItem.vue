<script setup lang="ts">
  const props = defineProps<{
    label: string;
    link: string;
    color: string;
    iconColor?: string;
  }>();

  const iconColor = props.iconColor || 'var(--color-background)';
</script>

<template>
  <a :href="link" :class="[$style.container, 'noHover']">
    <div :class="$style.bullet">
      <div :class="$style.line" />
      <div :class="$style.stop">
        <slot />
      </div>
    </div>
    <a :href="link">{{ label }}</a>
  </a>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    --legend-stop-diameter: 1.75rem;
    --legend-line-length: 4rem;
    --legend-line-thickness: 0.5rem;
  }

  .bullet {
    height: var(--legend-stop-diameter);
  }

  .line {
    position: relative;
    top: calc((var(--legend-stop-diameter) - var(--legend-line-thickness)) / 2);
    width: var(--legend-line-length);
    height: var(--legend-line-thickness);
    background-color: v-bind(color);
  }

  .stop {
    position: relative;
    top: calc(-1 * var(--legend-line-thickness));
    left: calc((var(--legend-line-length) - var(--legend-stop-diameter)) / 2);
    width: var(--legend-stop-diameter);
    height: var(--legend-stop-diameter);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: v-bind(color);

    svg {
      height: 1.25rem;
      fill: v-bind(iconColor);
    }
  }
</style>
