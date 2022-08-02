<template>
  <router-link
    class="mx-auto mt-3 text-decoration-none"
    :to="`/post/${post.id}`"
  >
    <v-card max-width="344">
      <v-card-text>
        <div>{{ post.id }}</div>
        <p class="text-h4 text--primary">{{ post.title }}</p>
        <div class="text--primary">
          {{ post.body }}
        </div>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["post"],
});
</script>
