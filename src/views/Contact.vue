<script setup lang="ts">
  import {Ref, ref} from "vue";

  const firstName: Ref<string> = ref('');
  const lastName: Ref<string> = ref('');
  const email: Ref<string> = ref('');
  const message: Ref<string> = ref('');
</script>

<template>
  <v-container>
    <h1 class="text-h2 text-primary">Contact</h1>
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="text-h5">Send me a message!</h2>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="firstName"
                  :counter="32"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="lastName"
                  :counter="32"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  clearable
                  clear-icon="mdi-close-circle"
                  counter
                  auto-grow
                  label="Message"
                  maxlength="480"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6"><v-btn color="primary" type="submit" block class="mt-2">Send</v-btn></v-col>
                  <v-col cols="6"><v-btn type="reset" block class="mt-2">Reset</v-btn></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="text-h5">Social Media</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
