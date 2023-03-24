<template>
    <!-- Button trigger modal -->
<button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#addEventModal">
  Create Event
</button>

<!-- Modal -->
<div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="addEventModelLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addEventModalLabel">Event Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addEvent">
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Event Name" v-model="payload.eventName">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Event Description" v-model="payload.eventDescription">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Weight Division" v-model="payload.weightDivision">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Price" v-model="payload.price">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Card IMG" v-model="payload.eventIMG">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        name: 'AddEvent',
        data(){
          return {
            payload: {
              eventName:'',
              eventDescription:'',
              weightDivision:'',
              price:'',
              eventIMG:''
            }
          }
        },
        computed: {
          message(){
            return this.store.state.message
          }
        },
        methods:{
          addEvent(){
            console.log('Debug', this.payload);
            this.$store.dispatch('addEvent', this.payload)
          }
        }
    }
</script>

<style scoped>
.modalButton {
    display: flex;
    margin: auto; 
    margin-bottom: 10px;
    background-color:#07ff07 ;
    color: black;
}
</style>