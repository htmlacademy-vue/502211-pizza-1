<template>
  <div class="default-layout-container">
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
// импортируем компоненты
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";

export default {
  name: "AppLayoutDefault",
  // подключаем компоненты
  components: {
    AppLayoutHeader,
  },
};
</script>

<style lang="scss" scoped>
.default-layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
