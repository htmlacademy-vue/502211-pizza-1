<template>
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
</template>
