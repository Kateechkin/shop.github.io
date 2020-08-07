<script>/* eslint-disable vue/no-use-v-if-with-v-for */ /* eslint-disable vue/require-v-for-key */ </script>
<template>
    <div id="catalog-index ">
        <div class="catalog-index-wrap">
            <template>
                <ProductsCompanyItem v-for="product in PRODUCTS" v-if="product.isforhome" :key="product.article" v-bind:product_data="product"
                    @addTocart="addTocart" />
            </template>
        </div>
    </div>
</template>
<script>
    import ProductsCompanyItem from '@/components/productsCompany/productsCompany-item'
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        name: 'catalog-index',
        data() {
            return {
            //  isforhome: true
            }
        },
        components: {
            ProductsCompanyItem
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS',
                'ADD_TO_CART'
            ]),

            addTocart(data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
</script>