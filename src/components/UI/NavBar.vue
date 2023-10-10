<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <t-button @click="$router.push('/posts')">Posts</t-button>
      <t-button @click="$router.push('/about')" style="margin-left: 20px"
        >About</t-button
      >
      <t-button @click="$router.push('/store')" style="margin-left: 20px"
        >Store</t-button
      >
      <t-button @click="$router.push('/composition')" style="margin-left: 20px"
        >Composition API</t-button
      >
    </div>
  </div>
</template>

<script>
import TButton from "./TButton.vue";
export default {
  components: { TButton },
};
</script>

<style scope>
.navbar {
  height: 70px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
