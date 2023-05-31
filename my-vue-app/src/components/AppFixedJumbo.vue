<script>
export default {
    name: "AppFixedJumbo"
}

</script>

<template>
    <div class="JumboContainer d-flex align-items-center justify-content-center">
        <img src="src/assets/coming-bg.jpg" alt="" class="slide">
        <div class="jumboParagraph d-flex flex-column align-items-center justify-content-center">
            <p class="mb-2 colorGreen fw-bold">COMING SOON MOVIE</p>
            <p class="text-white mb-2 bigTitle">MAX STILL</p>
            <div class="paragraph mb-4">
                <p class="text-white">JOHN PLAYER <span class="colorGreen">&</span> EMILY ROSE</p>
                <small class="text-white">THE COUNTDOWN IS FINISHED</small>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.JumboContainer {
    height: 710px;
    position: relative;
    margin-top: 80px;


    .jumboParagraph {
        width: 500px;
        position: absolute;

        .colorGreen {
            color: $accentColor;
        }

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

            small {
                font-size: 11px;
            }
        }
    }

    .slide {
        height: 100%;
        width: 100%;
        filter: brightness(0.5);
    }
}
</style>