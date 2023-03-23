<template>
  <div @drop.stop="dropHandler" @dragover.prevent>
    <slot />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { ITEM_DROP } from "@/store/mutation-types";

export default {
  name: "AppDrop",
  // добавили методы
  methods: {
    ...mapMutations("Builder", {
      itemDrop: ITEM_DROP,
    }),

    dropHandler({ dataTransfer }) {
      const payload = dataTransfer.getData("ingredient");
      if (payload) {
        const transferData = JSON.parse(payload);
        this.itemDrop(transferData);
      }
    },
  },
};
</script>
