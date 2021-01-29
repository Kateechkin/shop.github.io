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
          <svg
            width="137"
            height="185"
            viewBox="0 0 137 185"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              y="0.0415039"
              width="137"
              height="184"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="scale(0.00729927 0.00543478)"
                />
              </pattern>
              <image
                id="image0"
                width="137"
                height="184"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <!-- <img
            src="../assets/image/logotip.png"
            alt="logo"
            width="200"
            height="200"
          /> -->
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
        .post("https://a863bbb770d2.ngrok.io/api/contacts", {
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