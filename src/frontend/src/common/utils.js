import resources from "@/common/enums/resources";
import {
  AuthApiService,
  CrudApiService,
  ReadOnlyApiService,
} from "@/services/api.service";

export const createResources = () => {
  return {
    [resources.AUTH]: new AuthApiService(),
    [resources.DOUGH]: new ReadOnlyApiService(resources.DOUGH),
    [resources.SIZE]: new ReadOnlyApiService(resources.SIZE),
    [resources.SAUCE]: new ReadOnlyApiService(resources.SAUCE),
    [resources.INGREDIENTS]: new ReadOnlyApiService(resources.INGREDIENTS),
    [resources.MISC]: new ReadOnlyApiService(resources.MISC),
    [resources.ADDRESSES]: new CrudApiService(resources.ADDRESSES),
    [resources.ORDERS]: new CrudApiService(resources.ORDERS),
  };
};

export const setAuth = (store) => {
  store.$api.auth.setAuthHeader();
  store.dispatch("Auth/getMe");
};

export const isValidEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return email.match(pattern)?.length > 0;
};
