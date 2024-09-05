<script async setup lang="ts">
  import showdown from 'showdown';
  import {parse as parseYaml} from 'yaml';
  import {getNote} from '../../api/index.ts';

  const props = defineProps<{name: string}>();

  const data = await getNote(props.name);

  const markdownConverter = new showdown.Converter({
    metadata: true,
    ghCompatibleHeaderId: true,
  });
  const htmlContent = markdownConverter.makeHtml(data.markdown);
  // Manual restore `$` characters.
  // See https://github.com/showdownjs/showdown/wiki/extensions#gotchas
  const metadata = parseYaml(
    (markdownConverter.getMetadata(/* raw= */ true) as string).replaceAll(
      '¨D',
      '$'
    )
  );
</script>

<template>
  <div :class="$style.container">
    <h1>{{ metadata.title }}</h1>
    <div :class="$style.dateline">
      <p>By <b>{{ metadata.author }}</b></p>
      <p :class="$style.date">{{ metadata.date }}</p>
    </div>
    <hr>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="htmlContent" />
  </div>
</template>

<style module>
  .container {
    * {
      /* TODO: Fix scrolling CSS instead of relying on this workaround. */
      scroll-margin-top: calc(var(--nav-height) + 1rem);
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

  .dateline {
    display: flex;
    justify-content: space-between;
  }

  .date {
    text-align: end;
  }
</style>
