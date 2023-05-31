<script>
import { store } from "../store";

export default {
    name: "AppMoviePlaylist",
    data() {
        return {
            store
        }
    }

}
</script>
  
  
<template>
    <div class="container-lg d-flex justify-content-between align-items-center">
        <div class="row dscrptContainer w-100">
            <div class="col-12 ps-4 pb-2 sectionDscrpt text-white">
                <h3>Movie Playlist</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    deleniti. </p>
            </div>
        </div>
    </div>
    <!-- YOUTUBE PLAYER -->
    <div class="container-lg d-flex justify-content-between align-items-center">
        <div class="row playlistContainer justify-content-between w-100">
            <div class="col-8 youtubeWindow"></div>
            <div class="col-auto p-0 text-white">
                <div class="playlistDscrpt p-2">
                    <p class="playlistTitle fs-5 fw-bold ps-2">New Movie</p>
                    <small class="ps-2">Playing {{ store.movies.length }} movies</small>
                </div>
                <div class="movieList">
                    <template v-for="movie in store.movies">
                        <div class="movieLine d-flex mt-4 mb-4 ps-3">
                            <div class="movieCover">
                                <img :src="movie.smUrlPath" alt="">
                            </div>
                            <div class="movieDscrpt ps-3 pe-3 w-100">
                                <p class="fs-5">{{ movie.title }}</p>
                                <small>{{ movie.views }} views</small>
                                <div class="movieTime d-flex justify-content-between">
                                    <p>data</p>
                                    <p>durata</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </template>

                </div>
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

    }

    .playlistContainer {
        max-height: 565px;

        .youtubeWindow {
            background-color: black;
        }
    }

    .col-auto {
        width: 390px;
        max-height: 565px;
        background-color: $primaryColor;

        .movieList {
            max-height: 490px;
            border-top: 1px solid $tertiaryColor;
            overflow-x: auto;

            .movieLine {
                width: 100%;
                height: 100px;

                .movieCover {
                    min-width: 100px;
                    height: 100px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .movieTime {
                    color: rgb(169, 169, 169);
                    font-size: 12px;
                    padding-top: 20px;
                }
            }
        }

    }
}
</style>
  