<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <!-- Отрисовываем виды соусов -->
          <label
            v-for="sauce in sauces"
            :key="sauce.id"
            :title="sauce.name"
            class="radio ingredients__input"
          >
            <RadioButton
              name="sauce"
              value="tomato"
              :checked="sauces.id === sauces[0].id"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>
          <!-- Отрисовываем виды начинки -->
          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              :title="ingredient.name"
              class="ingredients__item"
            >
              <SelectorItem :ingredient="ingredient" />

              <ItemCounter :ingredient="ingredient" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import SelectorItem from "@/common/components/SelectorItem";
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderIngredientsSelector",
  // подключаем компоненты
  components: {
    SelectorItem,
    ItemCounter,
    RadioButton,
  },
  // получение свойств из родительского компонента
  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
