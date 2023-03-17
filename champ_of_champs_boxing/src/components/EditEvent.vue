<template>
         <!-- Button trigger modal -->
<button type="button" class="btn btn-warning modalButton" data-bs-toggle="modal" data-bs-target="#editEventModal">
    <i class="bi bi-pencil-square"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="editEventModal" tabindex="-1" aria-labelledby="editEventModelLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="editEventModalLabel">Event Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Event Name" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Event Description" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Weight Division" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Price" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Card IMG" >
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Edit Event</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'EditEvent'
    }
</script>

<style scoped>

</style>