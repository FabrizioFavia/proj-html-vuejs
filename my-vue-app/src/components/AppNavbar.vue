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
                        <li class="text-white ms-3">{{ item.label }}</li>
                        <i v-if="item.subMenu.length" class="fa-solid fa-caret-down ms-1"></i>
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
    border-bottom: 2px solid $borderColor;

    ul {
        list-style-type: none;

        li,
        i {
            color: white;
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