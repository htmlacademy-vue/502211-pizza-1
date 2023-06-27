<template>
  <li class="order__item">
    <div class="product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        :alt="name"
      />
      <div class="product__text">
        <h2>{{ name }}</h2>
        <ul>
          <li>{{ getDoughText(sizeId, doughId, getEntityById) }}</li>
          <li>{{ getSauceText(sauceId, getEntityById) }}</li>
          <li>{{ getIngredientsText(ingredients, ingredientsList) }}</li>
        </ul>
      </div>
    </div>

    <p class="order__price">{{ priceText }} ₽</p>
  </li>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "OrderItem",
  // получение свойств из родительского компонента
  props: {
    doughId: {
      type: Number,
      required: true,
    },
    sizeId: {
      type: Number,
      required: true,
    },
    sauceId: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    ...mapState({
      ingredientsList: "ingredients",
    }),
    ...mapGetters([
      "getEntityById",
      "totalPizzaPrice",
      "getDoughText",
      "getSauceText",
      "getIngredientsText",
    ]),

    priceText() {
      const price = this.totalPizzaPrice(
        this.sizeId,
        this.doughId,
        this.sauceId,
        this.ingredients,
        this.getEntityById
      );

      return this.quantity > 1 ? `${this.quantity}х${price}` : price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
