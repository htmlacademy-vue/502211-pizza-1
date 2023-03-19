import {
  DELIVERY_DEFAULT_TYPE,
  MAX_INGREDIENTS_NUMBER,
} from "@/common/constants";
import { getCountSum } from "@/common/utils";

// подключение типов мутаций
import {
  SET_PIZZA_COUNT,
  UPDATE_EXISTING_PIZZA,
  DECREASE_PIZZA_COUNT,
  INCREASE_PIZZA_COUNT,
  ADD_TO_CART,
  SET_DELIVERY_TYPE,
  SET_DELIVERY_ADDRESS,
  UPDATE_STREET_VALUE,
  UPDATE_HOUSE_VALUE,
  UPDATE_APARTMENT_VALUE,
} from "@/store/mutation-types";

// состояние по умолчанию
export const resetState = () => ({
  cart: [],
  deliveryType: DELIVERY_DEFAULT_TYPE,
  currentDeliveryAddress: null,
});

const getters = {
  totalOrderPrice(state, _, rootState) {
    const pizzasPrice = getCountSum(state.cart);
    const miscPrice = getCountSum(Object.values(rootState.Orders.selectedMisc));

    return pizzasPrice + miscPrice;
  },
};

const mutations = {
  [SET_PIZZA_COUNT](state, { count, item }) {
    const cart = [...state.cart];
    const targetPizzaIndex = cart.findIndex((it) => it.name === item.name);
    const targetPizza = cart[targetPizzaIndex];

    targetPizza.amount = count;
    cart[targetPizzaIndex] = targetPizza;
    state.cart = cart;
  },

  [UPDATE_EXISTING_PIZZA](state, pizza) {
    const cart = [...state.cart];
    const oldPizzaIndex = cart.findIndex((it) => it.id === pizza.id);

    cart[oldPizzaIndex] = pizza;
    state.cart = cart;
  },

  [DECREASE_PIZZA_COUNT](state, pizza) {
    const cart = [...state.cart];
    const targetPizzaIndex = cart.findIndex((it) => it.name === pizza.name);
    const targetPizza = cart[targetPizzaIndex];

    if (targetPizza.amount !== 0) {
      targetPizza.amount--;
      cart[targetPizzaIndex] = targetPizza;
      state.cart = cart;
    }
  },

  [INCREASE_PIZZA_COUNT](state, pizza) {
    const cart = [...state.cart];
    const targetPizzaIndex = cart.findIndex((it) => it.name === pizza.name);
    const targetPizza = cart[targetPizzaIndex];

    if (targetPizza.amount !== MAX_INGREDIENTS_NUMBER) {
      targetPizza.amount++;
      cart[targetPizzaIndex] = targetPizza;
      state.cart = cart;
    }
  },

  [ADD_TO_CART](state, item) {
    if (Array.isArray(item)) {
      state.cart = [...state.cart, ...item];
    } else {
      state.cart = [...state.cart, item];
    }
  },

  [SET_DELIVERY_TYPE](state, type) {
    state.deliveryType = type;
  },

  [SET_DELIVERY_ADDRESS](state, address) {
    state.currentDeliveryAddress = address;
  },

  [UPDATE_STREET_VALUE](state, event) {
    state.currentDeliveryAddress = {
      ...state.currentDeliveryAddress,
      street: event.target.value,
    };
  },

  [UPDATE_HOUSE_VALUE](state, event) {
    state.currentDeliveryAddress = {
      ...state.currentDeliveryAddress,
      house: event.target.value,
    };
  },

  [UPDATE_APARTMENT_VALUE](state, event) {
    state.currentDeliveryAddress = {
      ...state.currentDeliveryAddress,
      apartment: event.target.value,
    };
  },
};

export default {
  namespaced: true,
  state: resetState(),
  getters,
  mutations,
};
