<template>
  <span class="filling filling--mushrooms">{{ ingredient.name }}</span>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    // получение свойств из родительского компонента
    ingredient: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
