<template>
    <div class="admin-index container-admin">
        <Menu />
        <section role="main" class="main">
            <div class="main__text">
                <h1>Товары</h1>
            </div>
            <CatalogIndex />
            <div class="main__button" id="admin">
                <router-link to="/admin/addproduct"> <button>Добавить товар</button></router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import CatalogIndex from '@/components/catalog-index'
    // import Catalog from '@/components/catalog'
    import Menu from '@/admin/menu'
    export default {

        name: 'admin-index',
        data() {
            return {}
        },
        components: {
            Menu,
            CatalogIndex
        }
    }
</script>