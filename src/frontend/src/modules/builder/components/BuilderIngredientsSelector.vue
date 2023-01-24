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
          @change="$emit('change', $event)"
        />

        <IngredientsFilling
          :ingredients="ingredients"
          :selectedIngredients="selectedIngredients"
          @update="$emit('update', $event)"
          @plusButtonClick="$emit('plusButtonClick', $event)"
          @minusButtonClick="$emit('minusButtonClick', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import IngredientsFilling from "./BuilderIngredientsFillingSelector.vue";
import RadioButton from "@/common/components/RadioButton.vue";
import { sauceMap, ITEMS_INPUT_DATA } from "@/common/constants";

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
  // получение свойств из родительского компонента
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    currentSauce: {
      type: String,
      required: true,
    },
    selectedIngredients: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
