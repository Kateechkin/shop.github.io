<template>
  <div class="cart-item-wrap">
    <img
      :src="require('../../assets/image/' + cart_item_data.image)"
      alt="img"
    />
    <div class="cart-item-wrap__wrap">
      <div class="cart-item-info">
        <p class="cart-item-info__name">{{ cart_item_data.name }}</p>
        <p class="cart-item-info__price">
          Цена: <span> {{ cart_item_data.price }}</span>
        </p>
        <!-- <p>{{cart_item_data.article}}</p> -->
      </div>
      <div class="cart_item_quantity">
        Кол-во: <span>{{ cart_item_data.quantity }}</span>
      </div>
      <div class="cart-item-del" @click="DeleteFromCart"><p>Удалить</p></div>
    </div>

    <svg
      width="20"
      height="20"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="cart-item-button-del"
      @click="DeleteFromCart"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M24.6133 0.00572781L0 24.6121L2.38323 26.996L26.9965 2.38963L24.6133 0.00572781Z"
          fill="#5c5c5c"
        />
        <path
          d="M2.38713 0.00403785L0.00390625 2.38794L24.6172 26.9943L27.0004 24.6104L2.38713 0.00403785Z"
          fill="#5c5c5c"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="27" height="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <!-- <button @click="DeleteFromCart" class="cart-item-button-del">×</button> -->
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    DeleteFromCart() {
      this.$emit("DeleteFromCart");
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
    // localStorage.setItem("cart", JSON.stringify(this.cart_item_data));
  },
};
</script>