<template>
  <RouterLink
    :to="to"
    class="layout__link"
    active-class="layout__link--active"
    @click.native="changeActiveSidebarMenu(label)"
  >
    {{ label }}
  </RouterLink>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { CHANGE_ACTIVE_SIDEBAR_MENU } from "@/store/mutation-types";

export default {
  name: "SidebarMenuItem",
  // получение свойств из родительского компонента
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    ...mapState("Orders", ["activeSidebarMenu"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Orders", {
      changeActiveSidebarMenu: CHANGE_ACTIVE_SIDEBAR_MENU,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
