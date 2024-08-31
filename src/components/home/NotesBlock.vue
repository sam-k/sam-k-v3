<script setup lang="ts">
  import NoteItem from '../notes/NoteItem.vue';

  // TODO: Fetch from data.
  const notes: Array<{
    title: string;
    date: Date;
    link?: string;
    tags?: Array<{
      label: string;
      link?: string;
    }>;
  }> = [{
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: new Date('2024-01-01'),
    link: 'link 1',
    tags: [{
      label: 'tag 1',
      link: 'link 1',
    }],
  }, {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: new Date('2023-01-01'),
    link: 'link 2',
    tags: [{
      label: 'tag 1',
      link: 'link 1',
    }, {
      label: 'tag 2',
    }],
  }];
</script>

<template>
  <div :class="$style.container">
    <h2>Notes</h2>
    <ul :class="$style.notes">
      <NoteItem
        v-for="note in notes"
        :key="note.title"
        :title="note.title"
        :date="note.date"
        :link="note.link"
        :tags="note.tags"
      />
    </ul>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    /* Line on background. */
    h2::before {
      left: calc(
        var(--bg-rightmost-line-left-pos) -
          (var(--bg-line-width) + var(--bg-line-gap))
      );
      border-color: var(--color-accent-2);
    }

    /* Stop on background. */
    h2::after {
      width: calc(2 * var(--bg-line-width) + var(--bg-line-gap));
    }
  }

  .notes {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>
