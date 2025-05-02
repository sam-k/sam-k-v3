<script setup lang="ts">
  import {getIntro} from '../../api/index.ts';
  import ContactsBox from './ContactsBox.vue';

  const introData = await getIntro();
</script>

<template>
  <div :class="$style.introContainer">
    <div :class="$style.introTextContainer">
      <h1>{{ introData.title }}</h1>
      <p v-for="(line, index) in introData.lines" :key="index">{{ line }}</p>
    </div>
    <ContactsBox />
  </div>
</template>

<style module>
  .introContainer {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    padding: 2.5rem 0;

    @media (width < 1024px) {
      flex-direction: column;
      gap: 3rem;
      padding: 0;
    }
  }

  .introTextContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
