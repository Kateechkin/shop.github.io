<template>
  <div class="products containers">
    <span class="title" v-if="`${this.$route.params.path}` === 'forhome'"
      >Товары для дома и коттеджей</span
    >
    <span class="title" v-if="`${this.$route.params.path}` === 'forcompany'"
      >Товары для предприятий
    </span>
    <div id="catalog-index ">
      <div class="catalog-index-wrap">
        <ProductsHomeItem
          :class="{ imgodd: PRODUCTION.length % 2 !== 0 }"
          v-for="product in PRODUCTION"
          :key="product.id"
          v-bind:product_data="product"
          @addTocart="addTocart"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductsHomeItem from "@/components/productsHome/productsHome-item";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "catalog-index",
  data() {
    return {};
  },
  components: {
    ProductsHomeItem,
  },
  watch: {
    "$route.params.path"() {
      axios
        .get(
          `https://08391fcc9ccd.ngrok.io/api/products/${this.$route.params.path}`,
          {}
        )
        .then((response) => {
          (this.production = response.data),
            this.$store.dispatch("GET_PRODUCTION", this.production);
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  created() {
    axios
      .get(
        `https://08391fcc9ccd.ngrok.io/api/products/${this.$route.params.path}`,
        {}
      )
      .then((response) => {
        (this.production = response.data),
          this.$store.dispatch("GET_PRODUCTION", this.production);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  computed: {
    ...mapGetters(["PRODUCTION"]),
  },

  methods: {
    ...mapActions(["GET_PRODUCTION", "ADD_TO_CART"]),

    addTocart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTION()
      .then((response) => {
        if (response.data) {
          console.log();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>