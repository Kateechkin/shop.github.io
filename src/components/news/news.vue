<template>
  <div class="news-block">
    <div class="containermin">
      <h1 class="news-block__name">Новости</h1>
    </div>
    <div class="news-block__wrap">
      <div class="containermin">
        <NewsItem v-for="newm in NEWS" :key="newm.id" v-bind:news_data="newm" />
      </div>
    </div>
  </div>
</template>
<script>
import NewsItem from "@/components/news/news-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "news",
  data() {
    return {
      // news: [{
      //     id:'1',
      //     image: "news1.png",
      //     news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      //     available: true
      // },
      // {
      //     id:'2',
      //     image: "news2.png",
      //     news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      //     available: true
      // },
      // {
      //     id:'3',
      //     image: "news3.png",
      //     news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
      //     available: true
      // }]
    };
  },
  components: {
    NewsItem,
  },
  computed: {
    ...mapGetters(["NEWS"]),
  },
  methods: {
    ...mapActions(["GET_NEWS"]),
  },
  mounted() {
    this.GET_NEWS()
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