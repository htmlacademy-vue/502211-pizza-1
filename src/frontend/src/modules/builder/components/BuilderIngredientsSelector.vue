<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

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
</template>
