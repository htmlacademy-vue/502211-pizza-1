<template>
  <form action="test.html" method="post">
    <FormInput
      @submit.prevent="login"
      v-for="(formData, dataId) in AUTH_FORM_INPUT_DATA"
      :key="dataId"
      class="sign-form__input"
      :text="formData.text"
      :inputModel="formData.inputModel"
      :inputType="formData.inputType"
      :inputName="formData.inputName"
      :placeholder="formData.placeholder"
      :required="formData.required"
      :value="$data[formData.inputName]"
      :inputChangeHandler="inputChangeHandler"
      :error-text="formData.validations.error"
    />

    <SubmitButton
      text="Авторизоваться"
      :buttonClickHandler="submitButtonClickHandler"
    />
  </form>
</template>

<script>
// подключение тестовых данных
import user from "@/static/user.json";

// импортируем компоненты
import FormInput from "@/common/components/FormInput.vue";
import SubmitButton from "@/common/components/SubmitButton.vue";
import { AUTH_FORM_INPUT_DATA } from "@/common/constants";

import { mapState, mapMutations } from "vuex";
import { SELECT_USER } from "@/store/mutation-types";

import validator from "@/common/mixins/validator";

export default {
  name: "AuthForm",
  // получение свойств из родительского компонента
  props: {
    login: {
      type: Function,
      default: () => {},
    },
  },
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
  // подключаем миксины
  mixins: [validator],
  // дополнительные функции
  computed: {
    ...mapState("Auth", ["user"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Auth", {
      selectUser: SELECT_USER,
    }),
    inputChangeHandler(event, field) {
      this[field] = event.target.value;
    },
    submitButtonClickHandler() {
      if (this.email === user.email && this.password === user.pass) {
        this.selectUser(user);
        this.$router.push({ name: "Index" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
