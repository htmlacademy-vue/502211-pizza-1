// подключение типов мутаций
import { SELECT_USER } from "@/store/mutation-types";

// состояние по умолчанию
export const defaultState = () => ({
  user: null,
});

const getters = {
  isAuthorizes(state) {
    return state.user !== null;
  },
};

const mutations = {
  [SELECT_USER](state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  getters,
  mutations,
};
