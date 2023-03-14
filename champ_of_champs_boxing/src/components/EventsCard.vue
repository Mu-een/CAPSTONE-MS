<template>
    <div class="container">
        <div class="row" style="gap: 10rem; justify-content: center;">
            <div class="card" v-for="event in boxingEvents" :key="event" style="width: 18rem;">
                <img :src="event.eventIMG" class="card-img-top mt-2" alt="">
                <div class="card-body text-center">
                    <h5 class="card-title">{{ event.eventName }}</h5>
                    <p class="card-text">{{ event.eventDescription }}</p>
                    <p class="card-text">R{{ event.price }}</p>
                    <router-link><a href="" class="btn"></a>Event Details</router-link>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'
    export default {
        name: 'EventsCard',
        setup() {
            const store = useStore()
            store.dispatch("getEvents")
            const events = computed(()=> store.state.events)
            return {
                events
            }
        }
    }
</script>

<style scoped>
img {
    border-radius: 8px;
}
.card{ 
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px #fcd900;
}
.card:hover {
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px black;
}
</style>