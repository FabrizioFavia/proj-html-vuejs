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
    <h1>AppBottomHeader</h1>
    <AppHeaderSearch />
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

h1 {
    color: $secondaryColor;
}
</style>