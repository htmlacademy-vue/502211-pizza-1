<template>
  <div class="user">
    <picture>
      <source
        type="image/webp"
        :srcset="
          $imageWithExtensionLink(user.avatar, '@2x.webp') +
          ' 1x,' +
          $imageWithExtensionLink(user.avatar, '@4x.webp') +
          ' 2x'
        "
      />
      <img
        :src="$imageWithExtensionLink(user.avatar, '@2x.jpg')"
        :srcset="$imageWithExtensionLink(user.avatar, '@4x.jpg')"
        :alt="user.name"
        width="72"
        height="72"
      />
    </picture>
    <div class="user__name">
      <span>{{ user.name }}</span>
    </div>
    <p class="user__phone">
      Контактный телефон: <span>{{ user.phone }}</span>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { imageWithExtensionLink } from "@/common/mixins";

export default {
  name: "OrderUserInfo",
  // подключаем миксины
  mixins: [imageWithExtensionLink],
  // дополнительные функции
  computed: {
    ...mapState("Auth", ["user"]),
  },
};
</script>

<style lang="scss" scoped></style>
