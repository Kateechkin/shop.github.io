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
          <form
            action=""
            method="POST"
            class="footer-info__form"
            @change="postPost()"
          >
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
                v-model="phone"
              />
            </div>
            <div class="footer-info__communication">
              <input
                type="button"
                value="Связаться с нами"
                class="footer-info__button"
              />
            </div>
          </form>
        </div>
        <div class="footer-contact">
          <img
            src="../assets/image/logotip.png"
            alt="logo"
            width="200"
            height="200"
          />
          <nav class="footer__nav">
            <ul>
              <li v-for="(link, el) in menu" :key="el.id" v-bind:item="el">
                <router-link :to="{ name: link.routerName }" class="a">{{
                  link.title
                }}</router-link>
              </li>
            </ul>
          </nav>
          <div class="footer__number">+7 903 992 22 22</div>
          <div class="footer__number">aquapriceplus@mail.ru</div>
        </div>
      </div>
      <div class="footer-contact__down">
        <p class="footer-contact__p">Designed by Lumerty</p>
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
        //   routerName: "index",
        //   title: "Наши работы",
        //   completed: false,
        // },
        {
          id: 3,
          routerName: "index",
          title: "Товары для коттеджей",
          completed: false,
        },
        {
          id: 4,
          routerName: "index",
          title: "Товары для компании",
          completed: false,
        },

        {
          id: 5,
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
        .post("https://e430fbd60ad0.ngrok.io", {
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