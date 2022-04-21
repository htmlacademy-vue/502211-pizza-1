<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isDisabledMinus"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="ingredient.amount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="isDisabledPlus"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  data: () => ({
    amount: 0,
  }),
  // получение свойств из родительского компонента
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    isDisabledMinus() {
      return this.ingredient.amount < 1;
    },
    isDisabledPlus() {
      return this.ingredient.amount >= 3;
    },
  },
};
</script>
