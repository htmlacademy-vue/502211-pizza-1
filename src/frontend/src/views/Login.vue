<template>
  <div class="sign-form">
    <RouterLink to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </RouterLink>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>

    <AuthForm />
  </div>
</template>

<script>
// импортируем компоненты
import AuthForm from "@/modules/auth/components/AuthForm";

export default {
  name: "Login",
  // подключаем компоненты
  components: {
    AuthForm,
  },
};
</script>

<style lang="scss" scoped></style>
