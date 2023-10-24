<script setup lang="ts">
import ServiceCard from "@/components/ServiceCard.vue";
import {ServiceDescription} from "@/domain/service_description";
import {ref} from "vue";

const individuals: ServiceDescription[] = [
  {
    title: 'Mentorship - 4-hour pack',
    description: 'Supercharge your career with an extended 4-hour mentorship package. In-depth discussions and guidance will provide you with the tools and insights to drive your long-term professional success.',
    amount: 180,
    type: 'month',
    currency: 'usd',
    discount: 5,
  },
  {
    title: 'Mentorship - 8-hour pack',
    description: 'Maximize your career potential with an extensive 8-hour mentorship package. Deep-dive discussions and comprehensive guidance will empower you to achieve significant long-term professional growth and success.',
    amount: 360,
    type: 'month',
    currency: 'usd',
    discount: 10,
  },
  {
    title: 'Test-driven development',
    description: 'Elevate your software development skills with Test-driven development. Discover the power of implementing this strategy in your daily work. Boost code coverage, minimize bugs, and enhance your testing and design skills.',
    amount: 20,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Go',
    description: 'Dive into the world of Go, one of the most renowned programming languages for building robust distributed systems and cloud applications. Unlock the potential of Go\'s simplicity and efficiency in our sessions.',
    amount: 20,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Mentorship',
    description: 'Invest in your career\'s long-term success with personalized mentorship. Guided discussions can be the game-changer you need to accelerate your professional growth and achieve your goals.',
    amount: 45,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Protobuf and gRPC',
    description: 'Join me in exploring the world of gRPC APIs as we follow Google AIPs and collaboratively build production-grade APIs. Unlock the potential of this cutting-edge technology in our sessions.',
    amount: 35,
    type: 'session',
    currency: 'usd',
  },
  {
    title: 'Software design and architecture',
    description: 'Master the art of crafting highly scalable systems. We\'ll explore real-world business cases, refine domain rules, and encapsulate it all in comprehensive diagrams. Elevate your software engineering skills and apply them to your job.',
    amount: 35,
    type: 'session',
    currency: 'usd',
  },
];

const organizations: ServiceDescription[] = [
  {
    title: 'Technical Interview',
    description: 'Let me handle the heavy lifting of interviewing your engineering candidates. I\'ll conduct Computer science and Web interviews and deliver a comprehensive summary, providing valuable insights based on your specific criteria.',
    amount: 50,
    type: 'interview',
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
