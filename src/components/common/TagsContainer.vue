<script setup lang="ts">
  import type {LinkInfo} from './utils.ts';

  defineProps<{tags?: LinkInfo[]}>();
</script>

<template>
  <ul :class="$style.tags">
    <template v-for="tag in tags" :key="tag.label">
      <li>
        <a class="noMargin noUnderline" :href="tag.link">{{ tag.display }}</a>
      </li>
    </template>
  </ul>
</template>

<style module>
  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    a {
      background-color: var(--color-background-mute);
      text-decoration: none;
      text-wrap: nowrap;
    }
  }
</style>
