<script>
import { store } from '../store'

export default {
    name: "AppOffCanva",
    data() {
        return {
            store
        }
    },

    methods: {
        logIn() {


            if (store.user.username.length !== null && store.user.username == store.users[0].username && store.user.password !== null && store.user.password == store.users[0].password) {
                console.log("l'utente è registrato");
                store.logged = true;

                store.navItems.forEach(item => {
                    item.subMenu.forEach(item => {
                        item.disable = false;
                    });
                });

            } else {
                console.log("utente non trovato")
            }

        }
    }
}

</script>

<template>
    <div class="offcanvas offcanvas-end ps-4 pe-4" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h2 class="text-white mb-3">Login</h2>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="input-group mb-3 d-flex flex-column pt-1">
                <input v-model="store.user.username" type="text" class="form-control mb-3 w-100 text-white bg-dark"
                    placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                <input v-model="store.user.password" type="password" class="form-control mb-3 w-100 text-white bg-dark"
                    placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
            </div>

            <button @click="logIn()" data-bs-dismiss="offcanvas" class="button p-2 px-3 fs-6">Submit</button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../main.scss' as *;

.offcanvas {
    background-color: $primaryColor;
}

button {
    background-color: $accentColor;
    color: white;

    &:hover {
        background-color: white;
        color: black;
    }
}
</style>