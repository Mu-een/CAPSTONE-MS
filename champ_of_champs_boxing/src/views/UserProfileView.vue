<template>
    <div class="container">
        <div class="user-info">
            <img :src="$store.state.user.userProfile" alt="User profile picture" class="user-info__picture">
            <h2 class="user-info__name text-light">{{ $store.state.user.firstName }} {{ $store.state.user.lastName }}</h2>
        </div>
        <div class="user-details text-light">
            <p class="user-details__item"><i class="bi bi-person-vcard"></i> {{ $store.state.user.userRole }}</p>
            <p class="user-details__item"><i class="bi bi-person"></i> {{ $store.state.user.gender }}</p>
            <p class="user-details__item"><i class="bi bi-envelope"></i> {{ $store.state.user.emailAddress }}</p>
            <router-link :to="{ name: 'logout' }" class="btn btn-outline-light logout-btn">Logout</router-link>
      </div>
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
        }
    }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.logout-btn {
  margin: 1rem auto;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.user-info__picture {
  border-radius: 50%;
  box-shadow: -3px -3px 3px 2px red;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.user-info__name {
  font-size: 2rem;
  margin: 0;
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.user-details__item {
  margin: 0.5rem 0;
}

.bi {
  margin-right: 0.5rem;
}
</style>