<template>
  <div id="app">
    <Header v-if="$route.meta.showFeedback"/>
    <router-view ></router-view>
    <Footer v-if="$route.meta.showFeedback"/>
  </div>
</template>

<script>
  // Импорт компонентов
  import Header from '@/components/header'
    // import List from '@/components/list'
  // import Section from '@/components/section-main'
  // import Products from '@/pages/products'

  import Footer from '@/components/footer'
  // import Slader from '@/components/slader'

  export default {
    name: 'app',
    components: {
      Header,Footer
  }
  }
</script>