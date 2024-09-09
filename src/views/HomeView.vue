<script setup lang="ts">
  import SectionLabel from '../components/common/background/SectionLabel.vue';
  import ExperiencesContainer from '../components/experiences/ExperiencesContainer.vue';
  import ContactsBox from '../components/home/ContactsBox.vue';
  import NotesContainer from '../components/notes/NotesContainer.vue';
  import ProjectsContainer from '../components/projects/ProjectsContainer.vue';
</script>

<template>
  <main>
    <div :class="$style.introContainer">
      <div :class="$style.introTextContainer">
        <h1>Hey, I’m Sam</h1>
        <p>
          I’m a full-stack software engineer who makes free, open-source
          projects about stuff I like.
        </p>
        <p>
          If some of the work I’ve done or projects I’ve built interests you,
          feel free to get in touch.
        </p>
      </div>
      <ContactsBox />
    </div>
    <div :class="$style.blockContainer">
      <SectionLabel label="Projects" :index="0" font-size="2rem">
        <h2>Projects</h2>
      </SectionLabel>
      <Suspense>
        <ProjectsContainer :featured="true" />
      </Suspense>
    </div>
    <div :class="$style.blockContainer">
      <SectionLabel label="Notes" :index="1" font-size="2rem">
        <h2>Notes</h2>
      </SectionLabel>
      <Suspense>
        <NotesContainer :featured="true" />
      </Suspense>
    </div>
    <div :class="$style.blockContainer">
      <SectionLabel label="Experience" :index="2" font-size="2rem">
        <h2>Experiences</h2>
      </SectionLabel>
      <Suspense>
        <ExperiencesContainer />
      </Suspense>
    </div>
  </main>
</template>

<style module>
  main {
    display: flex;
    flex-direction: column;
    gap: var(--separator-height);
  }

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

  .blockContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
