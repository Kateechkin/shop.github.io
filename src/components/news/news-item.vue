<template>
    <figure class="news-item-block">
        <img :src="require('../../assets/image/'+ news_data.image)" alt="img" width="296" height="250">
        <figcaption class="news-item-block__fig">
            <p class="news-item-block__text">{{news_data.news}}</p>
            <div class="footer-info__communication">
                <input type="button" value="Подробнее" class="footer-info__button">
            </div>
        </figcaption>
    </figure>
</template>
<script>
    export default {
        name: 'news-item',
        props: {
            news_data: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        components: {

        }
    }
</script>