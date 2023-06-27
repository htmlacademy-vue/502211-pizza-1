<template>
  <div class="layout__content">
    <div class="layout__title">
      <h1 class="title title--big">Мои данные</h1>
    </div>

    <OrderUserInfo />

    <OrderAddress
      v-for="address in userAddresses"
      :key="address.id"
      :id="address.id"
      :name="address.name"
      :street="address.street"
      :building="address.building"
      :flat="address.flat"
      :comment="address.comment"
      :inputChangeHandler="inputChangeHandler"
      :formSubmitHandler="formSubmitHandler"
      :editButtonClickHandler="editButtonClickHandler"
      :deleteAddressButtonClickHandler="deleteAddressButtonClickHandler"
    />

    <div v-if="!isAddNewAddress" class="layout__button">
      <button
        type="button"
        class="button button--border"
        @click="addNewAddressButtonClickHandler"
      >
        Добавить новый адрес
      </button>
    </div>

    <OrderAddress
      v-else
      :isAddNewAddress="isAddNewAddress"
      :id="id"
      :name="name"
      :street="street"
      :building="building"
      :flat="flat"
      :comment="comment"
      :inputChangeHandler="inputChangeHandler"
      :formSubmitHandler="formSubmitHandler"
      :editButtonClickHandler="editButtonClickHandler"
    />
  </div>
</template>

<script>
// импортируем компоненты
import OrderUserInfo from "@/modules/orders/components/OrderUserInfo.vue";
import OrderAddress from "@/modules/orders/components/OrderAddress.vue";
import { addressProperySeparator } from "@/common/constants";

import { mapState, mapMutations, mapActions } from "vuex";
import { SET_EDITING_ADDRESS } from "@/store/mutation-types";

export default {
  name: "Profile",
  // подключаем данные
  data() {
    return {
      isAddNewAddress: false,
      id: -1,
      name: "",
      street: "",
      building: "",
      flat: "",
      comment: "",
    };
  },
  // подключаем компоненты
  components: {
    OrderUserInfo,
    OrderAddress,
  },
  // дополнительные функции
  computed: {
    ...mapState("Orders", ["userAddresses"]),
    ...mapState("Auth", ["user"]),
  },
  // добавили методы
  methods: {
    ...mapMutations("Orders", {
      setEditingAddress: SET_EDITING_ADDRESS,
    }),
    ...mapActions("Orders", ["postAddress", "deleteAddress", "putAddress"]),

    resetInputData() {
      this.name = "";
      this.street = "";
      this.building = "";
      this.flat = "";
      this.comment = "";
    },
    addNewAddressButtonClickHandler() {
      this.resetInputData();
      this.isAddNewAddress = true;
      this.setEditingAddress(-1);
    },
    inputChangeHandler(event, field) {
      const property = field.split(addressProperySeparator)[1];

      this[property] = event.target.value;
    },
    editButtonClickHandler(id) {
      const {
        id: addressId,
        name,
        street,
        building,
        flat,
        comment,
      } = this.userAddresses.find((it) => it.id === id);

      this.isAddNewAddress = false;
      this.setEditingAddress(id);
      this.name = name;
      this.street = street;
      this.building = building;
      this.flat = flat;
      this.comment = comment;
      this.id = addressId;
    },
    async formSubmitHandler() {
      const addressData = {
        name: this.name,
        street: this.street,
        building: this.building,
        flat: this.flat,
        comment: this.comment,
        userId: this.user.id,
      };

      if (this.isAddNewAddress) {
        await this.postAddress(addressData);
        this.isAddNewAddress = false;
      } else {
        await this.putAddress({
          ...addressData,
          id: this.id,
        });
        this.setEditingAddress(-1);
      }

      this.resetInputData();
    },
    deleteAddressButtonClickHandler() {
      this.deleteAddress(this.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
