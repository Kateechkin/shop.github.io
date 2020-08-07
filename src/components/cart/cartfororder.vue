<template>
    <div class="" v-show="show">
        <div class="cart-item-order">
            <h3 class="cart-item-order__name">Корзина</h3>
            <Cartitem  v-for="(item,index) in cart_data" :key="item.article" :cart_item_data="item"
                @DeleteFromCart="DeleteFromCart(index)" />
        </div>
         <router-link to="/admin/request"> <button>Добавить товар</button></router-link>
    </div>
</template>

<script>
    import Cartitem from '@/components/cart/cart-item'
    import {
        mapActions
    } from 'vuex'
    export default {
        name: 'cart',
        props: {
            cart_data: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {
                show: true
            }
        },
        components: {
            Cartitem
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),

            DeleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            },
            ShowCart() {
                if (this.show) {
                    this.show = false
                } else
                    this.show = true
            }
        }

    }
</script>