<template>
  <div class="cart-popup" v-show="show">
    <div class="cart-item">
      <h3 class="cart-item__name">Корзина</h3>
      <div class="cart-item__close" @click="closecart(), activeScrolling()">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M24.6133 0.00572781L0 24.6121L2.38323 26.996L26.9965 2.38963L24.6133 0.00572781Z"
              fill="#000"
            />
            <path
              d="M2.38713 0.00403785L0.00390625 2.38794L24.6172 26.9943L27.0004 24.6104L2.38713 0.00403785Z"
              fill="#000"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="27" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        class="cart-item__close-burger"
        @click="closecart(), activeScrolling()"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M24.6133 0.00572781L0 24.6121L2.38323 26.996L26.9965 2.38963L24.6133 0.00572781Z"
              fill="#fff"
            />
            <path
              d="M2.38713 0.00403785L0.00390625 2.38794L24.6172 26.9943L27.0004 24.6104L2.38713 0.00403785Z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="27" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Cartitem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @DeleteFromCart="DeleteFromCart(index)"
      />
      <div
        class="cart-block"
        v-if="$store.state.cart.length"
        v-bind:class="{ active1: $store.state.cart.length }"
      >
        <router-link to="/order" class="cart-block__a">
          <button
            class="cart-block__button"
            @click="closecart(), activeScrolling()"
          >
            Оформить заявку
          </button>
        </router-link>
      </div>
      <div class="cart-block__result">
        <p>
          Итого: <span>{{ cartTotalCost }}</span>
        </p>
      </div>
      <div class="cart-block-mini__result">
        <p>
          Итоговая стоимость: <span>{{ cartTotalCost }} ₽</span>
        </p>
      </div>
      <router-link to="/order" class="cart-block-mini__a">
        <button
          class="cart-block-mini__button"
          @click="closecart(), activeScrolling()"
        >
          Заказать
        </button>
      </router-link>
      <div class="mini-block-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/footer";
import Cartitem from "@/components/cart/cart-item";

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
    Cartitem,
    Footer,
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
    activeScrolling() {
      this.$emit("activeScrolling");
    },
    closecart() {
      this.$emit("closecart");
    },
  },
};
</script>