<script>
import AppBottomHeader from '../components/AppBottomHeader.vue';
import AppNavbar from '../components/AppNavbar.vue';
import { store } from '../store';

export default {
  name: "AppHeader",
  data() {
    return {
      store
    }
  },
  components: {
    AppBottomHeader,
    AppNavbar
  }
}
</script>


<template>
  <!-- TOP HEADER -->
  <div class="headerTop">
    <div class="container-lg d-flex justify-content-between align-items-center h-100">
      <div class="d-flex align-items-center">
        <i class="fa-regular fa-envelope text-white me-1 fs-5"></i>
        <a href="#"><span class="me-2 text-white">Superhit Top Movie</span></a>
        <span class="navText">** King Star **</span>
        <i class="fa-brands facebook fa-facebook-f ms-4"></i>
        <i class="fa-brands twitter fa-twitter ms-3"></i>
        <i class="fa-brands linkedin fa-linkedin-in ms-3"></i>
        <i class="fa-brands insta fa-instagram ms-3"></i>
        <i class="fa-brands fa-google-plus-g ms-3"></i>
      </div>
      <div class="d-flex align-items-center">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i
            v-show="store.logged == false" class="fa-solid fa-lock text-white me-2"></i>
          <i v-show="store.logged" class="fa-solid fa-lock-open text-white me-2"></i>
          <span v-show="store.logged == false" class="text-white">Login</span>
        </a>
        <span class="text-white" v-show="store.logged">Welcome, {{ store.user.username }}</span>
      </div>
    </div>
  </div>
  <!-- TOP HEADER END -->

  <AppBottomHeader />
  <AppNavbar />
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.headerTop {
  height: 55px;
  border-bottom: 2px solid $borderColor;
  background-color: $tertiaryColor;

  a {
    text-decoration: none;
  }


  .navText {
    color: $accentColor;
  }

  .facebook {
    color: $bgFacebook;
  }

  .twitter {
    color: $bgTwitter;
  }

  .linkedin {
    color: $bgLinkedin;
  }

  .insta {
    color: $bgInsta;
  }

  .fa-google-plus-g {
    color: #c64436;
  }
}
</style>
