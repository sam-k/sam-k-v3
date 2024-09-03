<script setup lang="ts">
  import showdown from 'showdown';
  import TagsContainer from '../common/TagsContainer.vue';
  import type {LinkInfo} from '../common/utils.ts';

  const props = defineProps<{
    role: string;
    org: LinkInfo;
    description: string;
    dateRange: string;
    tags?: LinkInfo[];
  }>();
  console.log(props.description);

  const markdownConverter = new showdown.Converter();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.headerContainer">
      <h3 :class="$style.titleContainer">
        <span>{{ role }}</span>
        <span>•</span>
        <a :href="org.link">{{ org.display }}</a>
      </h3>
      <span>{{ dateRange }}</span>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="markdownConverter.makeHtml(description)" />
    <TagsContainer :tags="tags" />
  </li>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
