import { ITEMS_INPUT_DATA, MAX_INGREDIENTS_NUMBER } from "@/common/constants";
import { getCountSum } from "@/common/utils";

// подключение типов мутаций
import {
  UPDATE_DOUGH_VALUE,
  UPDATE_SAUCE_VALUE,
  UPDATE_SIZE_VALUE,
  SET_INGREDIENT_COUNT,
  DECREASE_INGREDIENT_COUNT,
  INCREASE_INGREDIENT_COUNT,
  FETCH_PIZZAS,
  SET_EDITING_PIZZA,
  FETCH_MISC,
  CLEAR_FABRIC,
  UPDATE_NAME,
} from "@/store/mutation-types";

// подключение тестовых данных
import jsonPizzas from "@/static/pizza.json";
import jsonMisc from "@/static/misc.json";

// состояние по умолчанию
export const defaultState = () => ({
  pizzas: {},
  misc: {},
  selectedIngredients: {},
  currentDough: ITEMS_INPUT_DATA.DOUGH.DEFAULT_RADIO_CHECK,
  currentSauce: ITEMS_INPUT_DATA.SAUCE.DEFAULT_RADIO_CHECK,
  currentSize: ITEMS_INPUT_DATA.SIZE.DEFAULT_RADIO_CHECK,
  pizzaName: "",
  editingPizza: null,
});

const getters = {
  totalPizzaPrice(state) {
    const multiplier = state.pizzas.sizes.find(
      (it) => it.name === state.currentSize
    ).multiplier;

    const doughPrice = state.pizzas.dough.find(
      (it) => it.name === state.currentDough
    ).price;

    const saucePrice = state.pizzas.sauces.find(
      (it) => it.name === state.currentSauce
    ).price;

    const ingredientsPrice = getCountSum(
      Object.values(state.selectedIngredients)
    );

    return multiplier * (doughPrice + saucePrice + ingredientsPrice);
  },
};

const actions = {
  // инициализация первичных данных приложения
  async init({ dispatch }) {
    dispatch("fetchPizzas");
    dispatch("fetchMisc");
  },
  // получение списка пицц
  fetchPizzas({ commit }) {
    const pizzas = jsonPizzas;

    commit(FETCH_PIZZAS, pizzas);
  },
  // получение списка доп. продуктов
  fetchMisc({ commit }) {
    const misc = jsonMisc;

    commit(FETCH_MISC, misc);
  },
};

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
    const selectedIngredients = { ...state.selectedIngredients };
    const ingredientName = item.name;

    if (count > MAX_INGREDIENTS_NUMBER) {
      count = MAX_INGREDIENTS_NUMBER;
    }

    if (count !== 0) {
      selectedIngredients[ingredientName] = state.pizzas.ingredients.find(
        (it) => it.name === ingredientName
      );
      selectedIngredients[ingredientName].amount = count;
    } else {
      delete selectedIngredients[ingredientName];
    }

    state.selectedIngredients = { ...selectedIngredients };
  },

  [DECREASE_INGREDIENT_COUNT](state, ingredient) {
    const selectedIngredients = { ...state.selectedIngredients };
    const ingredientName = ingredient.name;
    const count = --selectedIngredients[ingredientName].amount;

    if (count !== 0) {
      ingredient.amount = count;
      selectedIngredients[ingredientName] = ingredient;
    } else {
      delete selectedIngredients[ingredientName];
    }

    state.selectedIngredients = { ...selectedIngredients };
  },

  [INCREASE_INGREDIENT_COUNT](state, ingredient) {
    const selectedIngredients = { ...state.selectedIngredients };
    const ingredientName = ingredient.name;

    if (selectedIngredients[ingredientName]) {
      selectedIngredients[ingredientName].amount++;
    } else {
      selectedIngredients[ingredientName] = ingredient;
      selectedIngredients[ingredientName].amount = 1;
    }

    state.selectedIngredients = { ...selectedIngredients };
  },

  [FETCH_PIZZAS](state, items) {
    state.pizzas = items;
  },

  [SET_EDITING_PIZZA](state, status) {
    state.editingPizza = status;
  },

  [FETCH_MISC](state, items) {
    state.misc = items;
  },

  [CLEAR_FABRIC](state) {
    state.selectedIngredients = {};
    state.currentDough = ITEMS_INPUT_DATA.DOUGH.DEFAULT_RADIO_CHECK;
    state.currentSauce = ITEMS_INPUT_DATA.SAUCE.DEFAULT_RADIO_CHECK;
    state.currentSize = ITEMS_INPUT_DATA.SIZE.DEFAULT_RADIO_CHECK;
    state.pizzaName = "";
  },

  [UPDATE_NAME](state, name) {
    state.pizzaName = name;
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  getters,
  actions,
  mutations,
};
