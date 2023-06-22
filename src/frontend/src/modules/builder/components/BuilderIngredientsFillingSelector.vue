<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul v-if="ingredients.length" class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag
          :isDraggable="isDraggable(ingredient)"
          :transferData="ingredient"
        >
          <SelectorItem
            class="filling"
            :class="`filling--${ingredientsMap[ingredient.name]}`"
            :text="ingredient.name"
          />
        </AppDrag>

        <ItemCounter
          class="counter--orange ingredients__counter"
          :count="
            itemsCounter(selectedIngredients, ingredient.id, 'ingredientId')
          "
          :item="ingredient"
          :minCount="0"
          :maxCount="MAX_INGREDIENTS_NUMBER"
          :inputChangeHandler="setIngredientCount"
          :minusButtonClickHandler="decreaseIngredientCount"
          :plusButtonClickHandler="increaseIngredientCount"
        />
      </li>
    </ul>
  </div>
</template>

<script>
// импортируем компоненты
import AppDrag from "@/common/components/AppDrag.vue";
import SelectorItem from "@/common/components/SelectorItem.vue";
import ItemCounter from "@/common/components/ItemCounter.vue";
import {
  ingredientsMap,
  ITEMS_INPUT_DATA,
  MAX_INGREDIENTS_NUMBER,
} from "@/common/constants";

import { mapState, mapGetters, mapMutations } from "vuex";
import {
  DECREASE_INGREDIENT_COUNT,
  INCREASE_INGREDIENT_COUNT,
  SET_INGREDIENT_COUNT,
} from "@/store/mutation-types";

export default {
  name: "IngredientsFillingSelector",
  // подключаем данные
  data() {
    return {
      ingredientsMap,
      ITEMS_INPUT_DATA,
      MAX_INGREDIENTS_NUMBER,
    };
  },
  // подключаем компоненты
  components: {
    AppDrag,
    SelectorItem,
    ItemCounter,
  },
  // дополнительные функции
  computed: {
    ...mapState(["ingredients"]),
    ...mapState("Builder", ["selectedIngredients"]),
    ...mapGetters(["itemsCounter"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      setIngredientCount: SET_INGREDIENT_COUNT,
      decreaseIngredientCount: DECREASE_INGREDIENT_COUNT,
      increaseIngredientCount: INCREASE_INGREDIENT_COUNT,
    }),

    isDraggable(ingredient) {
      return (
        this.itemsCounter(
          this.selectedIngredients,
          ingredient.id,
          "ingredientId"
        ) !== MAX_INGREDIENTS_NUMBER
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
