import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        production: JSON.parse(localStorage.getItem('production') || '[]'),

        cart: JSON.parse(localStorage.getItem('cart') || '[]'),
        news: []
    },
    mutations: {

        SET_PRODUCTION(state, production) {
            state.production = production
            localStorage.setItem('production', JSON.stringify(state.production))
        },
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
        SET_NEWS: (state, news) => {
            state.news = news;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProduct = false;
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProduct = true;
                        item.quantity++
                        localStorage.setItem('cart', JSON.stringify(state.cart))
                    }
                })
                if (!isProduct) {
                    state.cart.push(product)
                    localStorage.setItem('cart', JSON.stringify(state.cart))
                }
            } else {
                state.cart.push(product)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        REMOVEALL_FROM_CART(state) {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify(state.cart));

        },
    },
    actions: {

        GET_PRODUCTION({
            commit
        }, production) {

            commit('SET_PRODUCTION', production)
        },
        GET_PRODUCTS({ commit }) {
            return axios('https://8c585af28b90.ngrok.io/api/index', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS', products.data)
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        GET_NEWS({ commit }) {
            return axios('https://8c585af28b90.ngrok.io/api/news', {
                method: "GET"
            })
                .then((news) => {
                    commit('SET_NEWS', news.data)
                    return news;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index)
        },
        DELETEALL_FROM_CART({ commit }) {
            commit('REMOVEALL_FROM_CART')

        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },

        PRODUCTION(state) {
            return state.production;
        },
        NEWS(state) {
            return state.news;
        },
        CART(state) {
            return state.cart;
        }
    }
});
export default store;