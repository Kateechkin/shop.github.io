<template>
        <div class="cart-item-wrap">
            <img :src="require('../../assets/image/' + cart_item_data.image)" alt="img">
            <div class="cart-item-info">
                <p>{{cart_item_data.name}}</p>
                <p>Цена: {{cart_item_data.price}}</p>
                <!-- <p>{{cart_item_data.article}}</p> -->
            </div>
            <div class="cart_item_quantity">Кол-во: {{cart_item_data.quantity}}</div>
            <button @click="DeleteFromCart" class="cart-item-button-del">×</button>
        </div>
</template>

<script>
    export default {
        name: 'cart-item',
        props: {
            cart_item_data: {
                type: Object,
                default () {
                    return []
                }
            }
        },
        data() {
            return {

            }
        },
        methods: {
            DeleteFromCart() {
                this.$emit('DeleteFromCart')
            }
        },
        mounted() {
            this.$set(this.cart_item_data, 'quantity', 1)
        }

    }
</script>