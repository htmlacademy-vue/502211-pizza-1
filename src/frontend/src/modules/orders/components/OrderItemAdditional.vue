<template>
  <li>
    <img :src="miscData.image" width="20" height="30" :alt="miscData.name" />
    <p>
      <span>{{ miscData.name }}</span>
      <b>{{ priceText }} ₽</b>
    </p>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OrderItemAdditional",
  // получение свойств из родительского компонента
  props: {
    orderMisc: {
      type: Object,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    ...mapGetters(["getEntityById"]),

    miscData() {
      return this.getEntityById("misc", this.orderMisc.miscId);
    },

    priceText() {
      const { price } = this.miscData;
      const { quantity } = this.orderMisc;

      return quantity > 1 ? `${quantity}х${price}` : price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
