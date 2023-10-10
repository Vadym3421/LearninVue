<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "t-button",
};
</script>

<style scoped>
.btn {
  width: 100px;
  height: 50px;
  margin-top: 15px;
  align-self: flex-end;
  background: none;
  color: teal;
  border: 2px solid teal;
}
</style>
