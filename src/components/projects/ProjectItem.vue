<script setup lang="ts">
  import TagContainer from '../common/TagsContainer.vue';
  import type {LinkInfo} from '../common/utils.ts';
  import ProjectIconItem from './ProjectIconItem.vue';
  import type {LinkType} from './utils.ts';

  defineProps<{
    title: string;
    description: string;
    icons?: Array<{
      kind: LinkType;
      label?: string;
      link?: string;
    }>;
    tags?: LinkInfo[];
  }>();
</script>

<template>
  <li :class="$style.container">
    <!-- TODO: Fetch from data. -->
    <div :class="$style.testImg" />
    <div :class="$style.textContainer">
      <div :class="$style.titleContainer">
        <h3>{{ title }}</h3>
        <ul>
          <ProjectIconItem
            v-for="icon in icons"
            :key="icon.kind"
            :kind="icon.kind"
            :label="icon.label"
            :link="icon.link"
          />
        </ul>
      </div>
      <p>{{ description }}</p>
      <TagContainer :tags="tags" />
    </div>
  </li>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
  }

  .testImg {
    padding: 33.75px 60px;
    background-color: red;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .titleContainer {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    ul {
      display: flex;
      column-gap: 0.5rem;
    }
  }
</style>
