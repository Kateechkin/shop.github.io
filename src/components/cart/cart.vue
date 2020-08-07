<template>
    <div class="cart-popup" v-show="show">
        <div class="cart-item">
            <h3 class="cart-item__name">Корзина</h3>
            <!-- <p class="cart-item__empty" v-bind:class="{ active: $store.state.cart.length }">Список пуст!</p> -->
            <Cartitem  v-for="(item,index) in cart_data" :key="item.article" :cart_item_data="item"
                @DeleteFromCart="DeleteFromCart(index)" />
            <div class="cart-blok" v-if="$store.state.cart.length" v-bind:class="{ active1: $store.state.cart.length }">
            <router-link to="/order"> <button class="cart-blok__button"> Оформить заявку</button> </router-link>
                 </div>
        </div>

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