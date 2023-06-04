import { SIDEBAR_MENU } from "@/common/constants";

// подключение типов мутаций
import {
  FETCH_USER_ORDERS,
  ADD_NEW_ORDER,
  DELETE_ORDER,
  SET_EDITING_ADDRESS,
  FETCH_USER_ADDRESSES,
  ADD_NEW_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
  CHANGE_SHOW_MODAL_STATUS,
  CHANGE_ACTIVE_SIDEBAR_MENU,
} from "@/store/mutation-types";

// состояние по умолчанию
export const defaultState = (state) => ({
  showModal: false,
  editingAddress: -1,
  userOrders: state["Orders"].userOrders,
  userAddresses: state["Orders"].userAddresses,
  activeSidebarMenu: state["Orders"].activeSidebarMenu,
});

export const setupState = () => ({
  showModal: false,
  editingAddress: -1,
  userOrders: [],
  userAddresses: [],
  activeSidebarMenu: SIDEBAR_MENU.USER_DATA.LABEL,
});

const actions = {
  // получение адреса пользователя
  async fetchUserAddresses({ commit }) {
    const addresses = await this.$api.addresses.query();

    commit(FETCH_USER_ADDRESSES, addresses);
  },

  // получение адреса пользователя
  async fetchUserOrders({ commit }) {
    const orders = await this.$api.orders.query();

    commit(FETCH_USER_ORDERS, orders);
  },

  // создение нового адреса пользователя
  async postAddress({ commit }, newAddress) {
    const address = await this.$api.addresses.post(newAddress);

    commit(ADD_NEW_ADDRESS, address);
  },

  // обновление адреса пользователя
  async putAddress({ commit }, updatedAddress) {
    await this.$api.addresses.put(updatedAddress);

    commit(EDIT_ADDRESS, updatedAddress);
  },

  // удаление адреса пользователя
  async deleteAddress({ commit }, id) {
    await this.$api.addresses.delete(id);

    commit(DELETE_ADDRESS, id);
  },

  // создание заказа пользователя
  async postOrder(_, newOrder) {
    await this.$api.orders.post(newOrder);
  },

  // удалание заказа пользователя
  async deleteOrder({ commit }, id) {
    await this.$api.orders.delete(id);

    commit(DELETE_ORDER, id);
  },
};

const mutations = {
  [FETCH_USER_ORDERS](state, orders) {
    state.userOrders = orders;
  },

  [ADD_NEW_ORDER](state, order) {
    state.userOrders = [...state.userOrders, order];
  },

  [DELETE_ORDER](state, id) {
    state.userOrders = state.userOrders.filter((it) => it.id !== id);
  },

  [SET_EDITING_ADDRESS](state, id) {
    state.editingAddress = id;
  },

  [FETCH_USER_ADDRESSES](state, addresses) {
    state.userAddresses = addresses;
  },

  [ADD_NEW_ADDRESS](state, address) {
    state.userAddresses = [...state.userAddresses, address];
  },

  [EDIT_ADDRESS](state, address) {
    const userAddresses = [...state.userAddresses];
    const editIndex = userAddresses.findIndex((it) => it.id === address.id);

    userAddresses[editIndex] = address;
    state.userAddresses = userAddresses;
  },

  [DELETE_ADDRESS](state, id) {
    state.userAddresses = [...state.userAddresses.filter((it) => it.id !== id)];
  },

  [CHANGE_SHOW_MODAL_STATUS](state, status) {
    state.showModal = status;
  },

  [CHANGE_ACTIVE_SIDEBAR_MENU](state, activeMenu) {
    state.activeSidebarMenu = activeMenu;
  },
};

export default {
  namespaced: true,
  state: setupState(),
  actions,
  mutations,
};
