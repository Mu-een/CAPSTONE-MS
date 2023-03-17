<template>
    <div v-if="store.state.loggedIn">
        <p>Welcome, {{ store.state.user.name }}</p>
        <button @click="logout">Logout</button>
    </div>
    <div v-else>
        <p class="text-light text-center display-5 mt-5">Please login to access your account</p>
    </div>
</template>

<script>
import { useStore } from 'vuex'
    export default {
        name:'UserProfileView',
        setup(){
            const store = useStore()
            const logout = () => {
                store.dispatch('logout')
            }

            return {
                store,
                logout
            }
        }
    }
</script>

<style scoped>

</style>