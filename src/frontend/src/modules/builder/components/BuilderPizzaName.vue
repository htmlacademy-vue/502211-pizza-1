<template>
  <label class="input">
    <span class="visually-hidden">Название пиццы</span>
    <input
      type="text"
      name="pizza_name"
      placeholder="Введите название пиццы"
      :value="name"
      @input="nameInputChangeHandler"
    />
  </label>
</template>

<script>
export default {
  name: "PizzaName",
  // получение свойств из родительского компонента
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  // добавили методы
  methods: {
    nameInputChangeHandler(event) {
      this.$emit("changeName", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
