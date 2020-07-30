import Vue from 'vue'
import Router from 'vue-router'


import Products from '../pages/products'
import Index from '../pages/index'
import Contact from '../pages/contact'
import Order from '../pages/order'
import Admin from '../pages/admin-index'
import Addproduct from '../pages/addproduct'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Index,
            props: true,
            meta: {
                showFeedback: true,
                showSearch: true
            }
        },
        {
            path: '/product',
            name: 'products',
            component: Products,
            props: true,
            isActive: false,
            meta: {
                showFeedback: true,
                showCart: true,
                showSearch: false
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                showFeedback: true,
                showSearch: true
            }
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            props: true,
            meta: {
                showFeedback: true,
                showSearch: true
            }
        },

        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            props: true,
            meta: {
                showFeedback: false,
                showSearch: true
            }

            // children: [{
            //     name: 'addproduct',
            //     path: '/addproduct',
            //     component: Addproduct,
            //     // props: true
            // }]
        },
        {
            path: '/admin/addproduct',
            name: 'addproduct',
            component: Addproduct,
            props: true,
            meta: { showFeedback: false }
        },
    ]
})

export default router;