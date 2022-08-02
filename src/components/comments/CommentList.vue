<template>
  <div v-if="!!comments.length" class="comments mt-7">
    <h3>comments:</h3>
    <v-card class="mt-2 mx-auto">
      <v-list three-line>
        <template v-for="(item, index) in comments">
          <v-divider v-if="index !== 0" :key="index"></v-divider>

          <v-list-item v-if="item" :key="`a${index}`">
            <v-list-item-content>
              <v-list-item-group>
                <P class="caption">{{ item.email }}</P>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-group>
              <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Post from "@/services/posts";
import { Comment as CommentStructure } from "@/Interfaces";

export default Vue.extend({
  name: "Post",

  props: ["postId"],

  data() {
    return {
      comments: [] as CommentStructure[],
    };
  },

  created() {
    const postBroker = new Post();

    postBroker.getcommentsByPostId(this.postId).then(({ data }) => {
      this.comments = data;
    });
  },
});
</script>

<style scoped></style>
