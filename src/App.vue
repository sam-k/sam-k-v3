<script setup lang="ts">
  import {RouterLink, RouterView} from 'vue-router';
  import WeatherNightIcon from './components/icons/WeatherNightIcon.vue';
  import WeatherSunnyIcon from './components/icons/WeatherSunnyIcon.vue';
  import NavHeaderItem from './components/nav/NavHeaderItem.vue';
  import store from './store.ts';

  store.applyDarkMode();
</script>

<template class="">
  <header>
    <div :class="[$style.container, $style.navContainer]">
      <RouterLink to="/" :class="[$style.home, 'noHover']">
        Sam Kim
      </RouterLink>
      <nav>
        <RouterLink to="/projects" aria-label="Projects" class="noHover">
          <NavHeaderItem name="Projects" color="var(--color-accent-1)" />
        </RouterLink>
        <RouterLink to="/notes" aria-label="Notes" class="noHover">
          <NavHeaderItem name="Notes" color="var(--color-accent-2)" />
        </RouterLink>
        <!-- TODO: Fetch from data. -->
        <a href="link 1" aria-label="Resumé" class="noHover">
          <NavHeaderItem name="Resume" color="var(--color-accent-3)" />
        </a>
        <!-- TODO: Implement dark mode toggle. -->
        <a
          :aria-label="store.isDarkMode ? 'Dark Mode' : 'Light Mode'"
          :class="[$style.darkModeButton, 'noHover']"
          tabindex="0"
          @click="store.toggleDarkMode"
        >
          <NavHeaderItem name="Mode" color="var(--color-text)">
            <WeatherNightIcon v-if="store.isDarkMode" />
            <WeatherSunnyIcon v-if="!store.isDarkMode" />
          </NavHeaderItem>
        </a>
      </nav>
    </div>
  </header>
  <RouterView :class="[$style.container, $style.viewContainer]" />
  <footer>
    <div :class="[$style.container, $style.footerContainer]">
      <span>Map not to scale</span>
      <span>•</span>
      <span>© 2024 Sam Kim</span>
      <span>•</span>
      <a href="https://github.com/sam-k/sam-k-v3">Under the hood ↗</a>
    </div>
  </footer>
</template>

<style module>
  header {
    z-index: var(--nav-z-index);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-background);
    line-height: 1;
  }

  .container {
    max-width: var(--max-width);
  }

  .navContainer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    --nav-underline-thickness: 0.375rem;
  }

  .home {
    font-size: 1.5rem;
    font-weight: 600;

    &:hover{
      text-decoration:
        underline currentcolor solid var(--nav-underline-thickness);
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
    margin: 0 auto;
    padding: calc(var(--nav-height) + 5rem) 0 var(--nav-height) 0;
  }

  footer {
    z-index: var(--nav-z-index);
    position: relative;
    width: 100%;
    height: var(--nav-height);
    border-top: 1px solid var(--color-border);
    background-color: var(--color-background);
  }

  .footerContainer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    margin: 0 auto;
  }
</style>
