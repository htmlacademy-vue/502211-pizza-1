<template>
  <Component :is="layout">
    <slot />
  </Component>
</template>

<script>
// импортируем компоненты
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  // дополнительные функции
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;

      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
