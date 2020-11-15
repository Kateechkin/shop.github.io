import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        news: []
    },
    mutations: {
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
                    if (item.article === product.article) {
                        isProduct = true;
                        item.quantity++
                    }
                })
                if (!isProduct) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS({ commit }) {
            return axios('https://e430fbd60ad0.ngrok.io/api/products', {
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
            return axios('https://e430fbd60ad0.ngrok.io/api/news', {
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
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
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