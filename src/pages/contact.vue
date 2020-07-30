<template>
<div class="contacts">
        <span class="title1" >Контакты</span>
    <div class="contact containers">
        <div class="contact-info">
            <div class="contact-info__wrap">
                <p class="contact-info__addres">630012, Российская Федерация, г. Новосибирск, ул. Фабричная, 12 офис 15
                </p>
            </div>
            <div class="contact-info__wrap">
                <p class="contact-info__number">+7 (960) 783-95-71 </p>
            </div>
            <div class="contact-info__wrap">
                <p class="contact-info__time">с 9:00 до 18:00</p>
            </div>
            <div class="contact-info__wrap">
                <p class="contact-info__email">aquapriceplus@mail.ru</p>
            </div>
        </div>
       <Map/>
    </div>
</div>
    
</template>

<script>
import Map from '@/components/map'

    export default {
        name: 'contact',
        components: {Map}
    }
</script>