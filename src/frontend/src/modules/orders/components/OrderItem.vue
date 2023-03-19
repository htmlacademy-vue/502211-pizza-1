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
          <li>{{ doughText }}</li>
          <li>{{ sauceText }}</li>
          <li>{{ ingredientsText }}</li>
        </ul>
      </div>
    </div>

    <p class="order__price">{{ priceText }} ₽</p>
  </li>
</template>

<script>
import { doughSpellingMap } from "@/common/constants";
import {
  getDoughText,
  getSauceText,
  getIngredientsText,
} from "@/common/utils.js";

export default {
  name: "OrderItem",
  // получение свойств из родительского компонента
  props: {
    dough: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    doughText() {
      return getDoughText(this.size, this.dough, doughSpellingMap);
    },
    sauceText() {
      return getSauceText(this.sauce);
    },
    ingredientsText() {
      return getIngredientsText(this.ingredients);
    },
    priceText() {
      return this.amount > 1 ? `${this.amount}х${this.price}` : this.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
