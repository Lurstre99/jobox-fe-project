<template>
  <span class="validation-text text-danger">
    {{ error }}
  </span>
</template>

<script>
export default {
  name: 'TheValidationErrorLabel',
  props: {
    error: {
      require: true,
      type: String,
    },
  },
};
</script>

<style>

</style>
