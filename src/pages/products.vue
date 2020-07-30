<template>
    <div class="products-wrap">
        <div class="products containers">
                <span class="title">Товары</span>
            <!-- <Cart v-if="$store.state.cart.length" :cart_data="$store.state.cart" /> -->
            <CatalogIndex />
            <CatalogIndexHouse />
        </div>
    </div>
</template>


<script>
    // Импорт компонентов
    import CatalogIndex from '@/components/catalog-index'
     import CatalogIndexHouse from '@/components/catalog-index-house'
    // import Cart from '@/components/cart'
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: 'products',
        data() {
            return {
            isActive: false,
            }
        },
        components: {
            CatalogIndex,
            CatalogIndexHouse
        },
        methods: {
            ShowCart() {
            }
        },

        computed: {
            ...mapGetters([
                // 'CART'
            ])
        },

    }
</script>