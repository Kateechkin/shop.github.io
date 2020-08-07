<template>
    <div class="admin-index container-admin">
        <Menu />
        <section role="main" class="main">
            <div class="main__text">
                <h1>Заявки</h1>
            </div>
            <div class="request-block">
                <div class="request-block__one">
                    <div class="request-block__head">
                        <h2>Обратный звонок</h2>
                    </div>
                    <div class="request-call">
                        <div class="request-call__wrap">
                            <p class="request-call__text">Егор Маслов</p>
                            <p class="request-call__text">8 911 556 44 22</p>
                        </div>
                        <div class="request-call__signal" v-bind:class="{ activetis: isActive}"></div>
                    </div>
                </div>
                <div class="request-block__one">
                    <div class="request-block__head">
                        <h2>Покупка</h2>
                        <!-- <Cartitem v-for="(item,index) in cart_data" :key="item.article" :cart_item_data="item"
                            @DeleteFromCart="DeleteFromCart(index)" /> -->
                            <Cartitem  v-for=" item in cart_data" :key="item.article" :cart_item_data="item" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // import Catalog from '@/components/catalog'
    import Menu from '@/admin/menu'
    import Cartitem from '@/components/cart/cart-item'
        import {
        mapActions
    } from 'vuex'

    export default {

        name: 'request',
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
                isActive: true,
            }
        },
        components: {
            Menu,
            Cartitem
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),

            DeleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            },
        }
    }
</script>