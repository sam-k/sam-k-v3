<script setup lang="ts">
  import RandomBackgroundLine from '../components/common/background/RandomBackgroundLine.vue';
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.textContainer">
      <h1>ATTN: Page Not Found</h1>
      <p>Trains are not stopping at the page you’re looking for.</p>
    </div>
    <RandomBackgroundLine v-for="i in 8" :key="i" />
  </div>
</template>

<style module>
  .container {
    display: flex;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin: auto;
    padding: 2rem;
    text-align: center;
    background-color: var(--color-background);
    box-shadow: 0px 0px 3rem 5rem var(--color-background);
  }

  .backgroundLine{
    z-index: -1;
    position: absolute;
    bottom: 0;

    --line-width: 12px;
    --line-gap: 0;
    --gutter-center-x-offset: 0;
    --gutter-innermost-line-x-offset: 0;
  }
</style>
