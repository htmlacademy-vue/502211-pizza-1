<template>
  <div>
    <AppLayoutHeader />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
// импортируем компоненты
import AppLayoutHeader from "./AppLayoutHeader.vue";

export default {
  name: "AppLayout",
  // подключаем компоненты
  components: {
    AppLayoutHeader,
  },
};
</script>

<style lang="scss" scoped></style>
