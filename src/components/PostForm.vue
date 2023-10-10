<template>
  <div>
    <form @submit.prevent class="form">
      <h4>Create POST</h4>
      <t-input
        v-focus
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Name:"
      />
      <t-input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Desc:"
      />
      <t-button class="btn" style="align-self: flex-end" @click="createPost"
        >Create</t-button
      >
    </form>
  </div>
</template>

<script>
import TButton from "./UI/TButton.vue";
import TInput from "./UI/TInput.vue";
export default {
  components: { TButton, TInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.title = "";
      this.body = "";
    },
  },
  // watch: {
  //   post: {
  //     handler(newVal){
  //       console.log(newVal);
  //     },
  //     deep:true,
  //   }
  // },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
