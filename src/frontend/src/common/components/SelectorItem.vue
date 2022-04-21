<template>
  <AppDrag :transfer-data="ingredient" :disabled="isDisabled">
    <span class="filling" :class="`filling--${getNameImg(ingredient)}`">
      {{ ingredient.name }}
    </span>
  </AppDrag>
</template>

<script>
// импортируем компоненты
import AppDrag from "@/common/components/AppDrag";

export default {
  name: "SelectorItem",
  // подключаем компоненты
  components: {
    AppDrag,
  },
  // получение свойств из родительского компонента
  props: {
    ingredient: {
      type: Object,
      default: () => {},
    },
  },
  // дополнительные функции
  computed: {
    isDisabled() {
      return this.ingredient.amount === 3;
    },
  },
  // добавили методы
  methods: {
    getNameImg({ image }) {
      const img = image.split(/[/\\./]+/);
      return img[img.length - 2];
    },
  },
};
</script>
