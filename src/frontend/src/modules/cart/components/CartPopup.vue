<template>
  <div class="popup">
    <a href="#" class="close" @click="popupCloseHandler">
      <span class="visually-hidden">Закрыть попап</span>
    </a>

    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>

    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>

    <div class="popup__button">
      <a href="#" class="button" @click="popupCloseHandler">
        Отлично, я жду!
      </a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { RESET_STORE } from "@/store/mutation-types";

export default {
  name: "CartPopup",
  // добавили методы
  methods: {
    ...mapMutations({
      resetStore: RESET_STORE,
    }),

    popupCloseHandler() {
      this.resetStore();
      this.$store.dispatch("Builder/init");
    },
  },
};
</script>

<style lang="scss" scoped></style>
