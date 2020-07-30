import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store_item = new Vuex.Store({
    state: {
        products_house: [],
        cart_house: []
    },
    mutations: {
        SET_PRODUCTS_HOUSE: (state, products_house) => {
            state.products_house = products_house;
        },
        SET_CART_HOUSE: (state, product) => {
            if (state.cart_house.length) {
                let isProduct = false;
                state.cart_house.map(function(item) {
                    if (item.article === product.article) {
                        isProduct = true;
                        item.quantity++
                    }
                })
                if (!isProduct) {
                    state.cart_house.push(product)
                }
            } else {
                state.cart_house.push(product)
            }
        },
        REMOVE_FROM_CART_HOUSE: (state, index) => {
            state.cart_house.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS_HOUSE({ commit }) {
            return axios('http://localhost:3000/products_house', {
                    method: "GET"
                })
                .then((products_house) => {
                    commit('SET_PRODUCTS_HOUSE', products_house.data)
                    return products_house;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_CART_HOUSE({ commit }, product) {
            commit('SET_CART_HOUSE', product)
        },
        DELETE_FROM_CART_HOUSE({ commit }, index) {
            commit('REMOVE_FROM_CART_HOUSE', index)
        }
    },
    getters: {
        PRODUCTS_HOUSE(state) {
            return state.products_house;
        },
        CART_HOUSE(state) {
            return state.cart_house;
        }
    }
});

export default store_item;