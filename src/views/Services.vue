<script setup lang="ts">

import CourseCard from "@/components/CourseCard.vue";
</script>

<template>
  <v-container>
    <h1 class="text-h1 text-primary">Services</h1>
    <h2 class="text-h2">For individuals</h2>
    <v-row class="my-2">
      <v-col cols="3">
        <CourseCard
          title="Test-driven development (TDD)"
          :price="30"
          description="Learn and implement Test-driven development in your every day job, simplify your workflow and make great impact in your technical skills by designing code that actually works and solves the problem."
          currency="usd"
        ></CourseCard>
      </v-col>
      <v-col cols="3">
        <CourseCard
          title="The Go programming language"
          :price="30"
          description="Learn the perks of using one the best well-known programming languages for distributed systems and cloud applications."
          currency="usd"
        ></CourseCard>
      </v-col>
      <v-col cols="3">
        <CourseCard
          title="Software architecture"
          :price="50"
          description="Learn how to design highly scalable systems by analyzing the business, designing domain rules and summarizing all the information in diagrams."
          currency="usd"
        ></CourseCard>
      </v-col>
      <v-col cols="3">
        <CourseCard
          title="Mentorship"
          :price="30"
          description="Learn and implement Test-driven development in your every day job, simplify your workflow and make great impact in your technical skills by designing code that actually works and solves the problem."
          currency="usd"
        ></CourseCard>
      </v-col>
    </v-row>
    <h2 class="text-h2">For businesses</h2>
  </v-container>
</template>

<style scoped>

</style>
