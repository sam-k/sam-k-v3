<script setup lang="ts">
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
    tags?: Array<{
      label: string;
      link?: string;
    }>;
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
      <span :class="$style.description">{{ description }}</span>
      <ul :class="$style.tags">
        <template v-for="tag in tags" :key="tag.label">
          <li>
            <a class="noMargin noUnderline" :href="tag.link">{{ tag.label }}</a>
          </li>
        </template>
      </ul>
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

  .description {
    font-size: 1.2rem;
  }

  .tags {
    display: flex;
    column-gap: 0.5rem;

    a {
      background-color: var(--color-background-mute);
      text-decoration: none;
      text-wrap: nowrap;
    }
  }
</style>
