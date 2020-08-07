<template>
    <div class="admin-index container-admin">
        <Menu />
        <section role="main" class="main">
            <div class="main__text">
                <h1>Товары</h1>
            </div>
            <ProductsHome />
            <div class="main__button" id="admin">
                <router-link to="/admin/addproduct"> <button>Добавить товар</button></router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import ProductsHome from '@/components/productsHome/productsHome'
    // import Catalog from '@/components/catalog'
    import Menu from '@/admin/menu'
    export default {

        name: 'admin-index',
        data() {
            return {}
        },
        components: {
            Menu,
            ProductsHome
        }
    }
</script>