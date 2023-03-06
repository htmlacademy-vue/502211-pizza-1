import Vue from "vue";
import Vuex from "vuex";

// импорт модулей
import modules from "@/store/modules";

// импорт типов мутаций
import { RESET_STORE } from "@/store/mutation-types";

import { resetState as resetAuthState } from "@/store/modules/auth.store";
import { resetState as resetBuilderState } from "@/store/modules/builder.store";
import { resetState as resetCartState } from "@/store/modules/cart.store";
import { resetState as resetOrdersState } from "@/store/modules/orders.store";

Vue.use(Vuex);

const resetState = () => ({
  Auth: resetAuthState(),
  Builder: resetBuilderState(),
  Cart: resetCartState(),
  Orders: resetOrdersState(),
});

const mutations = {
  [RESET_STORE](state) {
    Object.assign(state, resetState());
  },
};

export default new Vuex.Store({
  modules,
  mutations,
});
