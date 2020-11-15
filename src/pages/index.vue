<template>
  <div id="index">
    <div class="header-container">
      <div class="header-wrap containers">
        <div class="header-item">
          <p class="header-item__h1">Водоочистное оборудование</p>
          <p class="header-item__h2">Услуги по установке и бурению скважин</p>
        </div>
        <div class="header-product"></div>
      </div>
    </div>
    <Section />
    <div class="products-wrap">
      <div class="containers">
        <h1 class="catalogh1">Заказать сейчас</h1>
        <ProductsIndex />
        <!-- <router-link to="/admin/addproduct"> <button>Добавить товар</button></router-link> -->
      </div>
    </div>
    <News />
    <!-- <Admin/> -->
    <!-- <Add/> -->
  </div>
</template>

<script>
// Импорт компонентов
//   import Header from '@/components/header'
import ProductsIndex from "@/components/productsIndex/productsIndex";
import Section from "@/components/section-main";
import News from "@/components/news/news";
// import Admin from '@/pages/admin-index'
// import Add from '@/pages/addproduct'
// import Products from '@/pages/products'

//   import Footer from '@/components/footer'
// import Slader from '@/components/slader'

export default {
  name: "index",
  components: {
    Section,
    ProductsIndex,
    News,
  },
};
</script>