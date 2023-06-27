<template>
  <form @submit.prevent="login">
    <FormInput
      :ref="formData.inputName"
      v-for="(formData, dataId) in AUTH_FORM_INPUT_DATA"
      :key="dataId"
      class="sign-form__input"
      :text="formData.text"
      :inputType="formData.inputType"
      :inputName="formData.inputName"
      :placeholder="formData.placeholder"
      :required="formData.required"
      :value="$data[formData.inputName]"
      :inputChangeHandler="inputChangeHandler"
    />

    <AuthErrorBlock
      v-if="
        errors.email.length !== 0 ||
        errors.pass.length !== 0 ||
        errors.data.length !== 0
      "
      :errors="Object.values(errors).filter((it) => it !== '')"
    />

    <button type="submit" class="button">Авторизоваться</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

// импортируем компоненты
import FormInput from "@/common/components/FormInput.vue";
import { AUTH_FORM_INPUT_DATA, AUTH_ERRORS } from "@/common/constants";
import { isValidEmail } from "@/common/utils";

import AuthErrorBlock from "@/modules/auth/components/AuthErrorBlock.vue";

export default {
  name: "AuthForm",
  // подключаем данные
  data() {
    return {
      email: "",
      pass: "",
      errors: {
        email: [],
        pass: [],
        data: [],
      },
      AUTH_FORM_INPUT_DATA,
    };
  },
  // подключаем компоненты
  components: {
    FormInput,
    AuthErrorBlock,
  },
  // добавили методы
  methods: {
    ...mapActions("Auth", {
      loginUser: "login",
    }),
    inputChangeHandler(event, field) {
      this[field] = event.target.value;
      this.errors[field] = [];
      this.validateInput(field);
    },
    validateInput(field) {
      switch (field) {
        case "email":
          if (this.email.length === 0) {
            this.errors.email.push(AUTH_ERRORS.EMAIL_REQUIRED);
          } else {
            this.errors.email = this.errors.email.filter(
              (it) => it !== AUTH_ERRORS.EMAIL_REQUIRED
            );
          }

          if (!isValidEmail(this.email)) {
            this.errors.email.push(AUTH_ERRORS.EMAIL_VALID);
          } else {
            this.errors.email = this.errors.email.filter(
              (it) => it !== AUTH_ERRORS.EMAIL_VALID
            );
          }

          break;

        case "pass":
          if (this.pass.length === 0) {
            this.errors.pass.push(AUTH_ERRORS.PASSWORD_REQUIRED);
          } else {
            this.errors.pass = this.errors.pass.filter(
              (it) => it !== AUTH_ERRORS.PASSWORD_REQUIRED
            );
          }

          break;
      }
    },
    async login() {
      if (this.errors.email.length !== 0 || this.errors.pass.length !== 0) {
        return;
      }

      this.errors.data.push(AUTH_ERRORS.FALSE_DATA);

      await this.loginUser({
        email: this.email,
        password: this.pass,
      });

      this.errors.data = this.errors.data.filter(
        (it) => it !== AUTH_ERRORS.FALSE_DATA
      );

      this.$router.push("/");
    },
  },
  mounted() {
    this.$refs.email[0].$refs.input.focus();
  },
};
</script>

<style lang="scss" scoped></style>
