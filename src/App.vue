<script setup lang="ts">
  import {RouterLink, RouterView} from 'vue-router';
  import BusIcon from './components/icons/BusIcon.vue';
  import NavHeaderItem from './components/nav/NavHeaderItem.vue';
</script>

<template>
  <header>
    <div :class="[$style.container, $style.navContainer]">
      <RouterLink
        to="/"
        :class="[$style.home, 'noHover']"
      >Sam Kim</RouterLink>
      <nav>
        <RouterLink to="/projects" class="noHover">
          <NavHeaderItem name="Projects" color="var(--color-accent-1)" />
        </RouterLink>
        <RouterLink to="/notes" class="noHover">
          <NavHeaderItem name="Notes" color="var(--color-accent-2)" />
        </RouterLink>
        <RouterLink to="/resume" class="noHover">
          <NavHeaderItem name="Resume" color="var(--color-accent-3)" />
        </RouterLink>
        <a :class="[$style.darkModeButton, 'noHover']">
          <NavHeaderItem name="Mode" color="var(--color-text)">
            <BusIcon />
          </NavHeaderItem>
        </a>
      </nav>
    </div>
  </header>
  <RouterView :class="[$style.container, $style.viewContainer]" />
</template>

<style module>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-background);
    line-height: 1;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .navContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
  }

  .home {
    font-size: 1.5rem;
    font-weight: 600;

    &:hover{
      text-decoration: underline currentcolor solid 0.375rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    a {
      font-weight: 500;
    }

    .darkModeButton {
      cursor: pointer;
    }
  }

  .viewContainer {
    margin-top: 5.6875rem;
  }
</style>
