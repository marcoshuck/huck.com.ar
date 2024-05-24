<script setup lang="ts">

</script>

<template>
  <v-footer
    class="bg-grey-darken-4 text-center d-flex flex-column"
  >
    <v-btn-group color="white" variant="plain">
      <v-btn size="x-large" href="https://www.linkedin.com/in/marcoshuck">
        <v-icon icon="mdi-linkedin" size="x-large"></v-icon>
      </v-btn>
      <v-btn size="x-large" href="https://github.com/marcoshuck">
        <v-icon icon="mdi-github" size="x-large"></v-icon>
      </v-btn>
      <v-btn size="x-large" href="https://gitlab.com/marcoshuck">
        <v-icon icon="mdi-gitlab" size="x-large"></v-icon>
      </v-btn>
    </v-btn-group>

    <v-divider></v-divider>

    <div class="pt-2">Engineering is solving people's problems. I love helping people achieve their goals and dreams with technology.</div>

    <div>
      {{ new Date().getFullYear() }} — <strong>Marcos Huck</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>
