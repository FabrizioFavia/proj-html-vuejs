<script>

export default {
    name: "AppSubscribe",

}
</script>


<template>
    <div class="container-lg p-0">
        <div class="subscribe text-white">
            <img class="w-100" src="src/assets/form-bg-1.png" alt="">
            <div class="inputContainer h-100 w-100 d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-4 px-3">
                        <input type="text" placeholder="First name">
                    </div>
                    <div class="col-4 d-flex flex-column centralCol px-3 align-items-center">
                        <input class="" type="text" placeholder="Last name">
                        <button class="button mt-5">Subscribe</button>
                    </div>
                    <div class="col-4 px-3">
                        <input type="text" placeholder="Email Address">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.subscribe {
    margin-top: 100px;
    width: 98%;
    height: 475px;
    position: relative;
    color: white;

    .inputContainer {
        position: absolute;
        top: 0;


        input {
            background-color: #13be13;
            border: 1px solid white;
            padding: 12px 20px;
            border-radius: 25px;
            color: white !important;
            width: 300px;

            &::placeholder {
                color: rgb(207, 207, 207);
            }

            &:focus-within {
                outline: none;
            }

        }

        .button {
            width: 150px;
            height: 50px;
            border-radius: 30px;
            text-align: center;
            background-color: $primaryColor;
            border: 0;
            color: white;
            font-size: 12px;

            &:hover {
                background-color: white;
                color: black;
            }
        }
    }
}
</style>