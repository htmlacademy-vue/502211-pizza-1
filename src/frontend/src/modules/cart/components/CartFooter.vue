<template>
  <section class="footer">
    <div class="footer__more">
      <RouterLink to="/" class="button button--border button--arrow">
        Хочу еще одну
      </RouterLink>
    </div>

    <p class="footer__text">
      Перейти к конструктору<br />чтоб собрать ещё одну пиццу
    </p>

    <div class="footer__price">
      <b>Итого: {{ totalOrderPrice }} ₽</b>
    </div>

    <div class="footer__submit">
      <SubmitButton
        text="Оформить заказ"
        :disabled="buttonDisabled"
        :buttonClickHandler="formSubmitHandler"
      />
    </div>
  </section>
</template>

<script>
// импортируем компоненты
import SubmitButton from "@/common/components/SubmitButton";
import { getRandomNumber } from "@/common/utils";

import { mapState, mapGetters, mapMutations } from "vuex";
import {
  ADD_NEW_ORDER,
  CHANGE_SHOW_MODAL_STATUS,
} from "@/store/mutation-types";

export default {
  name: "CartFooter",
  // подключаем компоненты
  components: {
    SubmitButton,
  },
  // дополнительные функции
  computed: {
    ...mapState("Auth", ["isAuthorized"]),
    ...mapState("Cart", ["cart"]),
    ...mapGetters("Cart", ["totalOrderPrice"]),
    ...mapState("Orders", ["selectedMisc", "userOrders"]),

    buttonDisabled() {
      return this.cart.length === 0 || this.totalOrderPrice === 0;
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Orders", {
      addNewOrder: ADD_NEW_ORDER,
      showModal: CHANGE_SHOW_MODAL_STATUS,
    }),

    formSubmitHandler() {
      this.showModal(true);

      if (this.isAuthorized) {
        const order = {
          id: this.userOrders[this.userOrders.length - 1].id + 1,
          orderNumber: getRandomNumber(1000, 100000),
          pizzas: this.cart,
          additionals: Object.values(this.selectedMisc),
          orderPrice: this.totalOrderPrice,
        };

        this.addNewOrder(order);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
