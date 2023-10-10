<template>
  <select :value="modelValue" @change="changeOptions">
    <option disabled>Select from list</option>
    <option :key="option.value" v-for="option in options" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "t-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
