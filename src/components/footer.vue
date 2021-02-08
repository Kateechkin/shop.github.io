<template>
  <div class="footer-container">
    <div class="footer-container__main">
      <p class="footer-container__text">Остались вопросы?</p>
    </div>
    <div class="footer">
      <div class="footer__section containers">
        <h1 class="footer__h1">Свяжитесь с нами!</h1>
        <p class="footer__p">
          Оставтьте свои контактные данные, чтобы наши менеджеры могли с вами
          связаться
        </p>
        <div class="footer-info">
          <form action="" method="POST" class="footer-info__form">
            <div class="footer-info__date">
              <input
                type="text"
                class="footer-info__name"
                placeholder="Как вас зовут?"
                id="name"
                v-model="name"
              />
              <input
                type="text"
                class="footer-info__number"
                placeholder="Ваш номер телефона"
                id="phone"
                v-mask="'+7(###)###-####'"
                v-model="phone"
              />
            </div>
            <div class="footer-info__communication">
              <input
                type="button"
                value="Связаться с нами"
                @click="postPost()"
                class="footer-info__button"
              />
            </div>
          </form>
        </div>
        <div class="footer-contact">
          <img
            src="../assets/image/logo-mini.png"
            alt="logo"
            width="63"
            height="85"
          />
          <nav class="footer__nav">
            <ul>
              <li v-for="(link, el) in menu" :key="el.id" v-bind:item="el">
                <router-link :to="{ name: link.routerName }" class="a">{{
                  link.title
                }}</router-link>
              </li>
              <li>
                <router-link to="forHome" class="a"
                  >Продукция для предприятий</router-link
                >
              </li>
              <li>
                <router-link to="forCompany" class="a"
                  >Продукция для дома и коттеджей</router-link
                >
              </li>
            </ul>
          </nav>
          <div class="footer__block-number">
            <div class="footer__number">
              <a href="tel:+7(903)922-22-22">+7 903 992 22 22</a>
            </div>
            <div class="footer__number">
              <a href="mailto:aquapriceplus@mail.ru">aquapriceplus@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-contact__down">
        <a href="http://lumerty.ru/" class="footer-contact__p"
          >Designed by Lumerty</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "footer",
  data() {
    return {
      name: "",
      phone: "",
      menu: [
        {
          id: 1,
          routerName: "index",
          title: "Главная",
          completed: false,
        },
        // {
        //   id: 2,
        //   routerName: "forCompany",
        //   title: "Товары для дома и коттеджей",
        //   completed: false,
        // },
        // {
        //   id: 3,
        //   routerName: "forCompany",
        //   title: "Товары для предприятий",
        //   completed: false,
        // },

        {
          id: 4,
          routerName: "contact",
          title: "Контакты",
          completed: false,
        },
      ],
    };
  },
  methods: {
    postPost() {
      axios
        .post("https://08391fcc9ccd.ngrok.io/api/contacts", {
          name: this.name,
          phone: this.phone,
        })
        .then((response) => {
          if (response.data) {
            console.log("Data arrived");
          }
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
  },
  components: {},
};
</script>