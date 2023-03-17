<template>
  <div class="app">
    <NavBarC/>
    <router-view/>
  </div>
  <FooterC/>
</template>

<script>
import NavBarC from './components/NavBarC.vue';
import FooterC from './components/FooterC.vue';
  export default {
    components: {
      NavBarC,
      FooterC
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
.app {
  min-height: 100vh;
  min-width: 300px;
  background-color: #0A0F0D;
  font-family: 'Alata', sans-serif;
}

nav a.router-link-exact-active {
  color: red;
  background-color: #0A0F0D;
  border-radius: 20px;
}
</style>