<template>
    <div id="catalog ">
        <!-- <h1 class="catalogh1">Продукция</h1> -->
        <div class="catalog-wrap">
            <CatalogItem v-for="product in PRODUCTS" :key="product.article" v-bind:product_data="product"
                @sendArticle="show" />
        </div>
    </div>
</template>
<script>
    import CatalogItem from '@/components/catalog-item'
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
            CatalogItem
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