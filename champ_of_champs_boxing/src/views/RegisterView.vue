<template>
   
    <div class="register-img" style="position: relative;"></div>
    <div class="container-fluid register">
        <!-- <img src="https://i.postimg.cc/yYTbsQkD/CHAMP-OF-CHAMPS.png" alt="" style="width: auto;height: 220px;position: absolute;"> -->
        <h3 class="text-center display-3">BECOME A CHAMP OF CHAMPS MEMBER</h3>
        <p class="text-center" style="font-size: 20px;">Create your CHAMP OF CHAMPS profile and get access to the best of celebrity boxing</p>
        <form class="form container" @submit.prevent="addUser">
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="First Name" v-model="payload.firstName">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Last Name" v-model="payload.lastName">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Role" v-model="payload.userRole">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Gender" v-model="payload.gender">
            </div>
            <div class="mb-3">
                <input type="email" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Email" v-model="payload.emailAddress">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Password" v-model="payload.userPassword">
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Profile URL" v-model="payload.userProfile">
            </div>
            <div class="text-center">
                <button type="submit" class="btn w-10 btn-lg bg-dark" style="color:#F1F2EE ;">Register</button>
            </div>
            <div>
                <label class="form-control" v-show="userMessage"></label>
            </div>
        </form>
    </div>
   
</template>

<script>

    export default {
        name: 'RegisterView',
        data(){
            return{
                payload: {
                    firstName:'',
                    lastName:'',
                    userRole:'',
                    gender:'',
                    emailAddress:'',
                    userPassword:'',
                    userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'  
                }
            }
        },
        computed: {
            message(){
                return this.store.state.message
            }
        },
        methods: {
            addUser(){
                console.log('Debug', this.payload);
                this.$store.dispatch('addUser',this.payload)
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.register-img {
    background-image: url(https://i.postimg.cc/Cx50ydbt/pexels-koolshooters-9945075.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    min-height: 100vh;
    position: relative;
}

.register {
    position: absolute;
    top: 200px;
    color: #F1F2EE; 
    text-shadow: 5px 5px 6px black;
}
.form {
    margin-top: 50px;
}

h3 {
  font-family: 'DM Serif Display', serif;
}
</style>