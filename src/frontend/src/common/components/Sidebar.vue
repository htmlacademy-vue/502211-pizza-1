<template>
  <div class="layout__sidebar sidebar">
    <RouterLink to="/" class="logo layout__logo">
      <AppLayoutLogo />
    </RouterLink>

    <SidebarMenuItem
      v-for="(item, id) in Object.values(menu)"
      :key="id"
      :to="item.LINK"
      :label="item.LABEL"
    />
  </div>
</template>

<script>
// импортируем компоненты
import AppLayoutLogo from "@/layouts/AppLayoutLogo.vue";
import SidebarMenuItem from "@/common/components/SidebarMenuItem.vue";
import { SIDEBAR_MENU } from "@/common/constants";

export default {
  name: "AppLayoutMain",
  // подключаем компоненты
  components: {
    AppLayoutLogo,
    SidebarMenuItem,
  },
  // дополнительные функции
  computed: {
    menu() {
      return SIDEBAR_MENU;
    },
  },
};
</script>

<style lang="scss" scoped></style>
