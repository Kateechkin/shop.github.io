<template>
    <div id="catalog-index ">
        <div class="catalog-index-wrap">
            <CatalogIndexHouseItem  v-for="product in $store.state.products_house" :key="product.article" v-bind:product_data_house="product"
                @addTocart="addTocart" />
        </div>
    </div>
</template>
<script>
    import CatalogIndexHouseItem from '@/components/catalog-index-house-item'
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
            CatalogIndexHouseItem
        },
        computed: {
            ...mapGetters([
                'PRODUCTS_HOUSE'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_HOUSE',
                'ADD_TO_CART_HOUSE'
            ]),

            addTocart(data) {
                this.ADD_TO_CART_HOUSE(data)
            }
        },
        mounted() {
            this.$store.dispatch('GET_PRODUCTS_HOUSE')
            // this.GET_PRODUCTS_HOUSE()
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