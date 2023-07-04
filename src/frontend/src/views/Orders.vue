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
import { SIDEBAR_MENU } from "@/common/constants";

import { mapState } from "vuex";

import { auth } from "@/middlewares";

export default {
  name: "Orders",
  // подключаем компоненты
  components: {
    OrderSheet,
  },
  // указываем имя лейаута
  layout: "AppLayoutSidebar",
  // применяем мидлвары
  middlewares: { auth },
  // дополнительные функции
  computed: {
    ...mapState("Orders", ["userOrders"]),
  },
  created() {
    this.$store.commit(
      "Orders/CHANGE_ACTIVE_SIDEBAR_MENU",
      SIDEBAR_MENU.ORDER_HISTORY.LABEL
    );
  },
};
</script>

<style lang="scss" scoped></style>
