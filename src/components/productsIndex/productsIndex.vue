<script>
/* eslint-disable vue/no-use-v-if-with-v-for */ /* eslint-disable vue/require-v-for-key */
</script>
<template>
  <div id="catalog">
    <!-- <h1 class="catalogh1">Продукция</h1> -->
    <div class="catalog-wrap">
      <ProductsIndexItem
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle="show"
      />
    </div>
    <!-- v-for="product in PRODUCTS.slice(0, 1)" -->
  </div>
</template>
<script>
import ProductsIndexItem from "@/components/productsIndex/productsIndex-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "catalog",
  data() {
    return {};
  },
  components: {
    ProductsIndexItem,
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS"]),

    show(data) {
      console.log(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS()
      .then((response) => {
        if (response.data) {
          console.log("Data arrived");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>