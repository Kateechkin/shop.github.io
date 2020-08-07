<script>/* eslint-disable vue/no-use-v-if-with-v-for */ /* eslint-disable vue/require-v-for-key */ </script>
<template>
    <div id="catalog">
        <!-- <h1 class="catalogh1">Продукция</h1> -->
        <div class="catalog-wrap">
            <ProductsIndexItem 
            v-for="product in PRODUCTS" 
            v-if="product.isOnIndex" 
             :key="product.article" 
             v-bind:product_data="product"
             @sendArticle="show" />
        </div>
    </div>
</template>
<script>
    import ProductsIndexItem from '@/components/productsIndex/productsIndex-item'
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        name: 'catalog',
        data() {
            return {

            }
        },
        components: {
            ProductsIndexItem
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS'
            ]),

            show(data) {
                console.log(data)
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