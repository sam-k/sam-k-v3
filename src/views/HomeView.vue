<script setup lang="ts">
  import SectionLabel from '../components/common/background/SectionLabel.vue';
  import ExperiencesContainer from '../components/experiences/ExperiencesContainer.vue';
  import IntroContainer from '../components/home/IntroContainer.vue';
  import NotesContainer from '../components/notes/NotesContainer.vue';
  import ProjectsContainer from '../components/projects/ProjectsContainer.vue';
</script>

<template>
  <main>
    <Suspense>
      <IntroContainer />
    </Suspense>
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
        <h2>Experience</h2>
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

  .blockContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
