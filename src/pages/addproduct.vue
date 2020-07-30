<template>
    <div class="addproduct container-admin">
        <Menu />
        <section role="main" class="main">
            <div class="main__text">
                <h1>Добавление товара</h1>
            </div>
            <div class="form-admin">
                <form action="" class="form-admin__all">
                    <div class="form-admin__block">
                        <p class="form-admin__name">Название:</p>
                        <input type="text" id="name" placeholder="">
                    </div>
                    <div class="form-admin__block">
                        <p class="form-admin__name">Фото:</p>
                        <input type="text" id="surn" placeholder="">
                    </div>
                    <div class="form-admin__block">
                        <p class="form-admin__name">Цена:</p>
                        <input type="text" id="surn" placeholder="">
                    </div>
                    <div class="form-admin__block">
                        <p class="form-admin__name">Производительность:</p>
                        <input type="text" id="surn" placeholder="">
                    </div>
                    <div class="form-admin__block">
                        <p class="form-admin__name1">Описание:</p>
                        <textarea name="comment" cols="40" rows="3"></textarea>
                    </div>
                    <div class="main__button-add">
                        <input type="submit" value="Добавить товар">
                    </div>

                </form>
            </div>
        </section>
    </div>
</template>

<script>
    import Menu from '@/admin/menu'
    export default {

        name: 'addproduct',
        data() {
            return {}
        },
        components: {
            Menu,
        }
    }
</script>