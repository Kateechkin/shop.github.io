<template>
    <figure class="catalog-index-item">
        <img :src="require('../assets/image/' + product_data_house.image)" alt="img" width="243" height="243">
        <figcaption class="catalog-index-item__fig">
            <p class="catalog-item__name"> {{product_data_house.name}}</p>
            <p class="catalog-item__performance">Производительность: {{product_data_house.performance}} л/ч</p>
            <div class="catalog-item__wrap">
                <p class="catalog-item__price">Цена: {{product_data_house.price}} P.</p>
                <button class="catalog-item__button2" @click="addTocart">Заказать</button>
            </div>
        </figcaption>
    </figure>
</template>
<script>
    export default {
        name: 'catalog-index-house-item',
        props: {
            product_data_house: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        components: {

        },
        methods: {
            addTocart() {
                this.$emit('addTocart', this.product_data_house)
            }
        }
    }
</script>