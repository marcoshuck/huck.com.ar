<template>
  <v-app-bar>
    <v-app-bar-title class="text-primary">
      HUCK
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn-group variant="text">
        <v-btn to="/" exact>Home</v-btn>
        <v-btn to="/services">Services</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/contact">Contact</v-btn>
      </v-btn-group>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
