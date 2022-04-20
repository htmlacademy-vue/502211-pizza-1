<template>
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
</template>
