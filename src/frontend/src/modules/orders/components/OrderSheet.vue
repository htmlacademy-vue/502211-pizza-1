<template>
  <section class="sheet order">
    <div class="order__wrapper">
      <div class="order__number">
        <b>Заказ #{{ orderData.id }}</b>
      </div>

      <div class="order__sum">
        <span>Сумма заказа: {{ orderPrice }} ₽</span>
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
        v-for="(pizza, id) in orderData.orderPizzas"
        :key="id"
        :name="pizza.name"
        :doughId="pizza.doughId"
        :sizeId="pizza.sizeId"
        :sauceId="pizza.sauceId"
        :ingredients="pizza.ingredients"
        :quantity="pizza.quantity"
        :price="pizza.price"
      />
    </ul>

    <ul class="order__additional">
      <OrderItemAdditional
        v-for="(additional, id) in orderData.orderMisc"
        :key="id"
        :orderMisc="additional"
      />
    </ul>

    <p v-if="gotAddress" class="order__address">
      Адрес доставки: {{ addressText }}
    </p>
  </section>
</template>

<script>
// импортируем компоненты
import OrderItem from "@/modules/orders/components/OrderItem.vue";
import OrderItemAdditional from "@/modules/orders/components/OrderItemAdditional.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { ADD_TO_CART, ADD_ORDER_MISC } from "@/store/mutation-types";

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
  // дополнительные функции
  computed: {
    ...mapState(["misc"]),
    ...mapState("Orders", ["userAddresses"]),
    ...mapGetters([
      "getEntityById",
      "totalPizzaPrice",
      "getCountSum",
      "fullAddress",
    ]),

    orderPrice() {
      const pizzasPrice = this.orderData.orderPizzas.reduce((prev, curr) => {
        return (
          prev +
          this.totalPizzaPrice(
            curr.sizeId,
            curr.doughId,
            curr.sauceId,
            curr.ingredients,
            this.getEntityById
          ) *
            curr.quantity
        );
      }, 0);
      const miscPrice = this.getCountSum(this.orderData?.orderMisc, this.misc);

      return pizzasPrice + miscPrice;
    },

    gotAddress() {
      return (
        (this.orderData.addressId &&
          this.userAddresses.find(
            (it) => it.id === this.orderData.addressId
          )) ||
        this.orderData.orderAddress
      );
    },

    addressText() {
      return (
        this.orderData.orderAddress.name ||
        this.fullAddress(this.orderData.orderAddress)
      );
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      addToCart: ADD_TO_CART,
      addOrderMisc: ADD_ORDER_MISC,
    }),
    ...mapActions("Orders", ["deleteOrder"]),

    async deleteButtonClickHandler(order) {
      await this.deleteOrder(order.id);
    },
    repeatButtonClickHandler(order) {
      const pizzas = order.orderPizzas;

      pizzas.forEach((pizza) => {
        delete pizza.id;

        pizza.ingredients.forEach((ingredient) => {
          delete ingredient.id;
        });
      });

      if (order.orderMisc) {
        this.addOrderMisc(order.orderMisc);
      }

      this.addToCart(order.orderPizzas);
    },
  },
};
</script>

<style lang="scss" scoped></style>
