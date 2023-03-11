<template>
  <form action="test.html" method="post">
    <FormInput
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

    <SubmitButton
      text="Авторизоваться"
      :buttonClickHandler="submitButtonClickHandler"
    />
  </form>
</template>

<script>
// импортируем компоненты
import FormInput from "@/common/components/FormInput";
import SubmitButton from "@/common/components/SubmitButton";
import { AUTH_FORM_INPUT_DATA } from "@/common/constants";

import { mapState, mapMutations } from "vuex";
import { CHANGE_AUTH_STATUS } from "@/store/mutation-types";

export default {
  name: "AuthForm",
  // подключаем данные
  data() {
    return {
      email: "",
      pass: "",
      AUTH_FORM_INPUT_DATA,
    };
  },
  // подключаем компоненты
  components: {
    FormInput,
    SubmitButton,
  },
  // дополнительные функции
  computed: {
    ...mapState("Auth", ["user"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Auth", {
      changeAuthStatus: CHANGE_AUTH_STATUS,
    }),
    inputChangeHandler(event, field) {
      this[field] = event.target.value;
    },
    submitButtonClickHandler() {
      if (this.user.email === this.email && this.user.password === this.pass) {
        this.changeAuthStatus(true);
        this.$router.push({ name: "Index" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
