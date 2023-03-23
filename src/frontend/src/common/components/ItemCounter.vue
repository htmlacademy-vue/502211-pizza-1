<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="count === minCount"
      @click="minusButtonClickHandler(item)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="itemCount"
      @change="counterChangeHandler"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="additionalPlusButtonClass"
      :disabled="count === maxCount"
      @click="plusButtonClickHandler(item)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { MAX_INGREDIENTS_NUMBER } from "../constants";

export default {
  name: "ItemCounter",
  // получение свойств из родительского компонента
  props: {
    count: {
      type: Number,
      default: 0,
    },
    minCount: {
      type: Number,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
    plusButtonClickHandler: {
      type: Function,
      required: true,
    },
    minusButtonClickHandler: {
      type: Function,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    inputChangeHandler: {
      type: Function,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    additionalPlusButtonClass() {
      if (this.$router.currentRoute.name !== "Index") {
        return "counter__button--orange";
      } else {
        return null;
      }
    },
    itemCount() {
      return this.count;
    },
  },
  // добавили методы
  methods: {
    counterChangeHandler(event) {
      let value = parseInt(event.target.value);
      const isInputValid =
        String(parseInt(event.target.value)).length ===
        event.target.value.length;

      if (!isInputValid) {
        return;
      }

      if (value < 0) {
        value = 0;
      } else if (
        event.target.value >= 0 &&
        event.target.value <= MAX_INGREDIENTS_NUMBER
      ) {
        value = parseInt(value);
      } else if (value > MAX_INGREDIENTS_NUMBER) {
        value = MAX_INGREDIENTS_NUMBER;
      }

      this.inputChangeHandler({
        count: value,
        item: this.item,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
