<script setup lang="ts">
  const props = defineProps<{
    label: string;
    link: string;
    color: string;
    iconColor?: string;
  }>();

  const iconColor = props.iconColor || 'white';
</script>

<template>
  <a :href="link" :class="[$style.container, 'noHover']">
    <div :class="$style.bullet">
      <div :class="$style.line" />
      <div :class="$style.stop">
        <slot />
      </div>
    </div>
    <a>{{ label }}</a>
  </a>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .bullet {
    height: 1.75rem;
  }

  .line {
    position: relative;
    top: 0.625rem;
    width: 4rem;
    height: 0.5rem;
    background-color: v-bind(color);
  }

  .stop {
    position: relative;
    top: -0.5rem;
    left: 1.125rem;
    width: 1.75rem;
    height: 1.75rem;
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
