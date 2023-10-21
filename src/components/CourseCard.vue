<script setup lang="ts">
  interface Props {
    title: string;
    description: string;
    price: number;
    currency: string;
  }

  defineProps<Props>()
</script>

<template>
  <v-card>
    <v-card-title class="text-wrap text-center text-secondary">
      {{title}}
    </v-card-title>
    <v-card-text class="text-body-1">
      <p class="my-1">{{description}}</p>
      <p class="my-2 text-center text-secondary font-weight-bold">{{price}} {{currency.toUpperCase()}} / session</p>
    </v-card-text>
    <v-card-actions class="align-center justify-center">
      <v-btn color="primary" size="large" variant="flat" rounded="xs">Schedule</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
