<script>

import { store } from "../store"

export default {
    name: "AppNavbar",
    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <div class="navBar">
        <div class="container-lg d-flex justify-content-between align-items-center h-100">
            <div class="listContainer d-flex">
                <ul class="d-flex align-items-center">
                    <template v-for="item in store.navItems">
                        <div v-if="item.subMenu.length" class="dropdown me-3">
                            <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{ item.label }}
                            </a>

                            <ul class="dropdown-menu p-0">
                                <li v-for="link in item.subMenu">
                                    <a :class="link.disable == true ? 'disabled disabledLink' : ' '"
                                        class="dropdown-item subItem" :href="link.link">{{
                                            link.label }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="me-3" v-else><a :href="item.link">{{ item.label }}</a></div>
                    </template>

                </ul>
            </div>
            <div class="cartContainer">
                <i class="fa-solid fa-cart-shopping text-white"></i>
                <div class="popup d-flex align-items-center justify-content-center text-white">0</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.navBar {
    height: 75px;
    background-color: $tertiaryColor;

    .subItem:hover {
        color: $tertiaryColor;
    }

    ul {
        list-style-type: none;
        background-color: $tertiaryColor;

        a {
            text-decoration: auto;
            color: white;

        }

        .disabledLink {
            color: gray;
        }


    }
}

.cartContainer {
    position: relative;
    padding: 10px;

    .popup {
        width: 12px;
        height: 12px;
        font-size: 10px;
        border-radius: 50%;
        background-color: $accentColor;
        position: absolute;
        top: 2px;
        right: 3px;
    }
}
</style>