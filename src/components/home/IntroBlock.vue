<script setup lang="ts">
  import EmailIcon from '../icons/EmailIcon.vue';
  import GitHubIcon from '../icons/GitHubIcon.vue';
  import KoFiIcon from '../icons/HeartBoxIcon.vue';
  import LinkedInIcon from '../icons/LinkedInIcon.vue';
  import LegendItem from './LegendItem.vue';
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
        free to get in touch!
      </p>
    </div>
    <div :class="$style.contactsContainer">
      <span :class="$style.contactsHeader">Daytime Service</span>
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
            label="ko-fi.com/kofi"
            link="https://ko-fi.com/kofi"
            color="var(--color-highlight-4)"
          >
            <KoFiIcon />
          </LegendItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<style module>
  .container {
    display: flex;
    justify-content: space-between;
    column-gap: 3rem;
    padding: 5rem 0;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .contactsContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);
  }

  .contactsHeader {
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
