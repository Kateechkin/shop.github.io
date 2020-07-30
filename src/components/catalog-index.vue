<template>
    <div id="catalog-index ">
        <div class="catalog-index-wrap">
            <CatalogIndexItem  v-for="product in PRODUCTS" :key="product.article" v-bind:product_data="product"
                @addTocart="addTocart" />
        </div>
    </div>
</template>
<script>
    import CatalogIndexItem from '@/components/catalog-index-item'
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        name: 'catalog-index',
        data() {
            return {

            }
        },
        components: {
            CatalogIndexItem
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