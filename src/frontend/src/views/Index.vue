<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <!-- Отрисовываем виды теста -->
              <label
                v-for="onePizza in pizza.dough"
                :key="onePizza.id"
                :title="onePizza.name"
                class="dough__input dough__input--light"
              >
                <input
                  type="radio"
                  name="dought"
                  value="light"
                  class="visually-hidden"
                  checked
                />
                <b>{{ onePizza.name }}</b>
                <span>{{ onePizza.description }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <!-- Отрисовываем виды размеров -->
              <label
                v-for="onePizza in pizza.sizes"
                :key="onePizza.id"
                :title="onePizza.name"
                class="diameter__input diameter__input--small"
              >
                <input
                  type="radio"
                  name="diameter"
                  value="small"
                  class="visually-hidden"
                />
                <span>{{ onePizza.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>

            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>
                <!-- Отрисовываем виды соусов -->
                <label
                  v-for="onePizza in pizza.sauces"
                  :key="onePizza.id"
                  :title="onePizza.name"
                  class="radio ingredients__input"
                >
                  <input type="radio" name="sauce" value="tomato" checked />
                  <span>{{ onePizza.name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>
                <!-- Отрисовываем виды начинки -->
                <ul class="ingredients__list">
                  <li
                    v-for="onePizza in pizza.ingredients"
                    :key="onePizza.id"
                    :title="onePizza.name"
                    class="ingredients__item"
                  >
                    <span class="filling filling--mushrooms">{{
                      onePizza.name
                    }}</span>

                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="counter__button counter__button--minus"
                        disabled
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
// импортируем JSON данные
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

export default {
  name: "IndexHome",
  // подключаем их в опции data компонента
  data() {
    return {
      misc,
      pizza,
      user,
    };
  },
};
</script>

<style>
</style>
