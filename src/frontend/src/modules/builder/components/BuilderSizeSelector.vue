<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <RadioButton
        :items="sizes"
        :itemMap="sizeMap"
        :itemName="ITEMS_INPUT_DATA.SIZE.ITEM_NAME"
        :value="currentSize"
        @change="$emit('change', $event)"
      />
    </div>
  </div>
</template>

<script>
// импортируем компоненты
import RadioButton from "@/common/components/RadioButton";
import { sizeMap, ITEMS_INPUT_DATA } from "@/common/constants";

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
  // получение свойств из родительского компонента
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    currentSize: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
