<template>
  <div
    @drop.stop="onDrop"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrop",
  // добавили методы
  methods: {
    onDrop({ dataTransfer }) {
      const payload = dataTransfer.getData("DATA_TRANSFER_PAYLOAD");
      if (payload) {
        const transferData = JSON.parse(
          dataTransfer.getData("DATA_TRANSFER_PAYLOAD")
        );
        this.$emit("drop", transferData);
      }
    },
  },
};
</script>
