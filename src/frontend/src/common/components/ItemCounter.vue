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
      :value="count"
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
    item: {
      type: Object,
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
        event.target.value <= this.maxCount
      ) {
        value = parseInt(value);
      } else if (value > this.maxCount) {
        value = this.maxCount;
      }

      this.$emit("inputChangeHandler", {
        count: value,
        item: this.item,
      });
    },
    minusButtonClickHandler() {
      this.$emit("minusButtonClickHandler", {
        item: this.item,
      });
    },
    plusButtonClickHandler() {
      this.$emit("plusButtonClickHandler", {
        item: this.item,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
