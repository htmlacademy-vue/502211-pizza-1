<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <li
        class="additional-list__item sheet"
        v-for="item in misc"
        :key="item.id"
      >
        <p class="additional-list__description">
          <img :src="item.image" width="39" height="60" :alt="item.name" />
          <span>{{ item.name }}</span>
        </p>

        <div class="additional-list__wrapper">
          <ItemCounter
            class="additional-list__counter"
            :count="itemsCounter(selectedMisc, item.id, 'miscId')"
            :item="item"
            :minCount="0"
            :maxCount="Math.pow(10, 1000)"
            :inputChangeHandler="setMiscCount"
            :minusButtonClickHandler="decreaseMiscCount"
            :plusButtonClickHandler="increaseMiscCount"
          />

          <div class="additional-list__price">
            <b>x {{ item.price }} ₽</b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// импортируем компоненты
import ItemCounter from "@/common/components/ItemCounter.vue";

import { mapState, mapGetters, mapMutations } from "vuex";
import {
  SET_MISC_COUNT,
  DECREASE_MISC_COUNT,
  INCREASE_MISC_COUNT,
} from "@/store/mutation-types";

export default {
  name: "CartAdditional",
  // подключаем компоненты
  components: {
    ItemCounter,
  },
  // дополнительные функции
  computed: {
    ...mapState(["misc"]),
    ...mapState("Cart", ["selectedMisc"]),
    ...mapGetters(["itemsCounter"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Cart", {
      setMiscCount: SET_MISC_COUNT,
      decreaseMiscCount: DECREASE_MISC_COUNT,
      increaseMiscCount: INCREASE_MISC_COUNT,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
