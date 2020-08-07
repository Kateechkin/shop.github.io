<template>
    <div class="products-wrap">
        <div class="products containers">
                <span class="title">Товары для предприятий</span>
            <!-- <Cart v-if="$store.state.cart.length" :cart_data="$store.state.cart" /> -->
            <ProductsCompany />
            <!-- <CatalogIndexHouse /> -->
        </div>
    </div>
</template>


<script>
    // Импорт компонентов
    import ProductsCompany from '@/components/productsCompany/productsCompany'
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
            ProductsCompany
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