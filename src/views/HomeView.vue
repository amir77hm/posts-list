<template>
  <!-- if used vue3 Suspense could useful here. -->
  <div>
    <div v-if="isLoading" class="text-center mt-1">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <div class="text-center" v-if="error">error occured</div>
      <PostList :posts="posts" v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "@/components/posts/PostList.vue";
import Post from "@/services/posts";
import { Post as PostStructure } from "@/Interfaces";

export default Vue.extend({
  name: "Home",

  components: { PostList },

  data() {
    return { posts: [] as PostStructure[], isLoading: false, error: false };
  },
  created() {
    const postBroker = new Post();

    this.isLoading = true;

    postBroker
      .getPosts()
      .then(({ data }) => (this.posts = data))
      .catch((err) => {
        
        this.error = true;
      })
      .finally(() => (this.isLoading = false));
  },
});
</script>
