<template>
  <div class="text-center" v-if="loading">
    <v-progress-circular
      :size="40"
      :width="5"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <div class="mt-2" v-else>
    <v-card class="mx-auto" max-width="100%">
      <v-card-text>
        <div>userId : {{ post.userId }}</div>
        <p class="text-h4 text--primary">{{ post.title }}</p>
        <p>post body:</p>
        <div class="text--primary">
          {{ post.body }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "@/components/posts/PostList.vue";
import Post from "@/services/posts";
import { Post as PostStructure } from "@/Interfaces/Post";

export default Vue.extend({
  name: "Home",

  components: { PostList },

  data() {
    return {
      post: {} as PostStructure,
      loading: false as boolean,
    };
  },
  created() {
    const postId: string = this.$route.params.postId;
    const postBroker = new Post();
    this.loading = true;

    postBroker
      .getPostById(postId)
      .then(({ data }) => (this.post = data))
      .catch((err) => this.$router.push("/"))
      .finally(() => (this.loading = false));
  },
});
</script>
