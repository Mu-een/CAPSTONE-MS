<template>
    <NavBarC/>
    <EventsCard/>
    <FooterC/>
</template>

<script>
import NavBarC from '@/components/NavBarC.vue';
import EventsCard from '@/components/EventsCard.vue';
import FooterC from '@/components/FooterC.vue';
    export default {
        name:'EventsView',
        components: {
            NavBarC,
            EventsCard,
            FooterC
        }
    }
</script>

<style scoped>

</style>