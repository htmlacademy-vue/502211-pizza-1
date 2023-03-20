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
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";

export default {
  name: "AppLayout",
  // подключаем компоненты
  components: {
    AppLayoutHeader,
  },
};
</script>

<style lang="scss" scoped></style>
