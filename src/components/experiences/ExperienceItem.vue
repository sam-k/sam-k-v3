<script setup lang="ts">
  import showdown from 'showdown';
  import DotDelimiter from '../common/DotDelimiter.vue';
  import TagsContainer from '../common/TagsContainer.vue';
  import type {LinkInfo} from '../common/utils.ts';

  const props = defineProps<{
    experience: {
      role?: string;
      org?: LinkInfo;
      description?: string;
      date?: {
        start?: string;
        end?: string;
      };
      tags?: LinkInfo[];
    };
  }>();

  const startYear = props.experience.date?.start
    ? new Date(props.experience.date?.start).getUTCFullYear()
    : '';
  const endYear = props.experience.date?.end
    ? new Date(props.experience.date.end).getUTCFullYear()
    : 'Present';

  const markdownConverter = new showdown.Converter();
</script>

<template>
  <li :class="$style.container">
    <div :class="$style.headerContainer">
      <h3 :class="$style.titleContainer" aria-hidden="true">
        <span>{{ experience.role }}</span>
        <DotDelimiter />
        <a :href="experience.org?.link">{{ experience.org?.display }}</a>
      </h3>
      <h3 class="sr-only">{{ experience.role }} at</h3>
      <a class="sr-only" :href="experience.org?.link">
        {{ experience.org?.display }}
      </a>
      <span v-if="startYear === endYear" :class="$style.date">
        {{ startYear }}
      </span>
      <span v-else :class="$style.date">{{ startYear }} – {{ endYear }}</span>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="markdownConverter.makeHtml(experience.description ?? '')" />
    <TagsContainer :tags="experience.tags" />
  </li>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .titleContainer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.25em;
  }

  .date {
    text-align: end;
    text-wrap: nowrap;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      background-color: var(--color-background-mute);
      text-decoration: none;
      text-wrap: nowrap;
    }
  }
</style>
