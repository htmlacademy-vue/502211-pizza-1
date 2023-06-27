// подключение типов мутаций
import { CHANGE_AUTH_STATUS, SELECT_USER } from "@/store/mutation-types";

// состояние по умолчанию
export const defaultState = () => ({
  user: null,
  isAuthenticated: false,
});

const actions = {
  // во время успешного логина:
  async login({ dispatch }, credentials) {
    const data = await this.$api.auth.login(credentials);
    // 1. получаем с сервера токен и сохраняем его в LocalStorage
    this.$jwt.saveToken(data.token);
    // 2. Добавляем заголовок авторизации в axios
    this.$api.auth.setAuthHeader();
    // 3. Отправляем запрос на получение профиля пользователя
    dispatch("getMe");
  },

  // Во время логаута мы можем очистить токен только на фронтенде,
  // а можем также отправить запрос на сервер для логаута.
  // По умолчанию делаем логаут с запросом на сервер.
  async logout({ commit }, sendRequest = true) {
    if (sendRequest) {
      await this.$api.auth.logout();
    }

    // удаляем токен в LocalStorage
    this.$jwt.destroyToken();
    // Обновляем заголовок авторизации в axios (по факту очищаем его)
    this.$api.auth.setAuthHeader();
    // Очищаем объект пользователя
    commit(CHANGE_AUTH_STATUS, false);
    commit(SELECT_USER, null);
  },

  // Получаем данные авторизованного пользователя
  async getMe({ commit, dispatch }) {
    try {
      const data = await this.$api.auth.getMe();

      commit(CHANGE_AUTH_STATUS, true);
      commit(SELECT_USER, data);
      dispatch("Orders/fetchUserAddresses", null, { root: true });
      dispatch("Orders/fetchUserOrders", null, { root: true });
    } catch {
      // Если токен авторизации  невалиден, или мы не смогли получить
      // данные пользователя по другой причине, делаем логаут без запроса на логаут на сервер.
      dispatch("logout", false);
    }
  },
};

const mutations = {
  [CHANGE_AUTH_STATUS](state, status) {
    state.isAuthenticated = status;
  },
  [SELECT_USER](state, userData) {
    state.user = userData;
  },
};

export default {
  namespaced: true,
  state: defaultState(),
  actions,
  mutations,
};
