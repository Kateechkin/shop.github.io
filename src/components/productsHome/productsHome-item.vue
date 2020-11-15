<template>
  <figure class="catalog-index-item">
    <img
      :src="require('../../assets/image/' + product_data.image)"
      alt="img"
      width="243"
      height="243"
    />
    <figcaption class="catalog-index-item__fig">
      <div class="catalog-item__info">
        <p class="catalog-item__name">{{ product_data.name }}</p>
        <p class="catalog-item__performance">
          Производительность: {{ product_data.performance }} л/ч
        </p>
      </div>
      <div class="catalog-item__wrap">
        <p class="catalog-item__price">Цена: {{ product_data.price }} P.</p>
        <button class="catalog-item__button2" @click="addTocart">
          Заказать
        </button>
      </div>
    </figcaption>
  </figure>
</template>
<script>
export default {
  name: "catalog-index-item",
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
    addTocart() {
      this.$emit("addTocart", this.product_data);
    },
  },
};
</script>