<script lang="ts" setup>
import {Review} from "@/domain/review";
import ReviewCard from "@/components/ReviewCard.vue";

const reviews: Review[] = [
  {
    name: 'Gabriel',
    country: 'Singapore',
    flag: '🇸🇬',
    stars: 5,
    text: 'Very good teacher! Lesson was well structured and explanations were simple enough to understand as a beginner.',
  },
  {
    name: 'Anonymous',
    country: 'Azerbaijan',
    flag: '🇦🇿',
    stars: 5,
    text: 'The seller provided very nice training, customized for my Golang needs. Highly recommended seller.',
  },
  {
    name: 'Martin',
    country: 'Australia',
    flag: '🇦🇺',
    stars: 5,
    text: 'Helped a lot. Very knowledgeable and explained concepts and code very clearly.',
  },
  {
    name: 'Arun',
    country: 'India',
    flag: '🇮🇳',
    stars: 5,
    text: 'Marcos is a great mentor. He was particular about making me understand how the system works and not just knowing the syntax. A very friendly person who is consistent and well prepared for every class. Planning to learn long term from him.',
  },
  {
    name: 'Antonella',
    country: 'Argentina',
    flag: '🇦🇷',
    stars: 5,
    text: 'Great teacher, very good and clear in explaining the subject\'s concepts. I highly recommend him!',
  }
]
</script>

<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="justify-center">
        <h1 class="text-h1 text-center my-2 text-primary">Marcos Huck</h1>
        <h2 class="text-h2 text-center my-2 text-secondary">Software Engineer & Mentor</h2>
        <p class="text-body-1 my-2">
          My missions is to empower businesses with scalable, innovative software solutions that transform ideas and
          drive growth. I also enjoy mentoring software engineers to master advanced technologies and build fulfilling
          careers.
        </p>


        <v-row align="center" justify="center" class="my-3">
          <v-btn to="/contact" color="primary" size="x-large" class="mx-2">Get in touch</v-btn>
          <v-btn to="/services" color="secondary" size="x-large" class="mx-2" variant="outlined">Services</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="my-10"></v-divider>
    <v-row align="stretch" justify="center">
      <v-col cols="12"><h2 class="text-h4 text-secondary">Reviews</h2></v-col>
      <v-col cols="12" sm="4" v-for="(review, index) in reviews" :key="index">
        <ReviewCard :review="review"></ReviewCard>
      </v-col>
    </v-row>
  </v-container>
</template>


