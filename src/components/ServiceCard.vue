<script setup lang="ts">
  import {ServiceDescription} from "@/domain/service_description";

  interface Props {
    descriptor: ServiceDescription;
  }

  defineProps<Props>()
</script>

<template>
  <v-card class="fill-height card-outter">
    <v-card-title class="text-wrap text-center text-secondary">
      {{ descriptor.title }}
    </v-card-title>

    <v-card-subtitle class="text-body-1 text-center text-primary font-weight-bold">
      {{ descriptor.amount }} {{ descriptor.currency.toUpperCase() }} / {{ descriptor.type }}
    </v-card-subtitle>

    <v-card-text class="text-body-2">
      {{ descriptor.description }}
    </v-card-text>

    <v-card-actions class="card-actions align-center justify-center">
      <v-btn color="primary" size="large" variant="flat" rounded="s" to="/contact">Schedule</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
