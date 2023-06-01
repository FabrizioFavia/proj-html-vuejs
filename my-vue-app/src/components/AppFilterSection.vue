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
                    <div class="cardDscrpt">
                        <p>{{ movie.title }}</p>
                        <p>Category: {{ movie.category.toString() }}</p>
                        <p>{{ movie.views }} views</p>
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

ul {
    list-style-type: none;
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

    .cardDscrpt {
        position: absolute;
        top: 0;


    }

    img {
        width: 100%;
        height: 100%;
        filter: brightness(0.8);
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