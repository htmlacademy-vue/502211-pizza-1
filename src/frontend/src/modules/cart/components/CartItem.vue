<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        :alt="itemData.name"
      />

      <div class="product__text">
        <h2>{{ itemData.name }}</h2>
        <ul>
          <li>
            {{ getDoughText(itemData.sizeId, itemData.doughId, getEntityById) }}
          </li>
          <li>{{ getSauceText(itemData.sauceId, getEntityById) }}</li>
          <li>{{ getIngredientsText(itemData.ingredients, ingredients) }}</li>
        </ul>
      </div>
    </div>

    <ItemCounter
      class="cart-list__counter"
      :count="itemData.quantity"
      :item="itemData"
      :minCount="0"
      :maxCount="Math.pow(10, 1000)"
      :inputChangeHandler="setPizzaCount"
      :minusButtonClickHandler="decreasePizzaCount"
      :plusButtonClickHandler="increasePizzaCount"
    />

    <div class="cart-list__price">
      <b
        >{{
          totalPizzaPrice(
            itemData.sizeId,
            itemData.doughId,
            itemData.sauceId,
            itemData.ingredients,
            getEntityById
          ) * itemData.quantity
        }}
        ₽</b
      >
    </div>

    <div class="cart-list__button">
      <RouterLink to="/">
        <button
          type="button"
          class="cart-list__edit"
          @click="pizzaChangeButtonClickHandler"
        >
          Изменить
        </button>
      </RouterLink>
    </div>
  </li>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";

import { mapState, mapGetters, mapMutations } from "vuex";
import {
  UPDATE_DOUGH_VALUE,
  UPDATE_SAUCE_VALUE,
  UPDATE_SIZE_VALUE,
  SET_INGREDIENT_COUNT,
  SET_PIZZA_COUNT,
  DECREASE_PIZZA_COUNT,
  INCREASE_PIZZA_COUNT,
  SET_EDITING_PIZZA,
  UPDATE_NAME,
} from "@/store/mutation-types";

export default {
  name: "CartItem",
  // получение свойств из родительского компонента
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  // подключаем компоненты
  components: {
    ItemCounter,
  },
  // дополнительные функции
  computed: {
    ...mapState(["ingredients"]),
    ...mapGetters([
      "getEntityById",
      "totalPizzaPrice",
      "getDoughText",
      "getSauceText",
      "getIngredientsText",
    ]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      decreasePizzaCount: DECREASE_PIZZA_COUNT,
      increasePizzaCount: INCREASE_PIZZA_COUNT,
      setPizzaCount: SET_PIZZA_COUNT,
    }),
    ...mapMutations("Builder", {
      updateDoughValue: UPDATE_DOUGH_VALUE,
      updateSauceValue: UPDATE_SAUCE_VALUE,
      updateSizeValue: UPDATE_SIZE_VALUE,
      setCount: SET_INGREDIENT_COUNT,
      setEditingPizza: SET_EDITING_PIZZA,
      updateName: UPDATE_NAME,
    }),

    pizzaChangeButtonClickHandler() {
      const { doughId, name, sauceId, sizeId, ingredients } = this.itemData;

      this.setEditingPizza(this.itemData);
      this.updateDoughValue(doughId);
      this.updateSauceValue(sauceId);
      this.updateSizeValue(sizeId);
      this.updateName(name);

      ingredients.forEach((it) =>
        this.setCount({
          count: it.quantity,
          item: this.ingredients.find(
            (ingredient) => ingredient.id === it.ingredientId
          ),
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
