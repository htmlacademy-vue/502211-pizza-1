<template>
  <div :draggable="isDraggable" @dragstart.self="dragHandler">
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
    isDraggable: {
      type: Boolean,
      default: true,
    },
  },
  // добавили методы
  methods: {
    dragHandler({ dataTransfer }) {
      dataTransfer.setData("ingredient", JSON.stringify(this.transferData));
    },
  },
};
</script>

<style lang="scss" scoped></style>
