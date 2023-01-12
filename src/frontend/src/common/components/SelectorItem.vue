<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: "SelectorItem",
  // получение свойств из родительского компонента
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
