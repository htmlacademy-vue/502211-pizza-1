<template>
  <div class="sign-form">
    <RouterLink to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </RouterLink>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>

    <AuthForm :login="login" />
  </div>
</template>

<script>
// импортируем компоненты
import AuthForm from "@/modules/auth/components/AuthForm.vue";

import validator from "@/common/mixins/validator";

export default {
  name: "Login",
  // подключаем данные
  data: () => ({
    email: "",
    password: "",
    validations: {
      email: {
        error: "",
        rules: ["required", "email"],
      },
      password: {
        error: "",
        rules: ["required"],
      },
    },
  }),
  // добавили вычисляемые свойства
  watch: {
    email() {
      this.$clearValidationErrors();
    },
    password() {
      this.$clearValidationErrors();
    },
  },
  // подключаем компоненты
  components: {
    AuthForm,
  },
  // подключаем миксины
  mixins: [validator],
  // добавили методы
  methods: {
    async login() {
      if (
        !this.$validateFields(
          { email: this.email, password: this.password },
          this.validations
        )
      ) {
        return;
      }
      await this.$store.dispatch("Login", {
        email: this.email,
        password: this.password,
      });

      await this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
