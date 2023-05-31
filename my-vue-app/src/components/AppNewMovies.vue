<script>
import { store } from '../store'

export default {
    name: " ",
    data() {
        return {
            store,
            currentCard: 0,
        }
    },
    methods: {
        nextCard() {
            if (this.currentCard <= this.store.movies.length - 4) {
                this.currentCard++;
            } else {
                this.currentCard = 0;
            }
        },
        previousCard() {
            if (this.currentCard == 0) {
                this.currentCard = this.store.navItems.length - 2;
            } else {
                this.currentCard--;
            }


        },
    }
}
</script>

<template>
    <div class="container-lg d-flex justify-content-between align-items-center">
        <!-- SECTION TITLE -->
        <div class="row dscrptContainer w-100">
            <div class="col-11 ps-4 pb-2 sectionDscrpt text-white">
                <h3>New Movies</h3>
                <p>Discover our new horror movies, if you dare. </p>
            </div>
            <div class=" col-1 d-flex align-items-center btnContainer">
                <i @click="previousCard()" class="fa-solid fa-circle-chevron-right reversed"></i>
                <i @click="nextCard()" class="fa-solid fa-circle-chevron-right"></i>
            </div>
        </div>
    </div>
    <!-- CARD SLIDER -->
    <div class="container-lg">
        <div class="cardSlider row w-100 d-flex align-items-center">

            <div class="sideMovieCard col-4">
                <template v-for="(movie, i) in store.movies">
                    <img class="sideImg" v-show="i == currentCard" :src="movie.xlUrlPath" alt="">
                    <div v-show="i == currentCard" class="cardDscrpt text-white">
                        <h3 class="ps-4 mt-3">{{ movie.title }}</h3>
                        <p class="ps-4 mt-3">Category: {{ movie.category }}</p>
                        <div class="tags d-flex justify-content-between">
                            <div class="left">Details</div>
                            <div class="right">{{ movie.views }} Views</div>
                        </div>
                    </div>
                </template>
            </div>

            <div class="movieCard col-4">
                <template v-for="(movie, i) in store.movies">
                    <img class="centerImg" v-show="i == currentCard + 1" :src="movie.xlUrlPath" alt="">
                    <div v-show="i == currentCard + 1" class="cardDscrpt text-white">
                        <h3 class="ps-4 mt-3">{{ movie.title }}</h3>
                        <p class="ps-4 mt-3">Category: {{ movie.category }}</p>
                        <div class="tags d-flex justify-content-between">
                            <div class="left">Details</div>
                            <div class="right">{{ movie.views }} Views</div>
                        </div>
                    </div>
                </template>
            </div>

            <div class="sideMovieCard col-4">
                <template v-for="(movie, i) in store.movies">
                    <img class="sideImg" v-show="i == currentCard + 2" :src="movie.xlUrlPath" alt="">
                    <div v-show="i == currentCard + 2" class="cardDscrpt text-white">
                        <h3 class="ps-4 mt-3">{{ movie.title }}</h3>
                        <p class="ps-4 mt-3">Category: {{ movie.category }}</p>
                        <div class="tags d-flex justify-content-between">
                            <div class="left">Details</div>
                            <div class="right">{{ movie.views }} Views</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.container-lg {
    padding-top: 80px;

    .dscrptContainer {
        max-height: 80px;
        border-left: 3px solid $accentColor;

        .sectionDscrpt {
            border-bottom: 2px solid $borderColor;
        }

        .btnContainer {
            color: $accentColor;
            font-size: 35px;

            .reversed {
                transform: rotate(180deg);
                margin-right: 10px;
            }
        }
    }

    .cardSlider {
        min-height: 588px;
        display: flex;

        .movieCard {
            height: 588px;
            border-radius: 20px;
            padding: 0;
            position: relative;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


            .centerImg {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                filter: saturate(60%);
            }

        }

        .sideMovieCard {
            height: 485px;
            border-radius: 20px;
            padding: 0;
            position: relative;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


            .sideImg {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                filter: saturate(60%);

            }
        }
    }

    .cardDscrpt {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-weight: 600;
    }

    .tags {

        div {
            background-color: $primaryColor;
            margin-bottom: 20px;
            padding: 12px 20px;
            margin-top: 40px;
            font-size: 12px;
        }

        .left {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }

        .right {
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
    }
}
</style>