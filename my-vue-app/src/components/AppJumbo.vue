<script>

import { store } from '../store'

export default {
    name: "AppJumbo",

    data() {
        return {
            store
        }
    },
    methods: {
        changeSlide() {
            setInterval(() => {

                if (this.store.currentSlide == this.store.slides.length - 1) {
                    this.store.currentSlide = 0;
                } else {
                    this.store.currentSlide += 1;
                }
            }, 8 * 1000);
        }
    },
    mounted() {
        this.changeSlide()
    }
}
</script>

<template>
    <div class="JumboContainer d-flex align-items-center justify-content-center">
        <template v-for="(slide, i) in store.slides">
            <img class="slide" v-show="i == store.currentSlide" :src="slide.urlPath" alt="">
        </template>
        <div class="jumboParagraph d-flex flex-column align-items-center justify-content-center">
            <p class="text-white mb-2">Welcome to our Movie Site</p>
            <p class="text-white mb-2 bigTitle">OUR SPECIAL <span class="greenWord">MOVIES</span></p>
            <div class="paragraph mb-4">
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                    recusandae, excepturi impedit adipisci repudiandae autem. </p>
            </div>
            <button class="btn btn-success text-white">Read More</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.JumboContainer {
    height: 710px;
    position: relative;


    .jumboParagraph {
        width: 500px;
        position: absolute;

        .bigTitle {
            font-size: 48px;
            font-weight: 200;
        }

        .greenWord {
            color: $accentColor;
            font-size: 48px;
        }

        .paragraph {
            text-align: center;
            width: 400px;
        }
    }

    .slide {
        height: 100%;
        width: 100%;
    }

    button {
        background-color: $accentColor;
        border-radius: 20px;
        padding: 0.5em 1em;
    }
}
</style>