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
      <RouterLink
        :to="popupLink"
        class="button"
        @click.native="popupCloseHandler"
      >
        Отлично, я жду!
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { RESET_STORE } from "@/store/mutation-types";

export default {
  name: "CartPopup",
  // дополнительные функции
  computed: {
    ...mapGetters("Auth", ["isAuthorizes"]),

    popupLink() {
      return this.isAuthorizes ? "/orders" : "/";
    },
  },
  // добавили методы
  methods: {
    ...mapMutations({
      resetStore: RESET_STORE,
    }),
    ...mapActions(["init"]),

    popupCloseHandler() {
      this.resetStore();
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped></style>
