<template>
  <button
    type="submit"
    class="button"
    @click.prevent
    @click="buttonClickHandler"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  // получение свойств из родительского компонента
  props: {
    text: {
      type: String,
      required: true,
    },
    buttonClickHandler: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
