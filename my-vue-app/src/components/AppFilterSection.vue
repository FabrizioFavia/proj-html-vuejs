<script>
import { store } from '../store';

export default {
    name: "AppFilterSection",
    data() {
        return {
            store,
            clickedCategory: 0,
        }
    },
    methods: {
        categoryFilter(category) {

            store.categories.map(category =>
                category.clicked = false
            );
            this.store.categories[this.clickedCategory].clicked = true;
            this.store.filter = category.name == "All" ? null : category.name;
        },
        movieFiltered() {

            if (this.store.filter) {
                return this.store.movies.filter(element => element.category.includes(this.store.filter))
            }
            return this.store.movies
        }
    }
}
</script>

<template>
    <div class="container-lg sectionTitle d-flex justify-content-between align-items-center">
        <div class="row dscrptContainer w-100">
            <div class="col-12 ps-4 pb-2 sectionDscrpt text-white">
                <h3>Categories</h3>
                <p>Filter your favorite movies by their category.</p>
            </div>
        </div>
    </div>
    <div class="container-lg ps-0 d-flex justify-content-between align-items-center">
        <ul class="d-flex mb-5">
            <template v-for="(category, i) in store.categories">
                <li @click="clickedCategory = i, categoryFilter(category)"
                    :class="category.clicked ? 'green' : 'text-white'" class="me-4 clickable">{{ category.name }}</li>
            </template>
        </ul>
    </div>
    <div class="container-lg d-flex justify-content-between align-items-center">
        <div class="cardContainer d-flex flex-wrap">
            <template v-for="movie in movieFiltered()">
                <div class="movieCard text-white">
                    <img :src="movie.xlUrlPath" alt="">
                    <div class="cardDscrpt text-white d-flex flex-column justify-content-between h-100">
                        <div class="movieRateTime d-flex flex-column pe-4 pt-4">
                            <div class="d-flex justify-content-between">
                                <div class="time mt-1">
                                    <div class="left">{{ movie.time }}</div>
                                </div>
                                <div class="rate d-flex align-items-center">
                                    <i class="fa fa-star me-1"></i>
                                    <p>{{ movie.rate }}/10</p>
                                </div>
                            </div>
                            <div class="player d-flex justify-content-center">
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                        </div>

                        <div>
                            <h3 class="ps-4 mt-3">{{ movie.title }}</h3>
                            <p class="ps-4 mt-3">Category: {{ movie.category.toString() }}</p>
                            <small class="ps-4 mt-3 d-block fw-light genre">Genres: {{ movie.genre }}</small>
                            <small class="ps-4 fw-light date">Release: {{ movie.date }}</small>
                            <div class="tags d-flex justify-content-between">
                                <div class="left">Details</div>
                                <div class="right">{{ movie.views }} Views</div>
                            </div>
                        </div>
                    </div>
                    <div class="cardHover position-absolute top-0 w-100 h-100">
                    </div>
                </div>
            </template>
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


.green {
    color: $accentColor;
}

.movieCard {
    width: 390px;
    height: 500px;
    padding: 0;
    border: 1px solid $borderColor;
    margin-bottom: 50px;
    margin-right: 35px;
    position: relative;

    .cardHover {
        background: rgb(255, 255, 255);
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 15%, rgba(44, 166, 164, 1) 89%);
        opacity: 30%;
        visibility: hidden;
    }

    &:hover .cardHover {
        visibility: visible;
    }

    .cardDscrpt {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-weight: 600;
        z-index: 2;

        .movieRateTime {
            font-size: 14px;
            height: 100%;

            &:hover .time {
                visibility: visible;
            }

            .time {
                background-color: $accentColor;
                margin-bottom: 20px;
                padding: 12px 20px;
                font-size: 12px;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                visibility: hidden;
            }

            p {
                font-weight: 300;
            }

            .fa-star {
                color: $accentColor;
            }

        }

        .fa-circle-play {
            font-size: 60px;
            color: rgba(255, 255, 255, 0.397);
            visibility: hidden;
            padding-top: 100px;
        }

        &:hover .fa-circle-play {
            visibility: visible;
        }

        .genre {
            visibility: hidden;
        }

        .date {
            visibility: hidden;
        }

        &:hover .genre {
            visibility: visible;
        }

        &:hover .date {
            visibility: visible;
        }
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

    img {
        width: 100%;
        height: 100%;
        filter: brightness(50%);
    }

    .centerImg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        filter: saturate(60%);
    }

}
</style>