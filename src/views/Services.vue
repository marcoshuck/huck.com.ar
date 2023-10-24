<script setup lang="ts">
import ServiceCard from "@/components/ServiceCard.vue";
import {ServiceDescription} from "@/domain/service_description";
import {ref} from "vue";

const individuals: ServiceDescription[] = [
  {
    title: 'Mentorship - 4-hour pack',
    description: 'Supercharge your career with an extended 4-hour mentorship package.',
    amount: 180,
    type: 'month',
    currency: 'usd',
    discount: 5,
  },
  {
    title: 'Mentorship - 8-hour pack',
    description: 'Maximize your career potential with an extensive 8-hour mentorship package.',
    amount: 360,
    type: 'month',
    currency: 'usd',
    discount: 10,
  },
  {
    title: 'Test-driven development',
    description: 'Discover the power of implementing this strategy in your daily work. Boost code coverage, minimize bugs, and enhance your testing and design skills.',
    amount: 20,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Go',
    description: 'Dive into one of the most renowned programming languages for building robust distributed systems and cloud applications.',
    amount: 20,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Mentorship',
    description: 'Guided discussions can be the game-changer you need to accelerate your professional growth and achieve your goals.',
    amount: 45,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Protobuf and gRPC',
    description: 'Join me in exploring the world of gRPC APIs as we follow Google AIPs and collaboratively build production-grade APIs.',
    amount: 35,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Docker and Kubernetes',
    description: 'Explore the synergy of containers and orchestration for seamless application management.',
    amount: 25,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Software design and architecture',
    description: 'Elevate your software engineering skills and apply them to your job.',
    amount: 35,
    type: 'session',
    currency: 'usd',
  },
];

const organizations: ServiceDescription[] = [
  {
    title: 'Technical Interview',
    description: 'By conducting Computer science Web and System design interviews, I can provide valuable insights based on your specific criteria.',
    amount: 100,
    type: 'interview',
    currency: 'usd',
  },
  {
    title: 'Third-party integrations',
    description: 'Simplify your operations by entrusting the task of creating seamless integrations with different services.',
    amount: 50,
    type: 'hour',
    currency: 'usd',
  },
  {
    title: 'Software engineering',
    description: 'Allow me to handle the development of diverse systems for your company, including automations, APIs, and more.',
    amount: 50,
    type: 'hour',
    currency: 'usd',
  },
];

const tab = ref('');
</script>

<template>
  <v-container>
    <h1 class="text-h2 text-primary">Services</h1>
    <v-tabs v-model="tab" align-tabs="center" fixed-tabs>
      <v-tab value="individuals">Individuals</v-tab>
      <v-tab value="organizations">Organizations</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="individuals">
        <v-container>
          <v-row class="my-2">
            <v-col xs="12" md="6" lg="4" xl="3" cols="6" :key="index" v-for="(item, index) in individuals">
              <ServiceCard
                :descriptor="item"
              ></ServiceCard>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item value="organizations">
        <v-container>
          <v-row class="my-2">
            <v-col xs="12" md="6" lg="4" xl="3" cols="6" :key="index" v-for="(item, index) in organizations">
              <ServiceCard
                :descriptor="item"
              ></ServiceCard>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<style scoped>

</style>
