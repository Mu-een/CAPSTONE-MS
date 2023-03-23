<template>
    <div class="text-center text-light">
        <img :src="$store.state.user.userProfile" alt="" class="mt-5">
        <p class=" display-5 mt-5">{{ $store.state.user.firstName }} {{ $store.state.user.lastName }}</p><br>
    </div>
    <div class="text-center text-light">
        <p class="text-center text-light" style="font-size: 20px;"><i class="bi bi-envelope"></i> {{ $store.state.user.emailAddress }}</p>
        <p class="text-center text-light" style="font-size: 20px;"><i class="bi bi-person"></i> {{ $store.state.user.gender }}</p>
        <p class="text-center text-light" style="font-size: 20px;"><i class="bi bi-person-vcard"></i> {{ $store.state.user.userRole }}</p>
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
        // data(){
        //     return {
        //         loginUser: false
        //     }
        // }
    }
</script>

<style scoped>
img {
    width: 20rem;
    border-radius: 50%;
    box-shadow: -3px -3px 3px 2px red;
}
</style>