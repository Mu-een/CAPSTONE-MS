<template>
    <div v-for="event in getCart" :key="event.id">
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
                return this.$store.state.cart
            }
        },
        mounted(){
            this.$store.dispatch('fetchCart', this.id)
        }
    }
</script>

<style scoped>

</style>