<template>
  <div id="app">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script>
// импортируем компоненты
import AppLayout from "@/layouts/AppLayout.vue";

export default {
  name: "App",
  // подключаем компоненты
  components: {
    AppLayout,
  },
  created() {
    this.$store.dispatch("Builder/init", null, { root: true });
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
