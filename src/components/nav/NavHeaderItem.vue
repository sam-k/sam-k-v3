<script setup lang="ts">
  const props = defineProps<{
    name: string,
    color: string,
    iconColor?: string,
  }>();

  const iconColor = props.iconColor || 'var(--color-background)';
</script>

<template>
  <div :class="$style.item">
    <div :class="$style.icon">
      <slot>
        <span>{{ name[0] }}</span>
      </slot>
    </div>
    <span :class="$style.label">{{ name }}</span>
  </div>
</template>

<style module>
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.375rem;
    padding: 0.25rem;
    width: 4rem;

    &:hover {
      .icon {
        outline-color:
          color-mix(in srgb, v-bind(color) 25%, var(--color-background));
        outline-style: solid;
        outline-width: 0.375rem;
      }

      .label {
        color: var(--color-text);
        text-decoration: underline v-bind(color) solid 0.375rem;
      }
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25em;
    height: 2.25rem;
    border-radius: 100%;
    background-color: v-bind(color);

    span {
      font-size: 1.75rem;
      font-weight: 700;
      color: v-bind(iconColor);
    }

    svg {
      height: 1.75rem;
      fill: v-bind(iconColor);
    }
  }
</style>
