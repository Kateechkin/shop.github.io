<template>
  <header class="header">
    <div class="container-header">
      <router-link to="/" class="logo-name">АкваПрайсПлюс</router-link>
      <!-- <li><router-link to="/" class="logo-name">АкваПрайсПлюс</router-link></li> -->
      <nav id="headers">
        <List />
      </nav>
      <div class="header-phone">
        <a href="tel:+7(903)922-22-22" class="a">+7 903 992 22 22</a>
      </div>
      <!-- <li><a href="tel:+7(903)922-22-22" class="a">+7 903 992 22 22</a></li> -->
      <div class="burger">
        <transition name="fade" mode="out-in" class="burger__block">
          <template>
            <div class="burger-block__container">
              <div class="burger-block__block">
                <router-link to="/">
                  <img
                    src="../assets/image/logo-mini.png"
                    alt=""
                    width="40"
                    height="54"
                  />
                </router-link>
                <div class="burger-block__wrap">
                  <button
                    @click="ShowCart(), (scrolled = !scrolled)"
                    class="cart-item-button2"
                    v-if="$route.meta.showCart"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="54"
                      height="54"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#ffffff"
                        d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"
                      ></path>
                    </svg>
                    <div class="cart__index" v-if="total > 0">
                      <p>{{ total }}</p>
                    </div>
                  </button>
                  <!-- <h1 class="burger__name">АкваПрайсПлюс</h1> -->
                  <svg
                    width="42"
                    height="18"
                    viewBox="0 0 42 18"
                    fill="none"
                    v-if="!showmenu"
                    @click="(showmenu = !showmenu), (scrolled = !scrolled)"
                    key="menu"
                    class="burger__img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="42" height="5" fill="white" />
                    <rect x="16" y="13" width="26" height="5" fill="white" />
                  </svg>
                  <svg
                    width="26"
                    height="18"
                    viewBox="0 0 26 18"
                    fill="none"
                    @click="(showmenu = !showmenu), (scrolled = !scrolled)"
                    v-else
                    key="clear"
                    class="burger__img2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="5" fill="white" />
                    <rect y="13" width="26" height="5" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </template>
        </transition>
        <transition name="fade" mode="out-in" class="fade">
          <div class="menuburger" v-if="showmenu">
            <!-- <router-link to="/" class="menu__routermini">
            </router-link> -->
            <ul>
              <li
                v-for="(link, el) in menu"
                :key="el.id"
                class="header-item__li"
                @click="(showmenu = !showmenu), (scrolled = !scrolled)"
              >
                <router-link
                  :to="{ name: link.routerName }"
                  class="header-item__a"
                  >{{ link.title }}</router-link
                >
              </li>
              <li @click="(showmenu = !showmenu), (scrolled = !scrolled)">
                <router-link to="forhome" class="header-item__a"
                  >Для предприятий</router-link
                >
              </li>
              <li @click="(showmenu = !showmenu), (scrolled = !scrolled)">
                <router-link to="forcompany" class="header-item__a"
                  >Для дома и коттеджей</router-link
                >
              </li>

              <li
                @click="(showmenu = !showmenu), ShowCart()"
                class="header-item__a"
              >
                Корзина
              </li>
              <!-- <li
                class="header-item__a"
                @click="
                  ShowCart(), (scrolled = !scrolled), (showmenu = !showmenu)
                "
              >
                Корзина
              </li> -->
            </ul>
            <div class="menu-footer">
              <div class="menu-footer__svg">
                <svg
                  width="50"
                  height="82"
                  viewBox="0 0 50 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    x="0.172363"
                    y="0.756104"
                    width="49.6552"
                    height="80.8683"
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
                        transform="translate(-0.106299) scale(0.00885107 0.00543478)"
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
              </div>
              <p class="menu-footer__p">АкваПрайсПлюс</p>
            </div>
          </div>
        </transition>
      </div>
      <button
        @click="ShowCart(), (scrolled = !scrolled)"
        class="cart-item-button"
        v-if="$route.meta.showCart"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="54"
          height="54"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ffffff"
            d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"
          ></path>
        </svg>
        <div class="cart__index" v-if="total > 0">
          <p>{{ total }}</p>
        </div>
      </button>

      <form class="dropdown__search">
        <button class="cart-item-button" v-if="$route.meta.showSearch">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="54"
            height="54"
            viewBox="0 0 396.819 396.819"
            style="enable-background: new 0 0 396.819 396.819"
            xml:space="preserve"
          >
            <path
              d="M352.103,44.679c-59.237-59.401-155.412-59.535-214.813-0.298c-57.316,57.157-59.741,149.218-5.515,209.314l-11.6,11.6 c-9.372-9.373-24.568-9.375-33.941-0.003c-0.001,0.001-0.002,0.002-0.003,0.003l-79.2,79.2
			c-9.373,9.372-9.375,24.568-0.003,33.941c0.001,0.001,0.002,0.002,0.003,0.003l11.312,11.312c9.372,9.369,24.564,9.369,33.936,0
			l79.2-79.2c9.373-9.372,9.375-24.568,0.003-33.941c-0.001-0.001-0.002-0.002-0.003-0.003l11.6-11.6
			c62.24,56.247,158.292,51.388,214.539-10.851C411.948,194.037,409.521,101.856,352.103,44.679z M120.175,299.231l-79.2,79.2
			c-3.124,3.123-8.188,3.123-11.312,0l-11.312-11.32c-3.118-3.123-3.118-8.181,0-11.304l79.2-79.2c3.164-3.025,8.148-3.025,11.312,0
			l11.312,11.32C123.293,291.05,123.293,296.108,120.175,299.231z M340.799,248.327c-53.112,53.11-139.223,53.109-192.333-0.003
			s-53.109-139.223,0.003-192.333c53.111-53.109,139.219-53.109,192.33,0C393.824,109.139,393.824,195.179,340.799,248.327z"
            />
            <path
              d="M329.479,67.303L329.479,67.303l-11.312,11.312c40.545,40.644,40.545,106.436,0,147.08l11.312,11.312
			C376.275,190.117,376.275,114.193,329.479,67.303z"
            />
          </svg>
        </button>
        <div class="dropdown-content-search">
          <input type="text" placeholder="Искать здесь..." />
        </div>
      </form>
      <CartEmpty
        v-if="!CART.length"
        v-show="!show"
        @closecart="closecart()"
        @activeScrolling="activeScrolling()"
      />
      <Cart
        v-else
        :cart_data="CART"
        v-show="!show"
        @closecart="closecart()"
        @activeScrolling="activeScrolling()"
      />
    </div>
  </header>
