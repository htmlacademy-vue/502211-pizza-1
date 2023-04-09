// подключение типов мутаций
import { CHANGE_AUTH_STATUS } from "@/store/mutation-types";

// подключение тестовых данных
import user from "@/static/user.json";

// состояние по умолчанию
export const defaultState = () => ({
  user,
  isAuthorized: false,
});

const getters = {
  isAuthorizes(state) {
    return state.user !== null;
  },
};

const mutations = {
  [CHANGE_AUTH_STATUS](state, status) {
    state.isAuthorized = status;
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  getters,
  mutations,
};
