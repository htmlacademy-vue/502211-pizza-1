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
import AppLayoutHeader from "@/common/components/AppLayoutHeader";
import Sidebar from "@/common/components/Sidebar";

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
