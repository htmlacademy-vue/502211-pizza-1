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
import AppLayoutHeader from "@/common/components/AppLayoutHeader";

export default {
  name: "AppLayoutMain",
  // подключаем компоненты
  components: {
    AppLayoutHeader,
  },
};
</script>

<style lang="scss" scoped></style>
