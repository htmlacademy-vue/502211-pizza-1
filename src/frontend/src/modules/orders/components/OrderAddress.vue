<template>
  <div>
    <div class="layout__address">
      <div
        v-if="editingAddress !== id && !isAddNewAddress"
        class="sheet address-form"
      >
        <div class="address-form__header">
          <b>{{ name }}</b>
          <div class="address-form__edit">
            <button
              type="button"
              class="icon"
              @click="editButtonClickHandler(id)"
            >
              <span class="visually-hidden">Изменить адрес</span>
            </button>
          </div>
        </div>
        <p>{{ address }}</p>
        <small>{{ comment }}</small>
      </div>

      <form
        v-else
        class="address-form address-form--opened sheet"
        @submit.prevent="formSubmitHandler"
      >
        <div v-if="!isAddNewAddress" class="address-form__header">
          <b>{{ name }}</b>
        </div>

        <div class="address-form__wrapper">
          <FormInput
            v-for="(formData, dataId) in ADDRESS_FORM_INPUT_DATA"
            :key="dataId"
            :class="`address-form__input ${formInputClassSize(
              additionalSizeClass,
              formData.size
            )}`"
            :text="formData.text"
            :inputType="formData.inputType"
            :inputName="`addr-${formData.inputName}`"
            :placeholder="formData.placeholder"
            :required="formData.required"
            :value="$props[formData.inputName]"
            :inputChangeHandler="inputChangeHandler"
          />
        </div>

        <div class="address-form__buttons">
          <button
            v-if="!isAddNewAddress"
            type="button"
            class="button button--transparent"
            @click="deleteAddressButtonClickHandler"
          >
            Удалить
          </button>
          <button type="submit" class="button">Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import FormInput from "@/common/components/FormInput.vue";
import { ADDRESS_FORM_INPUT_DATA } from "@/common/constants";

import { mapState, mapGetters } from "vuex";

export default {
  name: "OrderAddress",
  // получение свойств из родительского компонента
  props: {
    name: {
      type: String,
      default: "",
    },
    street: {
      type: String,
      default: "",
    },
    building: {
      type: String,
      default: "",
    },
    flat: {
      type: String,
      default: "",
    },
    comment: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: true,
    },
    isAddNewAddress: {
      type: Boolean,
      default: false,
    },
    inputChangeHandler: {
      type: Function,
      default: () => {},
    },
    formSubmitHandler: {
      type: Function,
      default: () => {},
    },
    editButtonClickHandler: {
      type: Function,
      default: () => {},
    },
    deleteAddressButtonClickHandler: {
      type: Function,
      default: () => {},
    },
  },
  // подключаем данные
  data() {
    return {
      ADDRESS_FORM_INPUT_DATA,
      additionalSizeClass: "address-form__input--size",
    };
  },
  // подключаем компоненты
  components: {
    FormInput,
  },
  // дополнительные функции
  computed: {
    ...mapState("Orders", ["editingAddress"]),
    ...mapGetters(["formInputClassSize", "getFullAddress"]),

    address() {
      const data = {
        street: this.street,
        building: this.building,
        flat: this.flat,
      };

      return this.getFullAddress(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
