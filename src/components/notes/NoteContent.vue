<script async setup lang="ts">
  import showdown from 'showdown';

  const props = defineProps<{name: string}>();

  const data = await (await fetch(`/api/posts/${props.name}`)).json();

  const markdownConverter = new showdown.Converter({
    metadata: true,
    ghCompatibleHeaderId: true,
  });
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div :class="$style.container" v-html="markdownConverter.makeHtml(data)" />
</template>

<style module>
  .container {
    * {
      scroll-margin-top: var(--nav-height);
    }

    h1 {
      margin: 1rem 0;
      font-size: 3rem;
    }

    h2 {
      margin: 2rem 0 1rem 0;
      font-size: 2rem;
    }

    h3 {
      margin: 1rem 0;
      font-size: 1.5rem;
    }

    p {
      margin: 1rem 0;
      font-size: 1.1rem;
    }

    ul {
      margin: 1rem 0;
      padding: revert;
      list-style-type: revert;
    }

    li {
      margin: 1rem 0;
      font-size: 1.1rem;
    }

    img {
      max-width: 100%;
    }

    figure {
      margin: 2rem 0;
    }

    figcaption {
      margin: 0.5rem 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        padding: 0.5rem;
        border: 1px solid var(--color-border);
      }

      th {
        background-color: var(--color-background-mute);
      }
    }
  }
</style>
