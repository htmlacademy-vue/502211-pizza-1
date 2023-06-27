import { DELIVERY_DEFAULT_TYPE } from "@/common/constants";

// подключение типов мутаций
import {
  SET_PIZZA_COUNT,
  DECREASE_PIZZA_COUNT,
  INCREASE_PIZZA_COUNT,
  UPDATE_EXISTING_PIZZA,
  SET_MISC_COUNT,
  DECREASE_MISC_COUNT,
  INCREASE_MISC_COUNT,
  ADD_ORDER_MISC,
  ADD_TO_CART,
  SET_DELIVERY_TYPE,
  SET_DELIVERY_ADDRESS,
  UPDATE_STREET_VALUE,
  UPDATE_HOUSE_VALUE,
  UPDATE_APARTMENT_VALUE,
  UPDATE_PHONE_VALUE,
} from "@/store/mutation-types";

// состояние по умолчанию
export const defaultState = () => ({
  cart: [],
  selectedMisc: [],
  deliveryType: DELIVERY_DEFAULT_TYPE,
  currentDeliveryAddress: null,
  phone: "",
});

const getters = {
  totalOrderPrice(state, _, rootState, rootGetters) {
    const pizzasPrice = state.cart.reduce((prev, curr) => {
      return (
        prev +
        rootGetters.totalPizzaPrice(
          curr.sizeId,
          curr.doughId,
          curr.sauceId,
          curr.ingredients,
          rootGetters.getEntityById
        ) *
          curr.quantity
      );
    }, 0);
    const miscPrice = rootGetters.getCountSum(
      state.selectedMisc,
      rootState.misc
    );

    return pizzasPrice + miscPrice;
  },
};

const mutations = {
  [SET_PIZZA_COUNT](state, { count, item }) {
    const cart = [...state.cart];
    const targetPizzaIndex = cart.findIndex((it) => it.name === item.name);
    const targetPizza = cart[targetPizzaIndex];

    targetPizza.quantity = count;

    if (count !== 0) {
      cart[targetPizzaIndex] = targetPizza;
      state.cart = cart;
    } else {
      state.cart = cart.filter((it) => it.name !== item.name);
    }
  },

  [DECREASE_PIZZA_COUNT](state, pizza) {
    const cart = [...state.cart];
    const targetPizzaIndex = cart.findIndex((it) => it.name === pizza.name);
    const targetPizza = cart[targetPizzaIndex];

    if (targetPizza.quantity !== 0) {
      targetPizza.quantity--;
      cart[targetPizzaIndex] = targetPizza;
      state.cart = cart;
    } else {
      state.cart = cart.filter((it) => it.name !== pizza.name);
    }
  },

  [INCREASE_PIZZA_COUNT](state, pizza) {
    const cart = [...state.cart];
    const targetPizzaIndex = cart.findIndex((it) => it.name === pizza.name);
    const targetPizza = cart[targetPizzaIndex];

    targetPizza.quantity++;
    cart[targetPizzaIndex] = targetPizza;
    state.cart = cart;
  },

  [UPDATE_EXISTING_PIZZA](state, pizza) {
    const cart = [...state.cart];
    const oldPizzaIndex = cart.findIndex((it) => it.id === pizza.id);

    cart[oldPizzaIndex] = pizza;
    state.cart = cart;
  },

  [SET_MISC_COUNT](state, { count, item }) {
    let selectedMisc = [...state.selectedMisc];
    const miscIndex = selectedMisc.findIndex((it) => it.miscId === item.id);

    if (miscIndex !== -1) {
      if (count !== 0) {
        selectedMisc[miscIndex].quantity = count;
      } else {
        selectedMisc = selectedMisc.filter((it) => it.miscId !== item.id);
      }
    } else {
      selectedMisc.push({
        miscId: item.id,
        quantity: count,
      });
    }

    state.selectedMisc = selectedMisc;
  },

  [DECREASE_MISC_COUNT](state, misc) {
    let selectedMisc = [...state.selectedMisc];
    const miscIndex = selectedMisc.findIndex((it) => it.miscId === misc.id);

    selectedMisc[miscIndex].quantity--;

    if (selectedMisc[miscIndex].quantity === 0) {
      selectedMisc = selectedMisc.filter((it) => it.miscId !== misc.id);
    }

    state.selectedMisc = selectedMisc;
  },

  [INCREASE_MISC_COUNT](state, misc) {
    const selectedMisc = [...state.selectedMisc];
    const miscIndex = selectedMisc.findIndex((it) => it.miscId === misc.id);

    if (miscIndex !== -1) {
      selectedMisc[miscIndex].quantity++;
    } else {
      selectedMisc.push({
        miscId: misc.id,
        quantity: 1,
      });
    }

    state.selectedMisc = selectedMisc;
  },

  [ADD_ORDER_MISC](state, misc) {
    state.selectedMisc = misc;
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
      building: event.target.value,
    };
  },

  [UPDATE_APARTMENT_VALUE](state, event) {
    state.currentDeliveryAddress = {
      ...state.currentDeliveryAddress,
      flat: event.target.value,
    };
  },

  [UPDATE_PHONE_VALUE](state, event) {
    state.phone = event.target.value;
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  getters,
  mutations,
};
