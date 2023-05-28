<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <RadioButton
          :items="sauces"
          :itemMap="sauceMap"
          :itemName="ITEMS_INPUT_DATA.SAUCE.ITEM_NAME"
          :containerMessage="ITEMS_INPUT_DATA.SAUCE.CONTAINER_MESSAGE"
          :value="currentSauce"
          :inputChangeHandler="updateSauceValue"
        />

        <IngredientsFilling />
      </div>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import IngredientsFilling from "@/modules/builder/components/BuilderIngredientsFillingSelector.vue";
import RadioButton from "@/common/components/RadioButton.vue";
import { sauceMap, ITEMS_INPUT_DATA } from "@/common/constants";

import { mapState, mapMutations } from "vuex";
import { UPDATE_SAUCE_VALUE } from "@/store/mutation-types";

export default {
  name: "IngredientsSelector",
  // подключаем данные
  data() {
    return {
      sauceMap,
      ITEMS_INPUT_DATA,
    };
  },
  // подключаем компоненты
  components: {
    IngredientsFilling,
    RadioButton,
  },
  // дополнительные функции
  computed: {
    ...mapState("Builder", ["pizzas"]),
    ...mapState("Builder", ["currentSauce"]),

    sauces() {
      return this.pizzas.sauces;
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      updateSauceValue: UPDATE_SAUCE_VALUE,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
