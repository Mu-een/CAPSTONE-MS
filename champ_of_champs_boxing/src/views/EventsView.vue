<template>
    <br>
    <!-- search input-->
    <input class="form-control w-25 mx-auto" type="text" placeholder="Search Weight Division .." v-model="searching" ><br>
    <!-- sort by price button -->
    <button class=" form-control text-center mx-auto w-25" @click="sortByPrice">Price</button><br>
    <!-- spinner -->
    <SpinnerC v-if="isLoading"/> 
    <!-- card -->
    <div class="row" style="gap: 10rem;justify-content: center;" v-else >
        <div class="card" style="width: 18rem;border-radius: 23px;" v-for="event in search" :key="event.id" >
      <img :src="event.eventIMG" class="card-img-top mt-3" alt="eventIMG" style="border-radius: 10px;">
      <div class="card-body">
        <h5 class="card-title text-center ">{{ event.eventName }}</h5>
        <p class="card-text text-center ">{{ event.weightDivision }}</p>
        <p class="card-text text-center ">R{{ event.price }}</p>
        <router-link :to="{name: 'event', params : {id: event.id}}" class="btn btn-dark w-50">Details</router-link>
        <button class="btn w-50 bg-success text-light">Add to Cart</button>
      </div>
    </div>
</div><br>
    
</template>

<script>

import SpinnerC from '@/components/SpinnerC.vue';

    export default {
        name:'EventsView',
        components: {
            
            SpinnerC
            
        },
        mounted() {
            this.$store.dispatch('getEvents')
        },
        created(){
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        },
        methods: {
          sortByPrice(){
            this.$store.commit("sortEventsByPrice");
          }
        },
        data(){
            return {
                isLoading: true,
                searching: ""
            }
        },
        computed:{
            events(){
                return this.$store.state.events
            },
            search(){
                if(this.searching.trim().length > 0){
                    return this.events.filter((input) => input.weightDivision.toLowerCase().includes(this.searching.trim().toLowerCase()))
                }
                return this.events
            }
        }
    }
</script>

<style scoped>

</style>