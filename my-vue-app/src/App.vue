<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import AppTopArrow from './components/AppTopArrow.vue'
import AppOffCanva from './components/AppOffcanva.vue'


export default {
  components: {
    AppOffCanva,
    AppTopArrow,
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
  <AppOffCanva />
  <AppTopArrow />
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>



<style lang="scss" scoped>
@use "./main.scss" as *;
</style>
