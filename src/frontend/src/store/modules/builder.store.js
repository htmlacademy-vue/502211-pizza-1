import { MAX_INGREDIENTS_NUMBER } from "@/common/constants";

// подключение типов мутаций
import {
  UPDATE_DOUGH_VALUE,
  UPDATE_SAUCE_VALUE,
  UPDATE_SIZE_VALUE,
  SET_INGREDIENT_COUNT,
  DECREASE_INGREDIENT_COUNT,
  INCREASE_INGREDIENT_COUNT,
  ITEM_DROP,
  SET_EDITING_PIZZA,
  CLEAR_FABRIC,
  UPDATE_NAME,
} from "@/store/mutation-types";

// состояние по умолчанию
export const defaultState = () => ({
  selectedIngredients: [],
  currentDough: -1,
  currentSauce: -1,
  currentSize: -1,
  pizzaName: "",
  editingPizza: null,
});

const mutations = {
  [UPDATE_DOUGH_VALUE](state, value) {
    state.currentDough = value;
  },

  [UPDATE_SAUCE_VALUE](state, value) {
    state.currentSauce = value;
  },

  [UPDATE_SIZE_VALUE](state, value) {
    state.currentSize = value;
  },

  [SET_INGREDIENT_COUNT](state, { count, item }) {
    const selectedIngredients = [...state.selectedIngredients];
    const ingredientIndex = selectedIngredients.findIndex(
      (it) => it.ingredientId === item.id
    );

    if (count > MAX_INGREDIENTS_NUMBER) {
      count = MAX_INGREDIENTS_NUMBER;
    }

    if (ingredientIndex !== -1) {
      let ingredient = selectedIngredients[ingredientIndex];

      if (count !== 0) {
        ingredient.quantity = count;
      } else {
        ingredient = selectedIngredients.filter(
          (it) => it.ingredientId !== item.id
        );
      }

      selectedIngredients[ingredientIndex] = ingredient;
    } else {
      selectedIngredients.push({
        ingredientId: item.id,
        quantity: count,
      });
    }

    state.selectedIngredients = selectedIngredients;
  },

  [DECREASE_INGREDIENT_COUNT](state, ingredient) {
    const selectedIngredients = [...state.selectedIngredients];
    const ingredientIndex = selectedIngredients.findIndex(
      (it) => it.ingredientId === ingredient.id
    );
    const count = --selectedIngredients[ingredientIndex].quantity;
    let currentIngredient = selectedIngredients[ingredientIndex];

    if (count !== 0) {
      currentIngredient.quantity = count;
      selectedIngredients[ingredientIndex] = currentIngredient;
    } else {
      state.selectedIngredients = selectedIngredients.filter(
        (it) => it.ingredientId !== ingredient.id
      );
    }

    state.selectedIngredients = selectedIngredients;
  },

  [INCREASE_INGREDIENT_COUNT](state, ingredient) {
    const selectedIngredients = [...state.selectedIngredients];
    const ingredientIndex = selectedIngredients.findIndex(
      (it) => it.ingredientId === ingredient.id
    );

    if (ingredientIndex !== -1) {
      selectedIngredients[ingredientIndex].quantity++;
    } else {
      selectedIngredients.push({
        ingredientId: ingredient.id,
        quantity: 1,
      });
    }

    state.selectedIngredients = selectedIngredients;
  },

  [SET_EDITING_PIZZA](state, status) {
    state.editingPizza = status;
  },

  [ITEM_DROP](state, item) {
    const ingredients = [...state.selectedIngredients];
    const ingredientIndex = ingredients.findIndex(
      (it) => it.ingredientId === item.id
    );

    if (ingredientIndex !== -1) {
      const ingredient = ingredients[ingredientIndex];

      if (ingredient.quantity !== MAX_INGREDIENTS_NUMBER) {
        ingredient.quantity++;
      }
    } else {
      ingredients.push({
        ingredientId: item.id,
        quantity: 1,
      });
    }

    state.selectedIngredients = ingredients;
  },

  [CLEAR_FABRIC](state) {
    state.selectedIngredients = [];
    state.currentDough = 1;
    state.currentSauce = 1;
    state.currentSize = 1;
    state.pizzaName = "";
  },

  [UPDATE_NAME](state, name) {
    state.pizzaName = name;
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  mutations,
};
