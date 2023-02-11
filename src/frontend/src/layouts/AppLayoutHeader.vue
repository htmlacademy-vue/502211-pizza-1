<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </RouterLink>
    </div>
    <div class="header__cart">
      <RouterLink to="/cart">0 ₽</RouterLink>
    </div>
    <div class="header__user">
      <RouterLink to="/sign-in" class="header__login">
        <span>Войти</span>
      </RouterLink>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
};
</script>

<style lang="scss" scoped></style>
