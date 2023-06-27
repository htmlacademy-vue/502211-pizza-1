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
import { setAuth } from "@/common/utils";

import { mapActions } from "vuex";

export default {
  name: "App",
  // подключаем компоненты
  components: {
    AppLayout,
  },
  methods: {
    ...mapActions(["init"]),
  },
  created() {
    window.onerror = function (msg, url, line, col, error) {
      console.error(error);
    };

    if (this.$jwt.getToken()) {
      setAuth(this.$store);
    }

    this.init();
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
