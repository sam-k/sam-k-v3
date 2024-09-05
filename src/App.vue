<script setup lang="ts">
  import {RouterLink, RouterView} from 'vue-router';
  import WeatherNightIcon from './components/icons/WeatherNightIcon.vue';
  import WeatherSunnyIcon from './components/icons/WeatherSunnyIcon.vue';
  import NavHeaderItem from './components/nav/NavHeaderItem.vue';
  import store from './store.ts';
</script>

<template>
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
        <a
          aria-label="Resumé"
          class="noHover"
          :href="store.personalData.resume?.link"
        >
          <NavHeaderItem name="Resume" color="var(--color-accent-3)" />
        </a>
        <button
          aria-label="Dark Mode Toggle"
          :class="[$style.darkModeButton, 'noHover']"
          type="button"
          tabindex="0"
          @click="store.toggleDarkMode"
        >
          <NavHeaderItem
            name="Mode"
            color="var(--color-text)"
            aria-hidden="true"
          >
            <WeatherNightIcon v-if="store.isDarkMode" />
            <WeatherSunnyIcon v-if="!store.isDarkMode" />
          </NavHeaderItem>
        </button>
      </nav>
    </div>
  </header>
  <RouterView :class="[$style.container, $style.viewContainer]" />
  <footer>
    <div :class="[$style.container, $style.footerContainer]">
      <span :class="$style.footerItem">Map not to scale</span>
      <span>•</span>
      <span :class="$style.footerItem">© 2024 Sam Kim</span>
      <span>•</span>
      <a
        href="https://github.com/sam-k/sam-k-v3"
        aria-label="Under the hood"
        :class="$style.footerItem"
      >
        Under the hood ↗
      </a>
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
    border-bottom: var(--header-footer-border-width) solid var(--color-border);
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

    @media (width < 768px) {
      max-width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    @media (width < 568px) {
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
    }
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
    gap: 1rem;

    a,
    .darkModeButton {
      font-weight: 500;
    }

    @media (width < 360px) {
      gap: unset;
    }
  }

  .viewContainer {
    --view-container-top-padding: calc(var(--nav-height) + 6rem);
    --view-container-bottom-padding: var(--footer-height);

    min-height: calc(
      100vh - var(--nav-height) - var(--view-container-top-padding) -
        var(--footer-height) - 2 * var(--header-footer-border-width)
    );
    margin: 0 auto;
    padding: var(--view-container-top-padding) 0 6rem 0;

    @media (width < 666px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  footer {
    z-index: var(--nav-z-index);
    position: relative;
    bottom: 0;
    width: 100%;
    height: var(--footer-height);
    border-top: var(--header-footer-border-width) solid var(--color-border);
    background-color: var(--color-background);
  }

  .footerContainer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footerItem {
    text-align: center;
  }
</style>
