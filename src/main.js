import './assets/styles/style.scss';
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import store_item from './vuex/store-item'
import router from './router/router'

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBLYi0u6JzoSz5zoT1Kx5c2do5uviFULSM",
        libraries: "places", // necessary for places input
        region: "rus"
    }
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store_item,
    store,
    router
}).$mount('#app')