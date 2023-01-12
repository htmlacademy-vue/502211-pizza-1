<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button"
      :disabled="disabled"
      @click="submitButtonClickHandler"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "PriceCounter",
  // получение свойств из родительского компонента
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
    selectedIngredients: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    disabled() {
      return (
        this.totalPrice === 0 ||
        Object.keys(this.selectedIngredients).length === 0 ||
        this.name.length === 0
      );
    },
  },
  // добавили методы
  methods: {
    submitButtonClickHandler() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss" scoped></style>
