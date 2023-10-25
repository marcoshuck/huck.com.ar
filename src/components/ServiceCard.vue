<script setup lang="ts">
  import {ServiceDescription} from "@/domain/service_description";

  interface Props {
    descriptor: ServiceDescription;
  }

  const props = defineProps<Props>()

  function price() {
    return `${ props.descriptor.amount } ${ props.descriptor.currency.toUpperCase() }`
  }
  function unitPrice() {
    return `${ price() } / ${ props.descriptor.type }`
  }

  function discountToPercentage(): number {
    return props.descriptor.discount! / 100
  }

  function unitPriceWithDiscount() {
    const amount = Math.trunc(props.descriptor.amount / (1+discountToPercentage()));
    return `${ amount } ${ props.descriptor.currency.toUpperCase() } / ${ props.descriptor.type }`
  }
</script>

<template>
  <v-card elevation="2" class="fill-height card-outter">
    <v-card-title class="text-wrap text-center text-secondary">
      {{ descriptor.title }}
    </v-card-title>

    <v-card-subtitle class="text-body-1 text-center text-primary font-weight-bold">
      <span v-if="!descriptor.discount">{{unitPrice()}}</span>
      <span v-if="descriptor.discount">
        <s class="text-secondary">{{ price() }}</s>

        {{ unitPriceWithDiscount() }}
        <v-chip class="text-bold" elevated="1" color="success" size="x-small" variant="flat">{{descriptor.discount}}% OFF</v-chip>
      </span>
    </v-card-subtitle>

    <v-card-text class="text-body-2">
      {{ descriptor.description }}
    </v-card-text>

    <v-card-actions class="card-actions align-center justify-center">
      <v-btn color="primary" size="large" variant="flat" rounded="s" to="/contact">Contact</v-btn>
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
