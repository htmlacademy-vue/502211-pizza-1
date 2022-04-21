<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector :dough="pizza.dough" />

        <BuilderSizeSelector :sizes="pizza.sizes" />

        <BuilderIngredintsSelector
          :sauces="pizza.sauces"
          :ingredients="ingredients"
        />

        <BuilderPizzaView />

      </div>
    </form>
  </main>
</template>

<script>
// импортируем JSON данные
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";

// импортируем компоненты
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

export default {
  name: "IndexHome",
  // подключаем данные
  data() {
    const ingredients = pizza.ingredients.map((item) => ({
      ...item,
      amount: 0,
    }));

    return {
      misc,
      pizza,
      user,
      ingredients,
    };
  },
  // подключаем компоненты
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
};
</script>

<style>
</style>
