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

export const UNAUTHORIZED_OPTIONS = [
  {
    name: "Получу сам",
  },
  {
    name: "Новый адрес",
  },
];

export const DELIVERY_DEFAULT_TYPE = OPTIONS.GET_BY_MYSELF;

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
    inputName: "building",
    placeholder: "Введите номер дома",
    required: true,
  },
  {
    size: "small",
    text: "Квартира",
    inputType: "text",
    inputName: "flat",
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
    inputType: "email",
    inputName: "email",
    placeholder: "example@mail.ru",
    required: true,
  },
  {
    size: "",
    text: "Пароль",
    inputType: "password",
    inputName: "pass",
    placeholder: "***********",
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
    inputName: "building",
    placeholder: "Введите номер дома",
    required: true,
  },
  {
    size: "small",
    text: "Квартира",
    inputType: "text",
    inputName: "flat",
    placeholder: "Введите № квартиры",
    required: false,
  },
];

export const AUTH_ERRORS = {
  EMAIL_REQUIRED: "Поле email обязательно для заполнения",
  EMAIL_VALID: "Поле email должно быть валидно",
  PASSWORD_REQUIRED: "Поле пароля обязательно для заполнения",
  FALSE_DATA: "Неверный email или пароль",
};
