<template>
    <div class="order">
        <h3 class="title1">Оформление заявки</h3>
        <div class="order-wrap containers">
        <div class="order-container">
        <form action="" class="order-form" >
            <div class="order-form__wrap">
            <p class="order-form__name">Введите имя:</p>
            <input type="text" id="name" placeholder="Иван">
            </div>
            <div class="order-form__wrap">
            <p class="order-form__name">Введите фамилию:</p>
            <input type="text" id="surn" placeholder="Иванов">
            </div>
            <div class="order-form__wrap">
            <p class="order-form__name">Введите Email:</p>
            <input type="email" id="email" placeholder="kkk@yandex.ru" >
            </div>
            <div class="order-form__wrap">
            <p class="order-form__name">Номер телефона:</p>
            <input type="text" id="phone" placeholder="+7(***)(**)(**)" >
            </div>
            <button class="catalog-item__button">Оформить заказ</button>
        </form>
        </div>
         <div class="order-result">
            <CartOrder v-if="$store.state.cart.length" :cart_data="$store.state.cart" v-show="show" />
        </div>
        </div>

    </div>
</template>

<script>
    // Импорт компонентов
    // import Catalog from '@/components/catalog'
    // import Cart from '@/components/cart'
    //  import Cartitem from '@/components/cart-item'
    //  import Cart from '@/components/cart'
      import CartOrder from '@/components/cartfororder'
      import {mapActions} from 'vuex'


    export default {
        name: 'order',
         props: {
            item: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        // props: {
        //     cart_item_data: {
        //         type: Array,
        //         default () {
        //             return []
        //         }
        //     }
        // },
        data() {
            return {
                show: true
            }
        },
        components: {
            // Cart
            CartOrder
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