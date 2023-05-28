<template>
  <div>
    <label class="input" :class="labelClass">
      <span :class="spanClass">{{ text }}</span>
      <input
        :class="disabled ? 'disabled' : ''"
        v-if="!slotProvided"
        v-model="inputModel"
        :type="inputType"
        :name="inputName"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        :disabled="disabled"
        @change="(event) => inputChangeHandler(event, inputName)"
        @input="$emit('input', $event.target.value)"
      />
      <span v-if="showError" class="text-field__text">
        {{ errorText }}
      </span>
      <slot />
    </label>
  </div>
</template>

<script>
import validator from "@/common/mixins/validator";

export default {
  name: "FormInput",
  // получение свойств из родительского компонента
  props: {
    text: {
      type: String,
      required: true,
    },
    labelClass: {
      type: String,
      default: "",
    },
    spanClass: {
      type: String,
      default: "",
    },
    inputModel: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "",
    },
    inputName: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    errorText: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputChangeHandler: {
      type: Function,
      default: () => {},
    },
  },
  // подключаем миксины
  mixins: [validator],
  // дополнительные функции
  computed: {
    slotProvided() {
      return Object.keys(this.$slots).length;
    },
    showError() {
      return !!this.errorText;
    },
  },
};
</script>

<style lang="scss" scoped>
.disabled {
  background-color: #cecece;
}
</style>
