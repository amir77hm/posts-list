<template>
  <div v-if="loading" class="text-center">
    <v-progress-circular
      :size="40"
      :width="5"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
  <div v-else class="mt-2 post">
    <div class="post-details">
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
    <div class="post-comments"><CommentList :postId="postId" /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "@/components/posts/PostList.vue";
import Post from "@/services/posts";
import { Post as PostStructure } from "@/Interfaces";
import CommentList from "@/components/comments/CommentList.vue";

export default Vue.extend({
  name: "Post",

  components: {
    PostList,
    CommentList,
  },

  data() {
    return {
      post: {} as PostStructure,
      loading: false as boolean,
      postId: this.$route.params.postId as string,
    };
  },
  created() {
    const postBroker = new Post();
    this.loading = true;

    // also can use promise.all for get comments and post-details together here.

    postBroker
      .getPostById(this.postId)
      .then(({ data }) => (this.post = data))
      .catch((err) => this.$router.push("/"))
      .finally(() => (this.loading = false));
  },
});
</script>
