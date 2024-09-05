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
      date?: string;
      image?: string;
      icons?: Array<LinkInfo & {kind?: LinkType}>;
      tags?: LinkInfo[];
    };
  }>();

  const markdownConverter = new showdown.Converter();
</script>

<template>
  <li :class="$style.container">
    <img :src="project.image" :alt="project.title">
    <div :class="$style.textContainer">
      <div :class="$style.titleContainer">
        <div :class="$style.titleWithIcons">
          <h3>{{ project.title }}</h3>
          <ul :class="$style.iconContainer">
            <ProjectIconItem
              v-for="icon in project.icons"
              :key="icon.kind"
              :kind="icon.kind"
              :display="icon.display"
              :link="icon.link"
            />
          </ul>
        </div>
        <span v-if="project.date">
          {{ new Date(project.date).getUTCFullYear() }}
        </span>
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
    gap: 1.5rem;

    img {
      height: 66.75px;
      border: 1px solid var(--color-border);
    }

    @media (width < 768px) {
      flex-direction: column;

      img {
        height: 133.5px;
      }
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .titleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .titleWithIcons {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (width < 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .iconContainer {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>
