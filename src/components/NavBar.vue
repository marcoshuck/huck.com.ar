<script setup lang="ts">
const links = {
  '/': 'Home',
  '/services': 'Services',
  '/about': 'About',
  '/contact': 'Contact',
}
</script>

<template>
  <v-btn-group variant="plain">
    <v-btn :ripple="false" v-for="(value, key) in links" :to="key" :exact="key === '/'">{{value}}</v-btn>
  </v-btn-group>
</template>

<style scoped>

</style>
