<template>
  <div @drop.stop="dropHandler" @dragover.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrop",
  // добавили методы
  methods: {
    dropHandler({ dataTransfer }) {
      const payload = dataTransfer.getData("ingredient");
      if (payload) {
        const transferData = JSON.parse(payload);
        this.$emit("drop", transferData);
      }
    },
  },
};
</script>
