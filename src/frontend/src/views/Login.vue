<template>
  <div class="sign-form">
    <RouterLink to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </RouterLink>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>

    <form action="test.html" method="post" @submit.prevent="login">
      <label class="sign-form__input">
        <FormInput
          ref="email"
          text="E-mail"
          v-model="email"
          type="email"
          name="email"
          placeholder="example@mail.ru"
          :error-text="validations.email.error"
        />
      </label>

      <label class="sign-form__input">
        <FormInput
          text="Пароль"
          v-model="password"
          type="password"
          name="password"
          placeholder="***********"
          :error-text="validations.password.error"
        />
      </label>

      <SubmitButton text="Авторизоваться" />
    </form>
  </div>
</template>

<script>
// Используем миксин валидатор для валидации полей формы
import validator from "@/common/mixins/validator";

export default {
  name: "Login",
  // подключаем данные
  data: () => ({
    email: "",
    password: "",
    // и добавляем объект validations. Поля cо списком правил валидации
    // и параметром error для присвоения текста ошибки в миксине.
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
  // При изменении любого из полей очищаем ошибки валидации
  watch: {
    email() {
      this.$clearValidationErrors();
    },
    password() {
      this.$clearValidationErrors();
    },
  },
  // при входе на страницу ставим фокус на email-инпуте
  mounted() {
    this.$refs.email.$refs.email.focus();
  },
  // подключаем миксины
  mixins: [validator],
  // добавили методы
  methods: {
    async login() {
      // Если есть невалидное поле - не отправлять запрос на сервер.
      // Также в миксине мы присваиваем текст ошибки
      if (
        !this.$validateFields(
          { email: this.email, password: this.password },
          this.validations
        )
      ) {
        return;
      }
      // Если поля валидны - отправляем запрос на сервер.
      await this.$store.dispatch("Login", {
        email: this.email,
        password: this.password,
      });

      // После успешной авторизации отправляем пользователя на главную страницу.
      await this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