</template>
<script>
import List from "@/components/list";
import Cart from "@/components/cart/cart";
import CartEmpty from "@/components/cart/cart-empty.vue";
import { mapGetters } from "vuex";

export default {
  name: "headers",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isActive: true,
      show: true,
      scrolled: false,
      last_known_scroll_position: 0,
      showEmpty: true,
      showmenu: false,
      menu: [
        // {
        //     id: 1,
        //     routerName: 'index',
        //     title: "АкваПрайсПлюс",
        //     completed: false
        // },
        {
          id: 1,
          routerName: "index",
          title: "Главная",
          completed: false,
        },
        {
          id: 2,
          routerName: "index",
          title: "Наши работы",
          completed: false,
        },
        // {
        //   id: 3,
        //   routerName: "/forhome",
        //   title: "Для предприятий",
        //   completed: false,
        // },
        // {
        //   id: 4,
        //   routerName: "/forcompany",
        //   title: "Для дома и коттеджей",
        //   completed: false,
        // },
        // {
        //     id: 4,
        //     routerName: 'products',
        //     title: "Товары",
        //     completed: false
        // },
        {
          id: 5,
          routerName: "contact",
          title: "Контакты",
          completed: false,
        },
        // {
        //     id: 6,
        //     routerName: 'contact',
        //     title: "+7 903 992 22 22",
        //     completed: false
        // },
      ],
    };
  },
  components: {
    List,
    Cart,
    CartEmpty,
  },
  methods: {
    ShowCart() {
      if (this.show) {
        this.show = false;
      } else this.show = true;
    },
    closecart() {
      if (this.show) {
        this.show = false;
      } else this.show = true;
    },
    activeScrolling() {
      if (this.scrolled) {
        this.scrolled = false;
      } else this.scrolled = true;
    },
  },
  watch: {
    doSomething() {
      if (this.scrolled === true) {
        document.body.classList.add("hidden");
        return this.scrolled;
      } else {
        document.body.classList.remove("hidden");
        return this.scrolled;
      }
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    doSomething() {
      if (this.scrolled === true) {
        document.body.classList.add("hidden");
        return this.scrolled;
      } else {
        document.body.classList.remove("hidden");
        return this.scrolled;
      }
    },
    total() {
      return this.CART.length;
    },
  },
};
</script>