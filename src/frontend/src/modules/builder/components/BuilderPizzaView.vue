<template>
  <div class="content__constructor">
    <div class="pizza" :class="getCustomPizzaClass">
      <AppDrop @drop="itemDropHandler">
        <div class="pizza__wrapper">
          <div
            v-for="item in selectedIngredients"
            :key="item.id"
            class="pizza__filling"
            :class="getPizzaFillingClass(item)"
          >
            <div
              v-if="item.amount === 2"
              :key="item.id"
              class="pizza__filling"
              :class="getPizzaFillingClassSecond(item)"
            >
              <div
                v-if="item.amount === 3"
                :key="item.id"
                class="pizza__filling"
                :class="getPizzaFillingClassThird(item)"
              />
            </div>
          </div>
        </div>
      </AppDrop>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import AppDrop from "@/common/components/AppDrop";
import {
  ingredientsMap,
  MAX_INGREDIENTS_NUMBER,
  sauceMap,
  doughClassMap,
} from "@/common/constants";

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
  // получение свойств из родительского компонента
  props: {
    selectedIngredients: {
      type: Object,
      required: true,
    },
    currentDough: {
      type: String,
      required: true,
    },
    currentSauce: {
      type: String,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    getCustomPizzaClass() {
      return `pizza--foundation--${doughClassMap[this.currentDough]}-${
        sauceMap[this.currentSauce]
      }`;
    },
  },
  // добавили методы
  methods: {
    getPizzaFillingClass(item) {
      return `pizza__filling--${ingredientsMap[item.name]}`;
    },
    getPizzaFillingClassSecond(item) {
      return `pizza__filling--${
        ingredientsMap[item.name]
      } pizza__filling--second`;
    },
    getPizzaFillingClassThird(item) {
      return `pizza__filling--${
        ingredientsMap[item.name]
      } pizza__filling--third`;
    },
    itemDropHandler(item) {
      const ingredients = { ...this.selectedIngredients };
      if (ingredients[item.name]) {
        if (ingredients[item.name].amount !== MAX_INGREDIENTS_NUMBER) {
          ingredients[item.name].amount++;
          this.$emit("change", ingredients);
        }
      } else {
        ingredients[item.name] = {
          ...item,
          amount: 1,
        };
        this.$emit("change", ingredients);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
