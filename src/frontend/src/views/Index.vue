<template></template>

<script>
// импортируем JSON данные
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

export default {
  name: "IndexHome",
  // подключаем их в опции data компонента
  data() {
    return {
      misc,
      pizza,
      user,
    };
  },
};
</script>

<style>
</style>
