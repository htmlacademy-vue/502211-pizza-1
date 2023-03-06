export const getCountSum = (items) => {
  return items.reduce((prev, curr) => prev + curr.price * curr.amount, 0);
};

export const getDoughText = (size, dough, doughSpellingMap) => {
  return `${size}, на ${doughSpellingMap[dough]} тесте`;
};

export const getSauceText = (sauce) => {
  return `Соус: ${sauce.toLowerCase()}`;
};

export const getIngredientsText = (ingredients) => {
  return `Начинка: ${Object.keys(ingredients)
    .map((it) => it.toLowerCase())
    .join(", ")}`;
};

export const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
