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
      <button type="submit" class="button" :disabled="buttonDisabled">
        Оформить заказ
      </button>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "CartFooter",
  // дополнительные функции
  computed: {
    ...mapState("Cart", [
      "cart",
      "selectedMisc",
      "phone",
      "currentDeliveryAddress",
      "deliveryType",
    ]),
    ...mapState("Auth", ["user"]),
    ...mapGetters("Auth", ["isAuthorizes"]),
    ...mapGetters("Cart", ["totalOrderPrice"]),

    buttonDisabled() {
      return this.cart.length === 0 || this.totalOrderPrice === 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
