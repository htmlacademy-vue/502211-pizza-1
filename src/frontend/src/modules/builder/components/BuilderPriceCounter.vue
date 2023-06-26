<template>
  <div class="content__result">
    <p>
      Итого:
      {{ getTotalPizzaPrice }}
      ₽
    </p>

    <button
      type="button"
      class="button"
      :disabled="isButtonDisabled"
      @click="submitButtonClickHandler"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import {
  ADD_TO_CART,
  UPDATE_EXISTING_PIZZA,
  CLEAR_FABRIC,
  SET_EDITING_PIZZA,
} from "@/store/mutation-types";

export default {
  name: "PriceCounter",
  // дополнительные функции
  computed: {
    ...mapState("Builder", [
      "currentDough",
      "currentSize",
      "currentSauce",
      "selectedIngredients",
      "pizzaName",
      "editingPizza",
    ]),
    ...mapState("Cart", ["cart"]),
    ...mapGetters(["getEntityById", "totalPizzaPrice"]),

    getTotalPizzaPrice() {
      return this.totalPizzaPrice(
        this.currentSize,
        this.currentDough,
        this.currentSauce,
        this.selectedIngredients,
        this.getEntityById
      );
    },
    isButtonDisabled() {
      const totalPizzaPrice = this.getTotalPizzaPrice;

      return (
        totalPizzaPrice === 0 ||
        this.selectedIngredients.length === 0 ||
        this.pizzaName.length === 0
      );
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      setEditingPizza: SET_EDITING_PIZZA,
      clearFabric: CLEAR_FABRIC,
    }),
    ...mapMutations("Cart", {
      addToCart: ADD_TO_CART,
      updateExistingPizza: UPDATE_EXISTING_PIZZA,
    }),

    submitButtonClickHandler() {
      const newCartItem = {
        doughId: this.currentDough,
        sizeId: this.currentSize,
        sauceId: this.currentSauce,
        ingredients: this.selectedIngredients,
        name: this.pizzaName,
        quantity: 1,
      };

      if (this.editingPizza) {
        const oldItemData = this.cart.find(
          (it) => it.id === this.editingPizza.id
        );

        this.updateExistingPizza({
          ...newCartItem,
          quantity: oldItemData.quantity,
        });
        this.setEditingPizza(null);
      } else {
        this.addToCart(newCartItem);
      }

      this.clearFabric();
    },
  },
};
</script>

<style lang="scss" scoped></style>
