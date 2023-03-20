<template>
  <div class="layout__sidebar sidebar">
    <RouterLink to="/" class="logo layout__logo">
      <AppLogo />
    </RouterLink>

    <SidebarMenuItem
      v-for="(item, id) in Object.values(SIDEBAR_MENU)"
      :key="id"
      :to="item.LINK"
      :label="item.LABEL"
    />
  </div>
</template>

<script>
// импортируем компоненты
import AppLogo from "@/layouts/AppLayoutLogo.vue";
import SidebarMenuItem from "@/common/components/SidebarMenuItem.vue";
import { SIDEBAR_MENU } from "@/common/constants";

export default {
  name: "AppLayoutMain",
  // подключаем компоненты
  components: {
    AppLogo,
    SidebarMenuItem,
  },
  // подключаем данные
  data() {
    return {
      SIDEBAR_MENU,
    };
  },
};
</script>

<style lang="scss" scoped></style>
