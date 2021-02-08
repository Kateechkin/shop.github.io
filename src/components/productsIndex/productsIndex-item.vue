<template>
  <div class="catalog-item">
    <img
      :src="require(`../../../public/image/` + product_data.image)"
      alt="img"
      height="224"
      width="238"
    />
    <p class="catalog-item__name">Название {{ product_data.name }}</p>
    <p class="catalog-item__price">Цена: {{ product_data.price }}</p>
    <router-link :to="{ path: product_data.category }"
      ><button class="catalog-item__button" @click="sendData">
        Перейти к товарам
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  methods: {
    sendData() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
};
</script>