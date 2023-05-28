<template>
  <section class="sheet order">
    <div class="order__wrapper">
      <div class="order__number">
        <b>Заказ #{{ orderData.orderNumber }}</b>
      </div>

      <div class="order__sum">
        <span>Сумма заказа: {{ orderData.orderPrice }} ₽</span>
      </div>

      <div class="order__button">
        <button
          type="button"
          class="button button--border"
          @click="deleteButtonClickHandler(orderData)"
        >
          Удалить
        </button>
      </div>
      <div class="order__button">
        <RouterLink to="/cart">
          <button
            type="button"
            class="button"
            @click="repeatButtonClickHandler(orderData)"
          >
            Повторить
          </button>
        </RouterLink>
      </div>
    </div>

    <ul class="order__list">
      <OrderItem
        v-for="(pizza, id) in orderData.pizzas"
        :key="id"
        :name="pizza.name"
        :dough="pizza.dough"
        :size="pizza.size"
        :sauce="pizza.sauce"
        :ingredients="pizza.ingredients"
        :amount="pizza.amount"
        :price="pizza.price"
      />
    </ul>

    <ul class="order__additional">
      <OrderItemAdditional
        v-for="(additional, id) in orderData.additionals"
        :key="id"
        :name="additional.name"
        :price="additional.price"
        :image="additional.image"
        :amount="additional.amount"
      />
    </ul>

    <p class="order__address">
      Адрес доставки: Тест (или если адрес новый - писать целиком)
    </p>
  </section>
</template>

<script>
// импортируем компоненты
import OrderItem from "@/modules/orders/components/OrderItem.vue";
import OrderItemAdditional from "@/modules/orders/components/OrderItemAdditional.vue";

import { mapMutations } from "vuex";
import {
  ADD_ORDER_MISC,
  ADD_TO_CART,
  DELETE_ORDER,
} from "@/store/mutation-types";

export default {
  name: "OrderSheet",
  // получение свойств из родительского компонента
  props: {
    orderData: {
      type: Object,
      required: true,
    },
  },
  // подключаем компоненты
  components: {
    OrderItem,
    OrderItemAdditional,
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      addToCart: ADD_TO_CART,
    }),
    ...mapMutations("Orders", {
      addOrderMisc: ADD_ORDER_MISC,
      deleteOrder: DELETE_ORDER,
    }),

    deleteButtonClickHandler(order) {
      this.deleteOrder(order.id);
    },
    repeatButtonClickHandler(order) {
      const orderAdditionals = {};

      order.additionals.forEach((it) => {
        orderAdditionals[it.name] = it;
      });

      this.addOrderMisc(orderAdditionals);
      this.addToCart(order.pizzas);
    },
  },
};
</script>

<style lang="scss" scoped></style>
