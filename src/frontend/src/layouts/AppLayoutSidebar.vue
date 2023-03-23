<template>
  <div>
    <AppLayoutHeader />
    <main class="layout">
      <Sidebar />

      <slot />
    </main>
  </div>
</template>

<script>
// импортируем компоненты
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
import Sidebar from "@/common/components/Sidebar.vue";

export default {
  name: "AppLayoutSidebar",
  // подключаем компоненты
  components: {
    AppLayoutHeader,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped></style>
