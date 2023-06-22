<template>
  <div v-if="items.length" :class="containerClass">
    <p v-if="containerMessage && containerMessage.length > 0">
      {{ containerMessage }}
    </p>
    <label v-for="item in items" :key="item.id" :class="labelClass(item.name)">
      <input
        type="radio"
        class="visually-hidden"
        :name="itemName"
        :value="item.id"
        :class="inputClass"
        :checked="item.id === value"
        @change="radioInputChangeHandler"
      />
      <b v-if="checkIsDoughComponent">
        {{ item.name }}
      </b>
      <SelectorItem
        :text="checkIsDoughComponent ? item.description : item.name"
      />
    </label>
  </div>
</template>

<script>
// импортируем компоненты
import SelectorItem from "@/common/components/SelectorItem.vue";

export default {
  name: "RadioButton",
  // подключаем компоненты
  components: {
    SelectorItem,
  },
  // получение свойств из родительского компонента
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemMap: {
      type: Object,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    containerMessage: {
      type: String,
      required: false,
    },
    value: {
      type: Number,
      required: true,
    },
    inputChangeHandler: {
      type: Function,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    containerClass() {
      return this.itemName === "sauce"
        ? "ingredients__sauce"
        : `sheet__content ${this.itemName}`;
    },
    inputClass() {
      return this.itemName === "sauce" ? "" : "visually-hidden";
    },
    checkIsDoughComponent() {
      return this.itemName === "dough";
    },
  },
  // добавили методы
  methods: {
    labelClass(name) {
      return this.itemName === "sauce"
        ? "ingredients__input radio"
        : `${this.itemName}__input ${this.itemName}__input--${this.itemMap[name]}`;
    },
    radioInputChangeHandler(event) {
      const itemId = this.items.find(
        (it) => it.id === parseInt(event.target.value)
      ).id;
      this.inputChangeHandler(itemId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
