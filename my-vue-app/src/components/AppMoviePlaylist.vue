<script>
import { store } from "../store";

export default {
    name: "AppMoviePlaylist",
    data() {
        return {
            store,
            selectedMovie: 0,
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
            <!-- YOUTUBE WINDOW -->
            <div class="col-8 p-0 youtubeWindow">
                <img class="h-100" :src="store.movies[selectedMovie].xlUrlPath" alt="">
                <div class="windowInfo d-flex flex-column justify-content-between text-white">
                    <div class="topInfo d-flex justify-content-between p-2">
                        <div class="d-flex align-items-center">
                            <img class="logo me-3" src="src/assets/channels4_profile.jpg" alt="">
                            <p class="fs-5">{{ store.movies[selectedMovie].title }} | Official trailer | {{
                                store.movies[selectedMovie].director }}</p>
                        </div>
                        <div class="d-flex">
                            <div class="d-flex flex-column align-items-center me-3">
                                <i class="fa-solid fa-clock fs-5"></i>
                                <small>Guarda più...</small>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <i class="fa-solid fa-share fs-5"></i>
                                <small>Condividi</small>
                            </div>
                        </div>
                    </div>
                    <div class="bottomInfo d-flex align-items-center me-2">Guarda su
                        <i class="fa-brands fa-youtube ms-2"></i> Youtube
                    </div>
                </div>
            </div>

            <!-- MOVIE PLAYLIST -->
            <div class="col-auto p-0 text-white">
                <div class="playlistDscrpt p-2">
                    <p class="playlistTitle fs-5 fw-bold ps-2">New Movie</p>
                    <small class="ps-2">Playing {{ store.movies.length }} movies</small>
                </div>
                <div class="movieList">
                    <template v-for="(movie, i) in store.movies">
                        <div @click="selectedMovie = i" class="movieLine d-flex mt-4 mb-4 ps-3">
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
            max-height: 565px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }

            .windowInfo {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;

                .logo {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }

                .bottomInfo {
                    width: 185px;
                    margin-bottom: 6px;
                    padding: 10px 10px;
                    background-color: $borderColor;

                }
            }
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
  