<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <DoughSelector
        :dough="pizzas.dough"
        :currentDough="currentDough"
        @change="updateDoughValue"
      />

      <SizeSelector
        :sizes="pizzas.sizes"
        :currentSize="currentSize"
        @change="updateSizeValue"
      />

      <IngredientsSelector
        :sauces="pizzas.sauces"
        :ingredients="pizzas.ingredients"
        :currentSauce="currentSauce"
        :selectedIngredients="selectedIngredients"
        @change="updateSauceValue"
        @minusButtonClick="decreaseIngredientCount"
        @plusButtonClick="increaseIngredientCount"
        @update="setCount"
      />

      <div class="content__pizza">
        <PizzaName :name="pizzaName" @changeName="updateName" />

        <PizzaView
          :selectedIngredients="selectedIngredients"
          :currentDough="currentDough"
          :currentSauce="currentSauce"
          @update="updateIngredients"
        />

        <PriceCounter
          :totalPrice="getTotalPrice"
          :selectedIngredients="selectedIngredients"
          :name="pizzaName"
          @submit="addToCart"
        />
      </div>
    </div>
  </form>
</template>

<script>
// импортируем JSON данные
import pizzas from "@/static/pizza.json";
// импортируем компоненты
import DoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import SizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import IngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
import PizzaName from "@/modules/builder/components/BuilderPizzaName.vue";
import PizzaView from "@/modules/builder/components/BuilderPizzaView.vue";
import PriceCounter from "@/modules/builder/components/BuilderPriceCounter.vue";
import {
  ingredientsMap,
  doughMap,
  sizeMap,
  sauceMap,
  ITEMS_INPUT_DATA,
} from "@/common/constants";

export default {
  name: "Index",
  // подключаем данные
  data() {
    return {
      pizzas,
      ingredientsMap,
      doughMap,
      sizeMap,
      sauceMap,
      ITEMS_INPUT_DATA,
      selectedIngredients: {},
      currentDough: ITEMS_INPUT_DATA.DOUGH.DEFAULT_RADIO_CHECK,
      currentSauce: ITEMS_INPUT_DATA.SAUCE.DEFAULT_RADIO_CHECK,
      currentSize: ITEMS_INPUT_DATA.SIZE.DEFAULT_RADIO_CHECK,
      totalPrice: 0,
      pizzaName: "",
      cart: [],
    };
  },
  // подключаем компоненты
  components: {
    DoughSelector,
    SizeSelector,
    IngredientsSelector,
    PizzaName,
    PizzaView,
    PriceCounter,
  },
  // дополнительные функции
  computed: {
    getTotalPrice() {
      const multiplier = this.pizzas.sizes.find(
        (it) => it.name === this.currentSize
      ).multiplier;
      const doughPrice = this.pizzas.dough.find(
        (it) => it.name === this.currentDough
      ).price;
      const saucePrice = this.pizzas.sauces.find(
        (it) => it.name === this.currentSauce
      ).price;
      const ingredientsPrice = Object.values(this.selectedIngredients).reduce(
        (prev, curr) => {
          return prev + curr.price * curr.amount;
        },
        0
      );
      return multiplier * (doughPrice + saucePrice + ingredientsPrice);
    },
  },
  // добавили методы
  methods: {
    updateDoughValue(value) {
      this.currentDough = value;
    },
    updateSauceValue(value) {
      this.currentSauce = value;
    },
    updateSizeValue(value) {
      this.currentSize = value;
    },
    updateName(name) {
      this.pizzaName = name;
    },
    updateIngredients(ingredients) {
      this.selectedIngredients = {
        ...this.selectedIngredients,
        ...ingredients,
      };
    },
    decreaseIngredientCount(ingredient) {
      const ingredients = { ...this.selectedIngredients };
      if (ingredient.amount === 0) {
        delete ingredients[ingredient.name];
      } else {
        ingredients[ingredient.name] = ingredient;
      }
      this.selectedIngredients = { ...ingredients };
    },
    increaseIngredientCount(ingredient) {
      const ingredients = { ...this.selectedIngredients };
      if (ingredients[ingredient.name]) {
        ingredients[ingredient.name] = ingredient;
      } else {
        ingredients[ingredient.name] = ingredient;
      }
      this.selectedIngredients = { ...ingredients };
    },
    setCount(ingredient) {
      const ingredients = { ...this.selectedIngredients };
      if (ingredient.amount === 0) {
        delete ingredients[ingredient.name];
      } else {
        ingredients[ingredient.name] = ingredient;
      }
      this.selectedIngredients = { ...ingredients };
    },
    addToCart() {
      const newCartItem = {
        dough: this.currentDough,
        size: this.currentSize,
        sauce: this.currentSauce,
        ingredients: this.selectedIngredients,
        name: this.pizzaName,
        price: this.totalPrice,
      };
      this.cart = [...this.cart, newCartItem];
      this.selectedIngredients = {};
      this.currentDough = ITEMS_INPUT_DATA.DOUGH.DEFAULT_RADIO_CHECK;
      this.currentSauce = ITEMS_INPUT_DATA.SAUCE.DEFAULT_RADIO_CHECK;
      this.currentSize = ITEMS_INPUT_DATA.SIZE.DEFAULT_RADIO_CHECK;
      this.totalPrice = 0;
      this.pizzaName = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
