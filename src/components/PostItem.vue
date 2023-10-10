<template>
  <div>
    <div class="post">
      <div><strong>Name:</strong>{{ post.title }}</div>
      <div><strong>Desc:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <t-button @click="$router.push(`/posts/${post.id}`)">Open</t-button>
    </div>
    <div>
      <t-button @click="$emit('remove', post)">Delete</t-button>
    </div>
  </div>
</template>

<script>
import TButton from "./UI/TButton.vue";
export default {
  components: { TButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid teal;
}
.post__btns {
  display: flex;
}
</style>
