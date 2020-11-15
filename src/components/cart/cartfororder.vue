<template>
  <div class="" v-show="show">
    <div class="cart-item-order">
      <CartOrderItem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @DeleteFromCart="DeleteFromCart(index)"
      />
    </div>
    <div class="cart-item-order__allprice">
      <p>
        Общая стоимость: <span>{{ cartTotalCost }} ₽</span>
      </p>
    </div>
  </div>
</template>

<script>
import CartOrderItem from "@/components/cart/cart-order-item";
import { mapActions } from "vuex";
export default {
  name: "cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      show: true,
    };
  },
  components: {
    CartOrderItem,
  },
  computed: {
    cartTotalCost() {
      let result = [];
      for (let item of this.cart_data) {
        result.push(item.price * item.quantity);
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),

    DeleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    ShowCart() {
      if (this.show) {
        this.show = false;
      } else this.show = true;
    },
  },
};
</script>