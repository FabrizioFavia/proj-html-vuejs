<script>


export default {
    name: "AppHeaderSearch",

}
</script>


<template>
    <div class="input-group mb-3">
        <input type="text" placeholder="Search" aria-describedby="basic-addon2">
        <span class="input-group-text text-white" id="basic-addon2">Search</span>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

input {
    border-radius: 0%;
    background-color: $primaryColor;
    border-top: 0.5px solid $borderColor;
    border-bottom: 0.5px solid $borderColor;
    border-left: 0;
    border-right: 0;
    font-size: 10px;
    padding: 1em;
    width: 200px !important;
    color: white;

    &:focus-within {
        outline: none;
    }
}

.input-group-text {
    background-color: $accentColor;
    border-radius: 0%;
    border: 0;
    font-size: 10px;
    padding: 1em 2.5em;

}
</style>