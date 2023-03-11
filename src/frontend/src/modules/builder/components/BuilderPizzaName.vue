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
import { mapState, mapMutations } from "vuex";
import { UPDATE_NAME } from "@/store/mutation-types";

export default {
  name: "PizzaName",
  // дополнительные функции
  computed: {
    ...mapState("Builder", ["pizzaName"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      updateName: UPDATE_NAME,
    }),
    nameInputChangeHandler(event) {
      this.updateName(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
