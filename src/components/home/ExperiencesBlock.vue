<script setup lang="ts">
  import SectionLabel from '../common/background/SectionLabel.vue';
  import {MOCK_EXPERIENCES} from '../common/mockData.ts';
  import ExperienceItem from '../experiences/ExperienceItem.vue';
</script>

<template>
  <div :class="$style.container">
    <SectionLabel label="Experience" :index="2" font-size="2rem">
      <h2>Experiences</h2>
    </SectionLabel>
    <ul :class="$style.experiences">
      <ExperienceItem
        v-for="experience in MOCK_EXPERIENCES"
        :key="experience.org.name"
        :role="experience.role"
        :org="experience.org"
        :description="experience.description"
        :date-range="experience.dateRange"
        :tags="experience.tags"
      />
    </ul>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .experiences {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>
