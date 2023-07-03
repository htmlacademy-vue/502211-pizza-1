<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <DoughSelector />

      <SizeSelector />

      <IngredientsSelector />

      <div class="content__pizza">
        <PizzaName />

        <PizzaView />

        <PriceCounter />
      </div>
    </div>
  </form>
</template>

<script>
// импортируем компоненты
import DoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import SizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import IngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
import PizzaName from "@/modules/builder/components/BuilderPizzaName.vue";
import PizzaView from "@/modules/builder/components/BuilderPizzaView.vue";
import PriceCounter from "@/modules/builder/components/BuilderPriceCounter.vue";

export default {
  name: "Index",
  // подключаем компоненты
  components: {
    DoughSelector,
    SizeSelector,
    IngredientsSelector,
    PizzaName,
    PizzaView,
    PriceCounter,
  },
  // указываем имя лейаута
  layout: "AppLayoutMain",
};
</script>

<style lang="scss" scoped></style>
