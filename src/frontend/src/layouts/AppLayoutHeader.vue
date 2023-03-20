<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/" class="logo">
        <AppLayoutLogo />
      </RouterLink>
    </div>
    <div class="header__cart">
      <RouterLink to="/cart">{{ orderPrice }} ₽</RouterLink>
    </div>
    <div v-if="!isAuthorized" class="header__user">
      <RouterLink to="/sign-in" class="header__login">
        <span>Войти</span>
      </RouterLink>
    </div>
    <div v-else class="header__user">
      <RouterLink to="/profile" @click.native="profileIconClickHandler">
        <picture>
          <source
            type="image/webp"
            :srcset="
              $imageWithExtensionLink(user.avatar, '.webp') +
              ' 1x,' +
              $imageWithExtensionLink(user.avatar, '@2x.webp') +
              ' 2x'
            "
          />
          <img
            :src="$imageLink(user.avatar)"
            :srcset="$imageWithExtensionLink(user.avatar, '@2x.jpg')"
            :alt="user.name"
            width="32"
            height="32"
          />
        </picture>
        <span>{{ user.name }}</span>
      </RouterLink>
      <a
        href="#"
        class="header__logout"
        @click.prevent
        @click="logoutButtonClickHandler"
      >
        <span>Выйти</span>
      </a>
    </div>
  </header>
</template>

<script>
// импортируем компоненты
import AppLayoutLogo from "@/layouts/AppLayoutLogo.vue";
import { SIDEBAR_MENU } from "@/common/constants";

import { mapState, mapGetters, mapMutations } from "vuex";
import {
  CHANGE_AUTH_STATUS,
  CHANGE_ACTIVE_SIDEBAR_MENU,
} from "@/store/mutation-types";

import { imageLink, imageWithExtensionLink } from "@/common/mixins";

export default {
  name: "AppLayoutHeader",
  // подключаем компоненты
  components: { AppLayoutLogo },
  // подключаем миксины
  mixins: [imageLink, imageWithExtensionLink],
  // дополнительные функции
  computed: {
    ...mapState("Auth", ["user", "isAuthorized"]),
    ...mapGetters("Cart", ["totalOrderPrice"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Auth", {
      changeAuthStatus: CHANGE_AUTH_STATUS,
    }),
    ...mapMutations("Orders", {
      changeActiveSidebarMenu: CHANGE_ACTIVE_SIDEBAR_MENU,
    }),
    profileIconClickHandler() {
      this.changeActiveSidebarMenu(SIDEBAR_MENU.USER_DATA.LABEL);
    },
    logoutButtonClickHandler() {
      this.changeAuthStatus(false);
      if (this.$router.currentRoute.name !== "Index") {
        this.$router.push({ name: "Index" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
