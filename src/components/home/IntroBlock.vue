<script setup lang="ts">
  import ContactsBox from './ContactsBox.vue';
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.textContainer">
      <h1>Hey, I’m Sam</h1>
      <p>
        I’m a full-stack software engineer who makes free, open-source projects
        about stuff I like.
      </p>
      <p>
        If some of the work I’ve done or projects I’ve built interests you, feel
        free to get in touch.
      </p>
    </div>
    <ContactsBox />
  </div>
</template>

<style module>
  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 3rem;
    padding: 2.5rem 0;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>
