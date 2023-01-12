<template>
  <div>
    <AppLayoutHeader />
    <main class="content">
      <Index />
    </main>
  </div>
</template>

<script>
// импортируем компоненты
import AppLayoutHeader from "./AppLayoutHeader.vue";
import Index from "../views/Index.vue";

export default {
  name: "AppLayout",
  // подключаем компоненты
  components: {
    AppLayoutHeader,
    Index,
  },
};
</script>

<style lang="scss" scoped></style>
