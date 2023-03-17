<template>
    <!-- Button trigger modal -->
<button type="button " class="btn btn-warning modalButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create User
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">User Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="First Name" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Last Name" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Role" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Gender" >
            </div>
            <div class="mb-3">
                <input type="email" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Email" >
            </div>
            <div class="mb-3">
                <input type="password" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Password" >
            </div>
            <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="Profile URL" >
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Add User</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        name: 'AddUser'
    }
</script>

<style scoped>
.modalButton {
    display: flex;
    margin: auto; 
    margin-bottom: 10px;
}
</style>