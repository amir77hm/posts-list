<template>
  <v-app>
    <Navbar />
    <v-container
      ><v-main>
        <router-view /> </v-main
    ></v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/layouts/Navbar.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
  },
});
</script>
