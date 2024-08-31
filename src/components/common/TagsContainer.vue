<script setup lang="ts">
  import type {TagDefinition} from './utils.ts';

  defineProps<{tags?: TagDefinition[]}>();
</script>

<template>
  <ul :class="$style.tags">
    <template v-for="tag in tags" :key="tag.label">
      <li>
        <a class="noMargin noUnderline" :href="tag.link">{{ tag.label }}</a>
      </li>
    </template>
  </ul>
</template>

<style module>
  .tags {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    a {
      background-color: var(--color-background-mute);
      text-decoration: none;
      text-wrap: nowrap;
    }
  }
</style>
