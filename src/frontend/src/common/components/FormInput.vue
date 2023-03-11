<template>
  <div>
    <label class="input" :class="labelClass">
      <span :class="spanClass">{{ text }}</span>
      <input
        :class="disabled ? 'disabled' : ''"
        v-if="!slotProvided"
        :type="inputType"
        :name="inputName"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        :disabled="disabled"
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
.disabled {
  background-color: #cecece;
}
</style>
