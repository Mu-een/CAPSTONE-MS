<template>
    <NavBarC/>
    <div class="login-img" style="position: relative;"></div>
    <div class="container-fluid login">
            <h3 class="text-center display-3">LOGIN TO YOUR ACCOUNT</h3>
            <p class="text-center" style="font-size: 20px;">Login to access CHAMP OF CHAMPS</p>
            <form class="form container">
                <div class="mb-3">
                    <input type="email" class="form-control w-25 mx-auto" id="exampleFormControlInput1" placeholder="Email" >
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control w-25 mx-auto" id="exampleFormControlInput1" placeholder="Password" >
                </div>
                <div class="text-center">
                    <button type="submit" class="btn w-10 btn-lg" style="color:#F1F2EE ;">Login</button>
                </div>
                <div>
                    <label class="form-control" v-show="userMessage"></label>
                </div>
            </form>
    </div>
<FooterC/>
</template>

<script>
import NavBarC from '@/components/NavBarC.vue';
import FooterC from '@/components/FooterC.vue';
    export default {
        name: 'LoginView',
        components: {
            NavBarC,
            FooterC
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.login-img {
    background-image: url(https://i.postimg.cc/59BtjDH3/pexels-thisisengineering-3912366.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    min-height: 100vh;
    position: relative;
}

.login {
    position: absolute;
    top: 300px;
    color: #F1F2EE; 
    text-shadow: 5px 5px 6px black;
}

h3 {
  font-family: 'DM Serif Display', serif;
}
</style>