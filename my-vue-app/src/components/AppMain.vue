<script>
import AppJumbo from './AppJumbo.vue';
import AppNewMovies from './AppNewMovies.vue';
import AppMoviePlaylist from './AppMoviePlaylist.vue';
import AppFilterSection from './AppFilterSection.vue';
import AppLatestNews from './AppLatestNews.vue'
import AppSubscribe from './AppSubscribe.vue'
import AppFixedJumbo from './AppFixedJumbo.vue'


export default {
    name: "AppMain",
    components: {
        AppJumbo,
        AppNewMovies,
        AppMoviePlaylist,
        AppFixedJumbo,
        AppFilterSection,
        AppLatestNews,
        AppSubscribe,
    }
}
</script>

<template>
    <main>
        <AppJumbo />
        <AppNewMovies />
        <AppMoviePlaylist />
        <AppFixedJumbo />
        <AppFilterSection />
        <AppLatestNews />
        <AppSubscribe />
    </main>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;


main {
    background-color: $tertiaryColor;
}
</style>