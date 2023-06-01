<script>

import { store } from '../store';

export default {
    name: "AppLatestNews",
    data() {
        return {
            store,
        }
    }

}
</script>


<template>
    <div class="container-lg sectionTitle d-flex justify-content-between align-items-center">
        <div class="row dscrptContainer w-100">
            <div class="col-12 ps-4 pb-2 sectionDscrpt text-white">
                <h3>Latest News</h3>
                <p>Check out the newly released horror movies on our site.</p>
            </div>
        </div>
    </div>

    <div class="container-lg latestContainer d-flex justify-content-between align-items-center">

        <!-- BIG SQUARE -->
        <div class="latestMovies d-flex justify-content-between">
            <template v-for="(movie, i) in store.movies">
                <div v-if="i == 0 && movie.category.includes(`Latest Movie`)" class="square h-100">
                    <img :src="movie.xlUrlPath" alt="">
                    <div class="cardDscrpt text-white">
                        <h3 class="ps-4 mt-3 mb-3">{{ movie.title }}</h3>

                        <div class="tags d-flex justify-content-between">
                            <div class="left clickable">Details</div>
                            <div class="right clickable">0 comments Share</div>
                        </div>
                    </div>
                </div>
            </template>

            <!-- SMALL SQUARE -->
            <div class="square d-flex flex-wrap h-100 justify-content-between align-content-between">
                <template v-for="(movie, i) in store.movies">
                    <div v-if="i > 0 && movie.category.includes(`Latest Movie`)" class="smallSquare">
                        <img :src="movie.xlUrlPath" alt="">
                        <div class="cardDscrpt text-white">
                            <h3 class="ps-4 mt-3 fs-5">{{ movie.title }}</h3>

                            <div class="tags d-flex justify-content-between">
                                <div class="left clickable">Details</div>
                                <div class="right clickable">Share</div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.sectionTitle {
    padding-top: 80px;

    .dscrptContainer {
        max-height: 80px;
        border-left: 3px solid $accentColor;
        margin-bottom: 55px;

        .sectionDscrpt {
            border-bottom: 2px solid $borderColor;
        }
    }
}

.latestContainer {
    padding: 0;

    .latestMovies {
        width: 1293px;
        height: 600px;

        .square {
            width: 600px;
            position: relative;

            .cardDscrpt {
                position: absolute;
                bottom: 0;
                width: 100%;
                font-weight: 600;
            }

            .tags {

                border-top: 1px solid $tertiaryColor;

                div {
                    margin-bottom: 20px;
                    padding: 12px 20px;
                    margin-top: 15px;
                    font-size: 12px;
                }

                .left {
                    background-color: $primaryColor;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                }

                .right {
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
            }

            img {
                width: 100%;
                height: 100%;
                filter: brightness(50%);
            }

            .smallSquare {
                width: calc((100% / 2) - 10px);
                height: calc((100% / 2) - 10px);
                position: relative;

                .cardDscrpt {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    font-weight: 600;
                }

                .tags {

                    border: 0;

                    div {
                        margin-bottom: 20px;
                        padding: 12px 20px;
                        margin-top: 40px;
                        font-size: 12px;
                    }

                    .left {
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                        background-color: $primaryColor;
                    }
                }
            }
        }
    }
}
</style>