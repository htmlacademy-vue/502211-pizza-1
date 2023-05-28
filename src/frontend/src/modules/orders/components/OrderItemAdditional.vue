<template>
  <li>
    <img :src="$imageLink(image)" width="20" height="30" :alt="name" />
    <p>
      <span>{{ name }}</span>
      <b>{{ priceText }} ₽</b>
    </p>
  </li>
</template>

<script>
import { imageLink } from "@/common/mixins";

export default {
  name: "OrderItemAdditional",
  // получение свойств из родительского компонента
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  // подключаем миксины
  mixins: [imageLink],
  // дополнительные функции
  computed: {
    priceText() {
      return this.amount > 1 ? `${this.amount}х${this.price}` : this.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
