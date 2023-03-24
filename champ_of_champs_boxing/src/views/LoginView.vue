<template>
    <div class="login-img" style="position: relative;"></div>
    <div class="container-fluid login">
            <h3 class="text-center display-3">LOGIN TO YOUR ACCOUNT</h3>
            <p class="text-center" style="font-size: 20px;">Login to access CHAMP OF CHAMPS</p>
            <form class="form container" @submit.prevent="login">
                <div class="mb-3">
                    <input type="email" class="form-control w-25 mx-auto" id="exampleFormControlInput1" placeholder="Email" v-model="payload.emailAddress">
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control w-25 mx-auto" id="exampleFormControlInput1" placeholder="Password" v-model="payload.userPassword">
                </div>
                <div class="text-center">
                    <button type="submit" class="btn w-10 btn-lg bg-light text-dark" style="color:#F1F2EE ;" @click.prevent="login">Login</button>
                </div>
            </form><br>
            <p class="text-center text-light" style="margin-top: 30px;font-size: 18px;">Don't have an account? <a href="/register" style="text-decoration: none;color: red;">Register here</a></p>
            <SpinnerC v-if="isLoading"/>
            <div class="text-light text-center " style="font-size: 20px;" v-else>
                <p>{{ message }} {{ user?.firstName }} {{ user?.lastName}}</p>
            </div>
    </div>
</template>

<script>
import SpinnerC from '@/components/SpinnerC.vue'
    export default {
        name: 'LoginView',
        components: {
            SpinnerC
        },
        data(){
            return{
                payload:{
                    emailAddress:'',
                    userPassword:''
                },
                isLoading: false
            }
        },
        computed:{
            message(){
                return this.$store.state.message
            },
            user(){
                return this.$store.state.user
            }
        },
        methods: {
            login(){
                console.log('Return:', this.payload);
                this.isLoading = true;
                this.$store.dispatch('login',this.payload)
            .then(() => {
                this.isLoading = false;
            })
            .catch(() => {
                this.isLoading = false;
            });
            }
        },
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

button {
  background-color: rgb(255, 255, 255);
  border: 3px solid black;
  padding: 12px 32px;
  border-radius: 22px;
  box-shadow: 2px 2px 1px black;
  transition: all .2s ease;
  font-size: 1em;
  font-weight: 800;
}

button:hover {
  transform: translate(-2px, -1px);
  box-shadow: 7px 7px 1px  rgb(0, 0, 0);
  transition: all .2s ease-in;
}
</style>