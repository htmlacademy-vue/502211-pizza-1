<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <!-- Отрисовываем виды теста -->
        <label
          v-for="pizza in dough"
          :key="pizza.id"
          :title="pizza.name"
          class="dough__input dough__input--light"
        >
          <RadioButton
            name="dough"
            value="light"
            :checked="pizza.id === dough[0].id"
          />
          <b>{{ pizza.name }}</b>
          <span>{{ pizza.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderDoughSelector",
  // подключаем компоненты
  components: {
    RadioButton,
  },
  // получение свойств из родительского компонента
  props: {
    dough: {
      type: Array,
      required: true,
    },
  },
};
</script>
