<template>
  <form class="layout-form" @submit.prevent="formSubmitHandler">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <ul v-if="cart.length" class="cart-list sheet">
          <CartItem v-for="(item, id) in cart" :key="id" :itemData="item" />
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
import CartItem from "@/modules/cart/components/CartItem.vue";
import CartAdditional from "@/modules/cart/components/CartAdditional.vue";
import CartForm from "@/modules/cart/components/CartForm.vue";
import CartPopup from "@/modules/cart/components/CartPopup.vue";
import CartFooter from "@/modules/cart/components/CartFooter.vue";
import { OPTIONS } from "@/common/constants";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
    ...mapState("Cart", [
      "cart",
      "selectedMisc",
      "phone",
      "currentDeliveryAddress",
      "deliveryType",
    ]),
    ...mapState("Orders", ["showModal"]),
    ...mapState("Auth", ["user"]),
    ...mapGetters("Auth", ["isAuthorizes"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      setDeliveryType: SET_DELIVERY_TYPE,
    }),
    ...mapActions("Orders", ["postOrder", "deleteOrder"]),

    async formSubmitHandler() {
      const orderAddress =
        this.deliveryType !== OPTIONS.GET_BY_MYSELF
          ? {
              street: this.currentDeliveryAddress.street,
              building: this.currentDeliveryAddress.building,
              flat: this.currentDeliveryAddress.flat,
              comment: this.currentDeliveryAddress.comment || "",
              id: this.currentDeliveryAddress.id || null,
            }
          : null;

      const order = {
        userId: this.isAuthenticated ? this.user.id : null,
        phone: this.phone,
        address: orderAddress,
        pizzas: this.cart,
        misc: this.selectedMisc,
      };

      await this.postOrder(order);
    },
  },
};
</script>

<style lang="scss" scoped></style>
