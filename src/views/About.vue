<script setup lang="ts">
import photoMay22 from '@/assets/ekumen_may_2022.jpg';
import photoUTN from '@/assets/ekumen_sep_2022.jpg';
import photoNov19 from '@/assets/ekumen_nov_2019.jpg';

type Experience = {
  title: string;
  company: string;
  department: string;
  description?: string;
  color: string;
  startYear: number;
  endYear?: number;
  image?: string;
}
const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer (L6)',
    company: 'Ekumen',
    department: 'Engineering',
    startYear: 2022,
    color: 'primary',
    image: photoMay22,
  },
  {
    title: 'UTN Paraná - Workshop co-organizer',
    company: 'Ekumen',
    department: 'Conferences',
    startYear: 2022,
    endYear: 2022,
    color: 'secondary',
    image: photoUTN,
  },
  {
    title: 'Sub-operation manager',
    company: 'Ekumen',
    department: 'Recruiting',
    startYear: 2022,
    color: 'primary',
  },
  {
    title: 'Semi-Senior Software Engineer (L5)',
    company: 'Ekumen',
    department: 'Engineering',
    startYear: 2021,
    endYear: 2022,
    color: 'secondary',
  },
  {
    title: 'Semi-Senior Software Engineer (L4)',
    company: 'Ekumen',
    department: 'Engineering',
    startYear: 2020,
    endYear: 2021,
    color: 'primary',
  },
  {
    title: 'Junior Software Engineer (L3)',
    company: 'Ekumen',
    department: 'Engineering',
    startYear: 2019,
    endYear: 2020,
    color: 'secondary',
    image: photoNov19,
  },
]
</script>

<template>
  <v-container>
    <h1 class="text-h2 text-primary">About</h1>
    <div>
      <h2 class="text-h4 text-secondary">Experience</h2>
      <v-timeline align="start">
        <v-timeline-item
          v-for="(experience, i) in experiences"
          :key="i"
          :dot-color="experience.color"
          size="small"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 font-weight-bold text-${experience.color}`"
            >{{experience.startYear}} - {{experience.endYear ? experience.endYear : 'Present'}}</div>
          </template>
          <div>
            <h3 :class="`mt-n1 text-h5 font-weight-light mb-4 text-${experience.color}`">
              {{experience.title}}
            </h3>
            <h4 class="mt-n2 text-subtitle-1 font-weight-light mb-3">
              {{experience.department}} @ {{experience.company}}
            </h4>
            <v-img max-height="300" width="500" cover :src="experience.image"></v-img>
            <div v-if="experience.description">
              {{experience.description}}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<style scoped>

</style>
