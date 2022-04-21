<template>
  <div
    :draggable="!disabled"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrag",
  // получение свойств из родительского компонента
  props: {
    transferData: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  // добавили методы
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.effectAllowed = "MOVE";
      dataTransfer.dropEffect = "MOVE";
      dataTransfer.setData(
        "DATA_TRANSFER_PAYLOAD",
        JSON.stringify(this.transferData)
      );
    },
  },
};
</script>
