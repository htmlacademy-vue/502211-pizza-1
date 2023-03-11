<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <RadioButton
        :items="sizes"
        :itemMap="sizeMap"
        :itemName="ITEMS_INPUT_DATA.SIZE.ITEM_NAME"
        :value="currentSize"
        :inputChangeHandler="updateSizeValue"
      />
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import RadioButton from "@/common/components/RadioButton";
import { sizeMap, ITEMS_INPUT_DATA } from "@/common/constants";

import { mapState, mapMutations } from "vuex";
import { UPDATE_SIZE_VALUE } from "@/store/mutation-types";

export default {
  name: "SizeSelector",
  // подключаем данные
  data() {
    return {
      sizeMap,
      ITEMS_INPUT_DATA,
    };
  },
  // подключаем компоненты
  components: {
    RadioButton,
  },
  // дополнительные функции
  computed: {
    ...mapState("Builder", ["pizzas"]),
    ...mapState("Builder", ["currentSize"]),

    sizes() {
      return this.pizzas.sizes;
    },
  },
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      updateSizeValue: UPDATE_SIZE_VALUE,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
