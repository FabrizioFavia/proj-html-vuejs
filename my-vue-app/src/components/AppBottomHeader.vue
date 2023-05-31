<script>
import AppHeaderSearch from './AppHeaderSearch.vue';

export default {
    name: "AppBottomHeader",
    components: {
        AppHeaderSearch
    }
}
</script>


<template>
    <div class="bottomHeader">
        <div class="container-lg d-flex justify-content-between align-items-center h-100">
            <div class="logoContainer">
                <img src="../assets/cropped-logo.png" alt="">
            </div>
            <div class="searchContainer">
                <AppHeaderSearch />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;


.bottomHeader {
    height: 122px;
    border-bottom: 2px solid $borderColor;
    background-color: $tertiaryColor;
}
</style>