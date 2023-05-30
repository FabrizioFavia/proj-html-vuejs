<script>
import AppBottomHeader from './AppBottomHeader.vue';
import AppNavbar from './AppNavbar.vue';

export default {
  name: "AppHeader",
  components: {
    AppBottomHeader,
    AppNavbar
  }
}
</script>


<template>
  <h1>AppHeader</h1>
  <AppBottomHeader />
  <AppNavbar />
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

h1 {
  color: $secondaryColor;
}
</style>
