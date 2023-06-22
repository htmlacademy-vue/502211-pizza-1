<template>
  <ul>
    <li v-for="(errorMessage, id) in filteredErrors" :key="id">
      {{ errorString(errorMessage) }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "AuthErrorBlock",
  // получение свойств из родительского компонента
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
  // дополнительные функции
  computed: {
    filteredErrors() {
      return this.errors.filter((it) => it.length !== 0);
    },
  },
  // добавили методы
  methods: {
    errorString(arr) {
      const processedErrorData = arr.map((it, index) => {
        if (index !== 0) {
          return it.toLowerCase();
        }

        return it;
      });

      return processedErrorData.join(", ");
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  margin-bottom: 16px;
  padding: 8px 25px;

  color: red;

  border: 1px solid red;
  border-radius: 8px;
  background-color: #f9edf1;
}

li {
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
