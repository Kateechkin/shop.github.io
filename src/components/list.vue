<template>
  <ul>
    <li><router-link to="/" class="logo-name">АкваПрайсПлюс</router-link></li>
    <li v-for="(link, el) in menu" :key="el.id" v-bind:item="el">
      <router-link :to="{ name: link.routerName }" class="a">{{
        link.title
      }}</router-link>
    </li>
    <div class="dropdown">
      <li>
        Товары
        <svg
          version="1.1"
          width="30"
          height="30"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 490.688 490.688"
          style="enable-background: new 0 0 490.688 490.688"
          xml:space="preserve"
        >
          <path
            style="fill: #fff"
            d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
	c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
	c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
	L472.328,120.529z"
          />
          <path
            d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
	c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
	C250.748,372.281,248.039,373.408,245.213,373.415z"
          />
        </svg>
      </li>
      <div class="dropdown-content">
        <router-link to="forHome" class="dropdown-content__a"
          >Для предприятий</router-link
        >
        <router-link to="forCompany" class="dropdown-content__a"
          >Для дома и коттеджей</router-link
        >
      </div>
    </div>
    <li><a href="tel:+7(903)922-22-22" class="a">+7 903 992 22 22</a></li>
  </ul>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      menu: [
        // {
        //     id: 1,
        //     routerName: 'index',
        //     title: "АкваПрайсПлюс",
        //     completed: false
        // },
        {
          id: 2,
          routerName: "index",
          title: "Главная",
          completed: false,
        },
        {
          id: 3,
          routerName: "index",
          title: "Наши работы",
          completed: false,
        },
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
};
</script>