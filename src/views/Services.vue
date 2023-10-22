<script setup lang="ts">
import ServiceCard from "@/components/ServiceCard.vue";
import {ServiceDescription} from "@/domain/service_description";

const individuals: ServiceDescription[] = [
  {
    title: 'Test-driven development',
    description: 'Learn how to implement this strategy to your every-day work. Improve code coverage, reduce bugs and improve your testing and design skills.',
    amount: 30,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Go',
    description: 'Learn the perks of using one the best known programming languages for distributed systems and cloud applications.',
    amount: 30,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Design patterns',
    description: 'Learn how design patterns impact in the industry and how professionally implement them in your engineering work.',
    amount: 30,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Software architecture',
    description: 'Learn how to design highly scalable systems by analyzing the business cases, designing domain rules and summarizing all the information in diagrams.',
    amount: 30,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Mentorship',
    description: 'Your career growth is important and having someone to discuss about it will make a difference in the long term.',
    amount: 45,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Mentorship - 4-hour pack',
    description: 'Your career growth is important and having someone to discuss about it will make a difference in the long term. This pack gives you access to 1 hour of mentorship per week.',
    amount: 170,
    type: 'pack',
    currency: 'usd',
  },
  {
    title: 'Mentorship - 8-hour pack',
    description: 'Your career growth is important and having someone to discuss about it will make a difference in the long term. This pack gives you access to 2 hours of mentorship per week.',
    amount: 325,
    type: 'pack',
    currency: 'usd',
  },
];
</script>

<template>
  <v-container>
    <h1 class="text-h2 text-primary">Services</h1>
    <h2 class="text-h4">For individuals</h2>
    <v-row class="my-2">
      <v-col xs="12"  md="6" lg="4" xl="3" :key="index" v-for="(item, index) in individuals">
        <ServiceCard
          :descriptor="item"
        ></ServiceCard>
      </v-col>
    </v-row>
    <h2 class="text-h4">For organizations</h2>
  </v-container>
</template>

<style scoped>

</style>
