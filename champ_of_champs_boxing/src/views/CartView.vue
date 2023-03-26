<template>
   <div v-if="getCart && getCart.length === 0">
        <p>Your cart is empty!</p>
    </div>
    <div v-else-if="getCart" v-for="event in getCart" :key="event.id">
        <img :src="event.eventIMG" alt="">
        <p>{{ event.eventName }}</p>
        <p>{{ event.eventDescription }}</p>
        <p>{{ event.weightDivision }}</p>
        <p>{{ event.price }}</p>
    </div>
</template>

<script>

    export default {
        name: 'CartView',
        components: {
            
        },
        computed:{
            getCart(){
                console.log(this.$store.state.cart)
                return this.$store.state.cart;
            }
        },
        mounted(){
            const userId = localStorage.getItem('user');
            this.$store.dispatch('fetchCart', userId);
        }
    }
</script>

<style scoped>

</style>