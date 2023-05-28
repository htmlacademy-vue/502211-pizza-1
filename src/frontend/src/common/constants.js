export const ingredientsMap = {
  Ананас: "ananas",
  Бекон: "bacon",
  "Блю чиз": "blue_cheese",
  Ветчина: "ham",
  Грибы: "mushrooms",
  Лосось: "salmon",
  Лук: "onion",
  Маслины: "olives",
  Моцарелла: "mozzarella",
  Пармезан: "parmesan",
  Салями: "salami",
  Томаты: "tomatoes",
  Халапеньо: "jalapeno",
  Чеддер: "cheddar",
  Чили: "chile",
};

export const doughMap = {
  Тонкое: "light",
  Толстое: "large",
};

export const doughClassMap = {
  Тонкое: "small",
  Толстое: "big",
};

export const sizeMap = {
  "23 см": "small",
  "32 см": "normal",
  "45 см": "big",
};

export const sauceMap = {
  Томатный: "tomato",
  Сливочный: "creamy",
};

export const ITEMS_INPUT_DATA = {
  DOUGH: {
    DEFAULT_RADIO_CHECK: "Тонкое",
    ITEM_NAME: "dough",
  },
  SIZE: {
    DEFAULT_RADIO_CHECK: "32 см",
    ITEM_NAME: "diameter",
  },
  SAUCE: {
    DEFAULT_RADIO_CHECK: "Томатный",
    ITEM_NAME: "sauce",
    CONTAINER_MESSAGE: "Основной соус:",
  },
};

export const doughSpellingMap = {
  Толстое: "толстом",
  Тонкое: "тонком",
};

export const MAX_INGREDIENTS_NUMBER = 3;

export const SIDEBAR_MENU = {
  ORDER_HISTORY: {
    LABEL: "История заказов",
    LINK: "/orders",
  },
  USER_DATA: {
    LABEL: "Мои данные",
    LINK: "/profile",
  },
};

export const OPTIONS = {
  GET_BY_MYSELF: "Получу сам",
  NEW_ADDRESS: "Новый адрес",
};

export const DELIVERY_DEFAULT_TYPE = OPTIONS.GET_BY_MYSELF;

export const MAX_PIZZA_ID_NUMBER = 100000;

export const MIN_PIZZA_ID_NUMBER = 0;

export const addressProperySeparator = "-";

export const ADDRESS_FORM_INPUT_DATA = [
  {
    size: "",
    text: "Название адреса*",
    inputType: "text",
    inputName: "name",
    placeholder: "Введите название адреса",
    required: true,
  },
  {
    size: "normal",
    text: "Улица*",
    inputType: "text",
    inputName: "street",
    placeholder: "Введите название улицы",
    required: true,
  },
  {
    size: "small",
    text: "Дом*",
    inputType: "text",
    inputName: "house",
    placeholder: "Введите номер дома",
    required: true,
  },
  {
    size: "small",
    text: "Квартира",
    inputType: "text",
    inputName: "apartment",
    placeholder: "Введите № квартиры",
    required: false,
  },
  {
    size: "",
    text: "Комментарий",
    inputType: "text",
    inputName: "comment",
    placeholder: "Введите комментарий",
    required: false,
  },
];

export const AUTH_FORM_INPUT_DATA = [
  {
    size: "",
    text: "E-mail",
    inputModel: "email",
    inputType: "email",
    inputName: "email",
    placeholder: "example@mail.ru",
    validations: {
      error: "",
      rules: ["required", "email"],
    },
    required: true,
  },
  {
    size: "",
    text: "Пароль",
    inputModel: "password",
    inputType: "password",
    inputName: "pass",
    placeholder: "***********",
    validations: {
      error: "",
      rules: ["required"],
    },
    required: true,
  },
];

export const CART_ADDRESS_FORM_INPUT_DATA = [
  {
    size: "",
    text: "Улица*",
    inputType: "text",
    inputName: "street",
    placeholder: "Введите название улицы",
    required: true,
  },
  {
    size: "small",
    text: "Дом*",
    inputType: "text",
    inputName: "house",
    placeholder: "Введите номер дома",
    required: true,
  },
  {
    size: "small",
    text: "Квартира",
    inputType: "text",
    inputName: "apartment",
    placeholder: "Введите № квартиры",
    required: false,
  },
];

/* eslint-disable */
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* eslint-enable */
