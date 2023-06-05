<script>

export default {
    name: "AppTopArrow",
    methods: {
        onScroll(event) {
            const button = document.getElementById("topButton");
            if (button) {
                if (document.documentElement.scrollTop > 150) {
                    button.classList.add("goToTop-zoom")
                } else {
                    button.classList.remove("goToTop-zoom")
                }
            }

        }
    },
    created() {
        window.addEventListener("scroll", this.onScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.onScroll);
    }

}

</script>

<template>
    <a class="goToTop" id="topButton" href="#">
        <button class="w-100 h-100">
            <i class="fa-solid fa-chevron-up"></i>
        </button>
    </a>
</template>


<style lang="scss" scoped>
@use "../main.scss" as *;

.goToTop {
    opacity: 80%;

    position: fixed !important;

    bottom: 70px !important;

    right: 2vw !important;

    width: 0px;

    height: 0px;

    border-width: 0px;

    background-color: $primaryColor;

    transition: width 0.5s, height 0.5s;

}

@-webkit-keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.goToTop-zoom button {
    display: unset !important;
    fill: white !important;
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    stroke: white;
}

.goToTop button {
    display: none;
    fill: transparent;
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
}

.goToTop-zoom {
    width: 32px;
    height: 32px;
    z-index: 100;
}
</style>