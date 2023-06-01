<script>
import { store } from '../store'

export default {
    name: "AppFooter",
    data() {
        return {
            store,
        }
    }

}
</script>


<template>
    <footer>
        <img class="footerImg" src="src/assets/ft-bg.jpg" alt="">
        <div class="over w-100 h-100">
            <div class="container-lg h-100">
                <div class="row">

                    <div class="col-3 pe-5">
                        <div class="title text-white fw-bold fs-5">About Us</div>
                        <div class="line"></div>
                        <p class="text-white mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cupiditate
                            quas nam, fugiat soluta amet perferendis nihil, neque ea dicta quisquam pariatur? Quidem </p>

                        <div class="logoContainer text-white d-flex">
                            <div class="logoCircle facebook d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div class="logoCircle twitter d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                            <div class="logoCircle linkedin d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                            <div class="logoCircle insta d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div class="logoCircle pinterest d-flex justify-content-center align-items-center">
                                <i class="fa-brands fa-pinterest"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="title text-white fw-bold fs-5">Movie Category</div>
                        <div class="line"></div>
                        <ul>
                            <li>English New Movie</li>
                            <li>Hindi All Movie</li>
                            <li>Latest Tamil Movie</li>
                            <li>New Top Rating Movie</li>
                            <li>Horn New Movie</li>
                            <li>Animation New Movie</li>
                        </ul>
                    </div>

                    <div class="col-3">
                        <div class="title text-white fw-bold fs-5">Information</div>
                        <div class="line"></div>
                        <ul>
                            <li>Youtube Video Post</li>
                            <li>Actor Information</li>
                            <li>New Promotion</li>
                            <li>Latest Movie in English</li>
                            <li>Latest Film Product</li>
                            <li>New Videos</li>
                        </ul>
                    </div>

                    <div class="col-3">
                        <div class="title text-white fw-bold fs-5">Recent Posts</div>
                        <div class="line"></div>
                        <template v-for="(movie, i) in store.movies">
                            <div v-if="i <= 2" class="movieLine d-flex mt-4 text-white">
                                <div class="movieCover">
                                    <img :src="movie.smUrlPath" alt="">
                                </div>
                                <div class="movieDscrpt pe-3 w-100">
                                    <p class="fs-6">{{ movie.title }}</p>
                                    <div class="movieTime d-flex justify-content-between">
                                        <p>{{ movie.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBottom">
            <div class="container-lg fs-6 d-flex justify-content-between align-items-center h-100">
                <div class="left d-flex">
                    <div>
                        <span>Term and Conditions</span>
                    </div>
                    <div>
                        <span>Policy</span>
                    </div>
                    <div>
                        <span>About</span>
                    </div>
                </div>
                <div>© 2023 <span class="green">Fabrizio</span> All Right reserved</div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

footer {
    height: 500px;
    position: relative;

    .footerImg {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(50%);
        filter: saturate(20%);
    }


    .over {
        height: 100%;
        background-color: $tertiaryColor;
        position: absolute;
        top: 0;
        opacity: 90%;

        .container-lg {
            padding-top: 70px;

            .line {
                width: 40px;
                height: 2px;
                background-color: white;
                margin-bottom: 30px;
            }

            ul li {
                color: white;
                margin-bottom: 20px;
                font-weight: 300;
                font-size: 15px;
            }

            .logoCircle {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                margin-right: 10px;

                &:hover {
                    background-color: $tertiaryColor;
                    color: $accentColor;
                }

                i {
                    font-size: 14px;
                }
            }

            .movieLine {
                width: 100%;
                height: 80px;

                .movieCover {
                    min-width: 70px;
                    height: 70px;
                    margin-right: 20px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .movieTime {
                    font-size: 12px;
                    padding-top: 20px;
                }
            }
        }

        .facebook {
            background-color: $bgFacebook;
        }

        .twitter {
            background-color: $bgTwitter;
        }

        .linkedin {
            background-color: $bgLinkedin;
        }

        .insta {
            background-color: $bgInsta;
        }

        .pinterest {
            background-color: $bgPinterest;
        }
    }


    .footerBottom {
        height: 60px;
        background-color: $tertiaryColor;
        color: white;

        .green {
            color: $accentColor;
        }

        .left div {
            margin-right: 20px;
        }
    }
}
</style>