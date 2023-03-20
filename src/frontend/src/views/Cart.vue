<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <ul v-if="cart.length" class="cart-list sheet">
          <CartItem
            v-for="(item, id) in cart"
            :key="id"
            :itemData="item"
          />
        </ul>

        <div v-else class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div>

        <CartAdditional />

        <CartForm />

        <CartPopup v-if="showModal" />
      </div>
    </main>

    <CartFooter />
  </form>
</template>

<script>
// импортируем компоненты
import CartItem from "@/modules/cart/components/CartItem";
import CartAdditional from "@/modules/cart/components/CartAdditional";
import CartForm from "@/modules/cart/components/CartForm";
import CartPopup from "@/modules/cart/components/CartPopup";
import CartFooter from "@/modules/cart/components/CartFooter";

import { mapState, mapMutations } from "vuex";
import { SET_DELIVERY_TYPE } from "@/store/mutation-types";

export default {
  name: "Cart",
  // подключаем компоненты
  components: {
    CartItem,
    CartAdditional,
    CartForm,
    CartPopup,
    CartFooter,
  },
  // дополнительные функции
  computed: {
    ...mapState("Cart", ["cart"]),
    ...mapState("Orders", ["showModal"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      setDeliveryType: SET_DELIVERY_TYPE,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
