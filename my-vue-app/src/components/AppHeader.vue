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
  <!-- TOP HEADER -->
  <div class="headerTop">
    <div class="container-lg d-flex justify-content-between align-items-center h-100">
      <div class="d-flex align-items-center">
        <i class="fa-regular fa-envelope text-white me-1 fs-5"></i>
        <span class="me-2 text-white">Superhit Top Movie</span>
        <span class="navText">** King Star **</span>
        <i class="fa-brands fa-facebook-f ms-4"></i>
        <i class="fa-brands fa-twitter ms-3"></i>
        <i class="fa-brands fa-linkedin-in ms-3"></i>
        <i class="fa-brands fa-instagram ms-3"></i>
        <i class="fa-brands fa-google-plus-g ms-3"></i>
      </div>
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-lock text-white me-2"></i>
        <span class="text-white">Login</span>
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


  .navText {
    color: $accentColor;
  }

  .fa-facebook-f {
    color: #3b5998;
  }

  .fa-twitter {
    color: #00acee;
  }

  .fa-linkedin-in {
    color: #0c658f;
  }

  .fa-instagram {
    color: #6d1922;
  }

  .fa-google-plus-g {
    color: #c64436;
  }
}
</style>
