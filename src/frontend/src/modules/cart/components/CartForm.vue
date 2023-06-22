<template>
  <div class="cart__form">
    <div class="cart-form">
      <FormInput
        labelClass="cart-form__select"
        spanClass="cart-form__label"
        text="Получение заказа:"
      >
        <select name="test" class="select" @change="selectChangeHandler">
          <option
            v-for="(option, id) in selectOptions"
            :key="id"
            :value="option.id"
            :selected="deliveryType === option.name"
          >
            {{ option.name }}
          </option>
        </select>
      </FormInput>

      <FormInput
        labelClass="input--big-label"
        text="Контактный телефон:"
        inputType="text"
        inputName="tel"
        placeholder="+7 999-999-99-99"
        :required="true"
        :value="phone"
        :inputChangeHandler="updatePhoneValue"
      />

      <div
        v-if="deliveryType !== OPTIONS.GET_BY_MYSELF"
        class="cart-form__address"
      >
        <span class="cart-form__label">{{ cartFormAddressLabel }}</span>

        <FormInput
          v-for="(formData, dataId) in CART_ADDRESS_FORM_INPUT_DATA"
          :key="dataId"
          :class="`cart-form__input ${formInputClassSize(
            additionalSizeClass,
            formData.size
          )}`"
          :text="formData.text"
          :inputType="formData.inputType"
          :inputName="formData.inputName"
          :required="formData.required"
          :value="cartFormInputValue(formData)"
          :disabled="!isDefaultOption"
          :inputChangeHandler="deliveryFormInputHandler(formData.inputName)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import FormInput from "@/common/components/FormInput.vue";
import {
  UNAUTHORIZED_OPTIONS,
  OPTIONS,
  CART_ADDRESS_FORM_INPUT_DATA,
} from "@/common/constants";

import { mapState, mapGetters, mapMutations } from "vuex";
import {
  SET_DELIVERY_TYPE,
  SET_DELIVERY_ADDRESS,
  UPDATE_STREET_VALUE,
  UPDATE_HOUSE_VALUE,
  UPDATE_APARTMENT_VALUE,
  UPDATE_PHONE_VALUE,
} from "@/store/mutation-types";

export default {
  name: "CartForm",
  // подключаем данные
  data() {
    return {
      OPTIONS,
      CART_ADDRESS_FORM_INPUT_DATA,
      additionalSizeClass: "cart-form__input",
    };
  },
  // подключаем компоненты
  components: {
    FormInput,
  },
  // дополнительные функции
  computed: {
    ...mapState("Cart", ["deliveryType", "currentDeliveryAddress", "phone"]),
    ...mapState("Orders", ["userAddresses"]),
    ...mapState("Auth", ["isAuthenticated"]),
    ...mapGetters(["formInputClassSize"]),

    selectOptions() {
      return this.isAuthenticated
        ? [
            ...UNAUTHORIZED_OPTIONS,
            ...this.userAddresses.map((it) => ({
              name: it.name,
              id: it.id,
            })),
          ]
        : UNAUTHORIZED_OPTIONS;
    },
    cartFormAddressLabel() {
      if (!this.isDefaultOption(this.deliveryType)) {
        return "Адрес:";
      }

      return "Новый адрес:";
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      setDeliveryType: SET_DELIVERY_TYPE,
      setDeliveryAddress: SET_DELIVERY_ADDRESS,
      updateStreetValue: UPDATE_STREET_VALUE,
      updateHouseValue: UPDATE_HOUSE_VALUE,
      updateApartmentValue: UPDATE_APARTMENT_VALUE,
      updatePhoneValue: UPDATE_PHONE_VALUE,
    }),

    isDefaultOption(option) {
      return Object.values(OPTIONS).includes(option);
    },
    selectChangeHandler(event) {
      const selectedOption = {
        name: event.target.selectedOptions[0].text,
        id: parseInt(event.target.selectedOptions[0].value),
      };

      this.setDeliveryType(selectedOption.name);

      if (this.isDefaultOption(selectedOption.name)) {
        this.setDeliveryAddress(null);
      }

      if (!this.isDefaultOption(selectedOption.name)) {
        const currentAddress = this.userAddresses.find(
          (it) => it.id === selectedOption.id
        );

        this.setDeliveryAddress(currentAddress);
      }
    },
    deliveryFormInputHandler(inputName) {
      const INPUT_HANDLER_MAP = {
        street: this.updateStreetValue,
        building: this.updateHouseValue,
        flat: this.updateApartmentValue,
        phone: this.updatePhoneValue,
      };

      return INPUT_HANDLER_MAP[inputName];
    },
    cartFormInputValue(formData) {
      if (this.currentDeliveryAddress !== null) {
        return this.currentDeliveryAddress[formData.inputName] ?? "";
      }

      return this.isDefaultOption
        ? ""
        : this.currentDeliveryAddress[formData.inputName];
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-form {
  justify-content: space-between;
}
</style>
