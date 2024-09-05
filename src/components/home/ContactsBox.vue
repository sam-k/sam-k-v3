<script setup lang="ts">
  import EmailIcon from '../icons/EmailIcon.vue';
  import GitHubIcon from '../icons/GitHubIcon.vue';
  import HeartBoxIcon from '../icons/HeartBoxIcon.vue';
  import LinkedInIcon from '../icons/LinkedInIcon.vue';
  import LegendItem from '../common/LegendItem.vue';
  import store from '../../store.ts';
</script>

<template>
  <div :class="$style.container">
    <span :class="$style.header">
      {{ store.isDarkMode ? 'Evening Service': 'Daytime Service' }}
    </span>
    <ul :class="$style.contacts">
      <li>
        <LegendItem
          :label="store.personalData.email?.display"
          :link="store.personalData.email?.link"
          color="var(--color-highlight-1)"
        >
          <EmailIcon />
        </LegendItem>
      </li>
      <li>
        <LegendItem
          :label="store.personalData.linkedin?.display"
          :link="store.personalData.linkedin?.link"
          color="var(--color-highlight-2)"
        >
          <LinkedInIcon />
        </LegendItem>
      </li>
      <li>
        <LegendItem
          :label="store.personalData.github?.display"
          :link="store.personalData.github?.link"
          color="var(--color-highlight-3)"
        >
          <GitHubIcon />
        </LegendItem>
      </li>
      <li>
        <LegendItem
          :label="store.personalData['ko-fi']?.display"
          :link="store.personalData['ko-fi']?.link"
          color="var(--color-highlight-4)"
        >
          <HeartBoxIcon />
        </LegendItem>
      </li>
    </ul>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);

    @media (width < 1024px) {
      margin: 0 auto;
    }
  }

  .header {
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-background-soft);
    font-weight: 500;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1rem;

    li + li {
      margin-top: 0.5rem;
    }
  }
</style>
