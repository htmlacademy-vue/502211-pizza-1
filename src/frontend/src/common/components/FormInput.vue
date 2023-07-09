<template>
  <div>
    <label class="input" :class="labelClass">
      <span :class="spanClass">{{ text }}</span>
      <input
        v-if="!slotProvided"
        ref="input"
        :type="inputType"
        :name="inputName"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @change="(event) => inputChangeHandler(event, inputName)"
      />
      <slot />
    </label>
  </div>
</template>

<script>
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
    readonly: {
      type: Boolean,
      default: false,
    },
    inputChangeHandler: {
      type: Function,
      default: () => {},
    },
  },
  // дополнительные функции
  computed: {
    slotProvided() {
      return Object.keys(this.$slots).length;
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="text"]:disabled {
  background-color: #cecece;
}
</style>
