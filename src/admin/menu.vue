<template>
    <div class="menu">
        <nav id="nav" role="navigation" class="open" :class="{ active }">
            <ul>
                <li>
                   <router-link to="/admin"> <a href="#">Продукты</a> </router-link>
                     <router-link to="/admin">  <img src="../assets/image/bag.png" alt="Схема" width="54" height="54"></router-link>
                </li>
                <li>
                    <a href="#">Статистика</a>
                    <img src="../assets/image/strelka.png" alt="Схема" width="59" height="37">
                </li>
                <li>
                     <router-link to="/admin/request"> <a href="#">Заявки</a> </router-link>
                     <router-link to="/admin/request">  <img src="../assets/image/zayavka.png" alt="Схема" width="49" height="50"> </router-link>
                </li>
                <li>
                    <a href="#">Фотографии</a>
                    <img src="../assets/image/foto.png" alt="Схема" width="55" height="47">
                </li>
            </ul>
            <div class="menu__click" >
                <button id="toggle" type="button" @click=" active = !active">
                    <img src="../assets/image/left.png" alt="Схема" width="25" height="43">
                    </button>
            </div>
            <div class= "menu__bottom" >
                <p>Contact us coolwebdudes@gmail.com
                    ver 1.0</p>
            </div>
        </nav>
        <!-- v-bind:class="{ active1: $store.state.cart.length } -->

    </div>
</template>

<script>
    export default {
        name: 'menu',
        data() {
            return {
                active: false
            }
        },
    }
</script>