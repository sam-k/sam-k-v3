<script setup lang="ts">
  import ExperiencesBlock from '../components/home/ExperiencesBlock.vue';
  import IntroBlock from '../components/home/IntroBlock.vue';
  import NotesBlock from '../components/home/NotesBlock.vue';
  import ProjectsBlock from '../components/home/ProjectsBlock.vue';
</script>

<template>
  <main>
    <IntroBlock />
    <ProjectsBlock />
    <NotesBlock />
    <ExperiencesBlock />
  </main>
</template>

<style module>
  main {
    display: flex;
    flex-direction: column;
    row-gap: 5rem;

    --bg-line-width: 12px;
    --bg-line-gap: calc(var(--bg-line-width) / 2);
    --bg-stop-border-width: var(--bg-line-gap);

    --bg-rightmost-line-left-pos: min(
      calc(
        (100vw - var(--max-width)) / -4 + var(--bg-line-width) / 2 +
          var(--bg-line-gap)
      ),
      -3 * var(--bg-line-width) - 2 * var(--bg-line-gap)
    );

    h2 {
      position: relative;
    }

    /*
     * Lines on background.
     *
     * `left` should be set on each <h2> based on line number.
     */
    h2::before {
      position: absolute;
      bottom: calc(1em / 2);
      width: 0;
      height: 9999%;
      content: '';
      border-left-width: var(--bg-line-width);
      border-left-style: solid;
    }

    /*
     * Stops on background.
     *
     * `width` should be set on each <h2> based on line number.
     */
    h2::after {
      z-index: calc(var(--nav-z-index) - 1);
      position: absolute;

      left: calc(
        var(--bg-rightmost-line-left-pos) - 2 *
          (var(--bg-line-width) + var(--bg-line-gap)) -
          var(--bg-stop-border-width)
      );
      bottom: calc(
        (1em - var(--bg-line-width)) / 2 - var(--bg-stop-border-width)
      );
      height: var(--bg-line-width);
      content: '';
      background-color: var(--color-background);
      border: var(--bg-stop-border-width) solid var(--color-text);
      border-radius: var(--rounded-rectangle-border-radius);
    }
  }
</style>
