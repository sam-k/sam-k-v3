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
        <!-- TODO: Fetch from data. -->
        <LegendItem
          label="email@email.com"
          link="mailto:email@email.com"
          color="var(--color-highlight-1)"
        >
          <EmailIcon />
        </LegendItem>
      </li>
      <li>
        <!-- TODO: Fetch from data. -->
        <LegendItem
          label="linkedin.com/in/linkedin"
          link="https://www.linkedin.com/in/linkedin"
          color="var(--color-highlight-2)"
        >
          <LinkedInIcon />
        </LegendItem>
      </li>
      <li>
        <!-- TODO: Fetch from data. -->
        <LegendItem
          label="github.com/github"
          link="https://github.com/github"
          color="var(--color-highlight-3)"
        >
          <GitHubIcon />
        </LegendItem>
      </li>
      <li>
        <!-- TODO: Fetch from data. -->
        <LegendItem
          label="ko-fi.com/ko-fi"
          link="https://ko-fi.com/ko-fi"
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
