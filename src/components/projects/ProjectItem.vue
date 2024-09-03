<script setup lang="ts">
  import showdown from 'showdown';
  import TagContainer from '../common/TagsContainer.vue';
  import type {LinkInfo} from '../common/utils.ts';
  import ProjectIconItem from './ProjectIconItem.vue';
  import type {LinkType} from './utils.ts';

  defineProps<{
    project: {
      title?: string;
      description?: string;
      image?: string;
      icons?: Array<LinkInfo & {kind?: LinkType}>;
      tags?: LinkInfo[];
    };
  }>();

  const markdownConverter = new showdown.Converter();
</script>

<template>
  <li :class="$style.container">
    <img :src="project.image" :alt="project.title" height="66.75">
    <div :class="$style.textContainer">
      <div :class="$style.titleContainer">
        <h3>{{ project.title }}</h3>
        <ul>
          <ProjectIconItem
            v-for="icon in project.icons"
            :key="icon.kind"
            :kind="icon.kind"
            :display="icon.display"
            :link="icon.link"
          />
        </ul>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="markdownConverter.makeHtml(project.description ?? '')" />
      <TagContainer :tags="project.tags" />
    </div>
  </li>
</template>

<style module>
  .container {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;

    img {
      border: 1px solid var(--color-border);
    }
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
