<template>
  <div class="products-wrap">
    <!-- <Cart v-if="$store.state.cart.length" :cart_data="$store.state.cart" /> -->
    <ProductsHome />
  </div>
</template>


<script>
// Импорт компонентов
import ProductsHome from "@/components/productsHome/productsHome";
// import Cart from '@/components/cart'
import { mapGetters } from "vuex";

export default {
  name: "products",
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    ProductsHome,
  },
  methods: {
    ShowCart() {},
  },

  computed: {
    ...mapGetters([
      // 'CART'
    ]),
  },
};
</script>