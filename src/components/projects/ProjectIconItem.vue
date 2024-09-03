<script setup lang="ts">
  import type {Component} from 'vue';
  import type {LinkInfo} from '../common/utils.ts';
  import GitHubIcon from '../icons/GitHubIcon.vue';
  import PackageVariantClosedIcon from '../icons/PackageVariantClosedIcon.vue';
  import type {LinkType} from './utils.ts';

  const props = defineProps<LinkInfo & {kind?: LinkType}>();

  let iconComponent: Component | null = null;
  switch (props.kind) {
    case 'deploy':
      iconComponent = PackageVariantClosedIcon;
      break;
    case 'github':
      iconComponent = GitHubIcon;
      break;
  }
</script>

<template>
  <li>
    <a
      :class="[$style.iconContainer, 'noMargin', 'noPadding', 'noUnderline']"
      :href="link"
    >
      <component :is="iconComponent" />
      <span>{{ display }}</span>
    </a>
  </li>
</template>

<style lang="css" module>
  .iconContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;
    height: 1.6rem;
    padding: 0 6px;
    border: 1px solid var(--color-border);
    border-radius: var(--rounded-rectangle-border-radius);
    background-color: var(--color-background-soft);
    text-decoration: none;
    text-wrap: nowrap;

    svg {
      width: 1.3rem;
      height: 1.3rem;
      fill: var(--color-text);
    }
  }
</style>
