<template>
    <br>
   <SpinnerC v-if="isLoading"/>
    <div class="text-center mx-auto text-light" v-else>
        <img :src="event?.eventIMG" alt="eventIMG" style="width: auto;height: 500px;">
        <div style="font-size: 20px;">
            <p>EVENT NAME: {{ event?.eventName }}</p>
            <p>EVENT DESCRIPTION: {{ event?.eventDescription }}</p>
            <p>WEIGHT DIVISION: {{ event?.weightDivision }}</p>
            <p>PRICE: R{{ event?.price }}</p>
            <button class="btn text-light">Add to Cart</button>
        </div>
    </div><br>
</template>

<script>
import SpinnerC from '@/components/SpinnerC.vue';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

    export default {
        component: {
          SpinnerC
        },
        setup() {
            const store = useStore()
            const event = computed(() => store.state.event)
            return { event }
        },
        mounted() {
            this.$store.dispatch('getEvent', this.$route.params.id)
        },
        data(){
            return {
                isLoading : true
            }
        },
        created(){
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        }
    }
</script>

<style scoped>
img {
    border-radius: 20px;
}

button {
    background-color:#07ff07;
}
</style>