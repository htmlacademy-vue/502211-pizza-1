<template>
  <div id="app">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script>
// импортируем компоненты
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "App",
  // подключаем компоненты
  components: {
    AppLayout,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
