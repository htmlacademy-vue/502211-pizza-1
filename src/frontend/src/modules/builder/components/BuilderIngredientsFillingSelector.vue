<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul v-if="ingredients.length" class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag :transferData="ingredient">
          <SelectorItem
            class="filling"
            :class="`filling--${ingredientsMap[ingredient.name]}`"
            :text="ingredient.name"
          />
        </AppDrag>

        <ItemCounter
          :ingredient="selectedIngredients[ingredient.name]"
          :ingredientName="ingredient.name"
          :ingredients="ingredients"
          @update="$emit('update', $event)"
          @minusButtonClick="$emit('minusButtonClick', $event)"
          @plusButtonClick="$emit('plusButtonClick', $event)"
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
import { ingredientsMap, ITEMS_INPUT_DATA } from "@/common/constants";

export default {
  name: "IngredientsFillingSelector",
  // подключаем данные
  data() {
    return {
      ingredientsMap,
      ITEMS_INPUT_DATA,
    };
  },
  // подключаем компоненты
  components: {
    AppDrag,
    SelectorItem,
    ItemCounter,
  },
  // получение свойств из родительского компонента
  props: {
    ingredients: {
      type: Array,
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
