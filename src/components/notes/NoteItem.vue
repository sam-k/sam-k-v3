<script setup lang="ts">
  defineProps<{
    title: string;
    date: Date;
    link?: string;
    tags?: Array<{
      label: string;
      link?: string;
    }>;
  }>();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.titleContainer">
      <h3>
        <a :href="link">{{ title }}</a>
      </h3>
      <ul :class="$style.tags">
        <template v-for="tag in tags" :key="tag.label">
          <li>
            <a class="noMargin noUnderline" :href="tag.link">{{ tag.label }}</a>
          </li>
        </template>
      </ul>
    </div>
    <span>{{ date.getUTCFullYear() }}</span>
  </li>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
  }

  .titleContainer {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

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
