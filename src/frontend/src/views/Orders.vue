<template>
  <div class="layout__content">
    <div class="layout__title">
      <h1 class="title title--big">История заказов</h1>
    </div>

    <OrderSheet
      v-for="order in userOrders"
      :key="order.id"
      :orderData="order"
    />
  </div>
</template>

<script>
// импортируем компоненты
import OrderSheet from "@/modules/orders/components/OrderSheet.vue";

import { mapState } from "vuex";

export default {
  name: "Orders",
  // подключаем компоненты
  components: {
    OrderSheet,
  },
  // дополнительные функции
  computed: {
    ...mapState("Orders", ["userOrders"]),
  },
  beforeCreate() {
    if (!this.$store.state["Auth"].isAuthorizes) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style lang="scss" scoped></style>
