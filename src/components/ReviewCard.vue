<script setup lang="ts">
import {Review} from "@/domain/review";

interface Props {
  review: Review;
}

defineProps<Props>()
</script>

<template>
  <v-card class="fill-height" elevation="3">
    <v-card-item>
      <v-card-title>{{review.name}}</v-card-title>
      <v-card-subtitle>{{review.country}} {{review.flag}}</v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="review.stars"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>
      </v-row>
      <div class="my-4">{{ review.text }}</div>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
