<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <!-- Отрисовываем виды размеров -->
        <label
          v-for="size in sizes"
          :key="size.id"
          :title="size.name"
          class="diameter__input diameter__input--small"
        >
          <RadioButton
            name="diameter"
            value="small"
            :checked="size.id === sizes[0].id"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderSizeSelector",
  // подключаем компоненты
  components: {
    RadioButton,
  },
  // получение свойств из родительского компонента
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
};
</script>
