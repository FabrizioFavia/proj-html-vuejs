<script>
import AppJumbo from './AppJumbo.vue';
import AppNewMovies from './AppNewMovies.vue';
import AppMoviePlaylist from './AppMoviePlaylist.vue';
import AppFilterSection from './AppFilterSection.vue';
import AppLatestNews from './AppLatestNews.vue'
import AppSubscribe from './AppSubscribe.vue'

export default {
    name: "AppMain",
    components: {
        AppJumbo,
        AppNewMovies,
        AppMoviePlaylist,
        AppFilterSection,
        AppLatestNews,
        AppSubscribe
    }
}
</script>

<template>
    <main>
        <h2>main section</h2>

        <AppJumbo />
        <AppNewMovies />
        <AppMoviePlaylist />
        <AppFilterSection />
        <AppLatestNews />
        <AppSubscribe />

        <h2>fine main</h2>
    </main>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

h2 {
    color: $secondaryColor;
}
</style>