<template>
  <div class="posts">
    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import PostListItem from "./PostListItem.vue";
import { Post as PostStructure } from "@/Interfaces/Post";

@Component({
  components: { PostListItem },
})
export default class PostList extends Vue {
  @Prop() public posts!: PostStructure[];
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
