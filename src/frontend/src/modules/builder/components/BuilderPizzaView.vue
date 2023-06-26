<template>
  <div class="content__constructor">
    <div class="pizza" :class="getCustomPizzaClass">
      <AppDrop>
        <div class="pizza__wrapper">
          <template v-for="item in selectedIngredients">
            <div
              v-if="item.quantity > 0"
              :key="`filling-one_${item.ingredientId}`"
              class="pizza__filling"
              :class="getPizzaFillingClass(item)"
            />
            <div
              v-if="item.quantity > 1"
              :key="`filling-two_${item.ingredientId}`"
              class="pizza__filling"
              :class="getPizzaFillingClassSecond(item)"
            />
            <div
              v-if="item.quantity > 2"
              :key="`filling-three_${item.ingredientId}`"
              class="pizza__filling"
              :class="getPizzaFillingClassThird(item)"
            />
          </template>
        </div>
      </AppDrop>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import AppDrop from "@/common/components/AppDrop.vue";
import { ingredientsMap, sauceMap, doughClassMap } from "@/common/constants";

import { mapState, mapGetters } from "vuex";

export default {
  name: "PizzaView",
  // подключаем данные
  data() {
    return {
      ingredientsMap,
    };
  },
  // подключаем компоненты
  components: {
    AppDrop,
  },
  // дополнительные функции
  computed: {
    ...mapState("Builder", [
      "selectedIngredients",
      "currentDough",
      "currentSauce",
    ]),
    ...mapGetters(["getEntityById"]),

    getCustomPizzaClass() {
      const doughName = this.getEntityById("dough", this.currentDough)?.name;
      const sauceName = this.getEntityById("sauces", this.currentSauce)?.name;

      return `pizza--foundation--${doughClassMap[doughName]}-${sauceMap[sauceName]}`;
    },
  },
  // добавили методы
  methods: {
    getPizzaFillingClass(item) {
      const ingredientName = this.getEntityById(
        "ingredients",
        item.ingredientId
      ).name;
      return `pizza__filling--${ingredientsMap[ingredientName]}`;
    },
    getPizzaFillingClassSecond(item) {
      const ingredientName = this.getEntityById(
        "ingredients",
        item.ingredientId
      ).name;
      return `pizza__filling--${ingredientsMap[ingredientName]} pizza__filling--second`;
    },
    getPizzaFillingClassThird(item) {
      const ingredientName = this.getEntityById(
        "ingredients",
        item.ingredientId
      ).name;
      return `pizza__filling--${ingredientsMap[ingredientName]} pizza__filling--third`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
