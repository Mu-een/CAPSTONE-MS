<template>
    <div class="filter">
        <!-- sort by price button -->
        <button class=" form-control text-center mx-auto" @click="sortByPrice" style="width: 60px;">Price</button>
        <!-- search input-->
        <input class="form-control w-25 mx-auto" type="text" placeholder="Search Weight Division .." v-model="searching" >
        <!-- filter dropdown -->
        <div class="mx-auto dropDown">
            <select required v-model="category">
                <option value="" selected>All Events</option>
                <option value="Bantamweight">Bantamweight</option>
                <option value="Lightweight">Lightweight</option>
                <option value="Featherweight">Featherweight</option>
                <option value="Light Heavyweight">Light Heavyweight</option>
                <option value="Heavyweight">Heavyweight</option>
            </select>
        </div>
    </div>
    <!-- spinner -->
    <SpinnerC v-if="isLoading"/> 
    <!-- card -->
    <div class="row" v-else>
        <div class="card" style="width: 18rem;border-radius: 23px;" v-for="event in search" :key="event.id" >
      <img :src="event.eventIMG" class="card-img-top mt-3" alt="eventIMG" style="border-radius: 10px;">
      <div class="card-body">
        <h5 class="card-title text-center ">{{ event.eventName }}</h5>
        <p class="card-text text-center ">{{ event.weightDivision }}</p>
        <p class="card-text text-center ">R{{ event.price }}</p>
        <router-link :to="{name: 'event', params : {id: event.id}}"><button class="btn btn-dark w-50">Details</button></router-link>
        <button class="btn w-50 addToCartBtn text-light" @click="addToCart(event)">Add to Cart</button>
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
          },
          async addToCart(event) {
            let userId = localStorage.getItem('user');
            console.log(userId, event.id);
            this.$store.dispatch('addToCart', {
                // userId: userId,
                // id:event.id
                payload: {
                    id: event.id,
                    eventName: event.eventName,
                    eventIMG: event.eventIMG,
                    eventDescription: event.eventDescription,
                    weightDivision: event.weightDivision,
                    price: event.price,
                }
            })
          } 
        },
        data(){
            return {
                isLoading: true,
                searching: "",
                category: ""
            }
        },
        computed:{
            events(){
                return this.$store.state.events
            },
            search(){
                let filteredByDivision = this.events.filter(item => item.weightDivision == this.category || this.category == '')
                if (this.searching.trim().length > 0) {
                    return filteredByDivision.filter((input) => input.weightDivision.toLowerCase().includes(this.searching.trim().toLowerCase()))
                }
                return filteredByDivision
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.row {
    gap: 10rem;
    margin-top: 21px;
    margin-bottom: 21px;
    justify-content: center;
}
.card {
    width: 190px;
    height: auto;
    color: white;
    background: rgb(46, 44, 44);
    transition: all 300ms;
}

.card:hover {
    transform: scale(1.10);
}
.addToCartBtn{
    background-color:#07ff07;
}

.filter {
    display: flex;
    padding: 20px;
    gap: 20px;
    margin-top: 5px;
}

.dropDown {
    width: 80%;
    margin: 0 auto;
}

select {
    width: 20%;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #f2f2f2;
}

option:checked {
    background-color: #007bff; 
    color: #fff; 
}

option:not(:checked) {
    background-color: #f2f2f2;
    color: #333;
}

</style>