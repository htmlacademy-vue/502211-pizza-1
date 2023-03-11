<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <RadioButton
        :items="dough"
        :itemMap="doughMap"
        :itemName="ITEMS_INPUT_DATA.DOUGH.ITEM_NAME"
        :value="currentDough"
        :inputChangeHandler="updateDoughValue"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { UPDATE_DOUGH_VALUE } from "@/store/mutation-types";

// импортируем компоненты
import RadioButton from "@/common/components/RadioButton";
import { doughMap, ITEMS_INPUT_DATA } from "@/common/constants";

export default {
  name: "DoughSelector",
  // подключаем данные
  data() {
    return {
      doughMap,
      ITEMS_INPUT_DATA,
    };
  },
  // подключаем компоненты
  components: {
    RadioButton,
  },
  // дополнительные функции
  computed: {
    ...mapState("Builder", ["pizzas"]),
    ...mapState("Builder", ["currentDough"]),

    dough() {
      return this.pizzas.dough;
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      updateDoughValue: UPDATE_DOUGH_VALUE,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
