<script>

export default {
    name: "AppTopArrow",

}

</script>

<template>
    <a href="#"><button><i class="fa-solid fa-chevron-up"></i></button></a>
</template>


<style scoped>
button {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 150px;
    right: 40px;
    z-index: 10;
    font-size: 11px;
}
</style>