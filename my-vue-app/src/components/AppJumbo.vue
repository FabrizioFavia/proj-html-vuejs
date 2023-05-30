<script>

import { store } from '../store'

export default {
    name: "AppJumbo",

    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="JumboContainer">
        <template v-for="(slide, i) in store.slides">
            <img class="slide" v-show="i == store.currentSlide" :src="slide.urlPath" alt="">
        </template>


    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.JumboContainer {
    height: 710px;
    border-bottom: 1px solid $borderColor;

    .slide {
        height: 100%;
    }
}
</style>