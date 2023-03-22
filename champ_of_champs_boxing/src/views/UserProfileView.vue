<template>
    <div v-if="loginUser" class="text-center text-light display-4 mt-5">
        <p>Please login to access your account</p>
    </div>
    <div class="text-center text-light mx-auto" v-else>
        <h1 class="display-1">Your Profile</h1>
        <img :src="$store.state.user.userProfile" alt="">
        <p>{{ $store.state.user.firstName }}</p>
        <p>{{ $store.state.user.lastName }}</p>
        <p><i class="bi bi-envelope"></i> {{ $store.state.user.emailAddress }}</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

    export default {
        name:'UserProfileView',
        setup() {
             const store = useStore()

            onMounted(async () => {
            await store.dispatch('fetchUser')
            })  
        },
        data(){
            return {
                loginUser: false
            }
        }
    }
</script>

<style scoped>
img {
    width: 20rem;
    border-radius: 20px;
}
</style>