<template>
    <div id="map">
        <GmapMap v-bind="options" class="maps"> </GmapMap>
    </div>
</template>

<script>
    import {
        gmapApi
    } from 'vue2-google-maps';
    export default {
        name: 'map',
        components: {},
        data() {
            return {
                options: {
                    zoom: 17,
                    center: {
                        lat: 55.016830,
                        lng:  82.919810
                    },
                    mapTypeId: 'roadmap'
                }
            };
        },
        computed: {
            google: gmapApi
        },
    }
</script>

