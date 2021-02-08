<template>
  <figure class="news-item-block">
    <img :src="require(`../../../public/image/` + news_data.image)" alt="img" />
    <figcaption class="news-item-block__fig">
      <h1>Заголовок</h1>
      <p class="news-item-block__text">{{ news_data.text }}</p>
    </figcaption>
  </figure>
</template>
<script>
export default {
  name: "news-item",
  props: {
    news_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
};
</script>