<template>
    <!-- users -->
    <h3 class="text-center display-3 text-danger">USERS</h3>
    <AddUser/>
    <SpinnerC v-if="isLoading"/>
    <div class="container-fluid" v-else>
        <div class="table-responsive">
            <table class="table table-transparent table-border">
                <thead>
                    <tr class="text-center text-light">
                        <th scope="col">ID</th>
                        <th scope="col">FIRST NAME</th>
                        <th scope="col">LAST NAME</th>
                        <th scope="col">ROLE</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">EMAIL</th>
                        <!-- <th scope="col">PASSWORD</th> -->
                        <th scope="col">PROFILE</th>
                        <th scope="col">EDIT</th>
                        <th scope="col">DELETE</th>
                    </tr>
                </thead>
                <tbody class="text-center text-light">
                    <tr v-for="user in users" :key="user">
                        <td data-label="ID">{{ user.userId }}</td>
                        <td data-label="FirstName">{{ user.firstName }}</td>
                        <td data-label="LastName">{{ user.lastName }}</td>
                        <td data-label="Role">{{ user.userRole }}</td>
                        <td data-label="Gender">{{ user.gender }}</td>
                        <td data-label="Email">{{ user.emailAddress }}</td>
                        <!-- <td data-label="Password">{{ user.userPassword }}</td> -->
                        <td data-label="Profile"><img :src="user.userProfile" alt="" class="img-fluid"></td>
                        <td data-label="Edit"><EditUser/></td>
                        <td data-label="Delete"><button type="submit" class=" btn deleteButton" @click="$event => deleteUser(user.userId)"><i class="bi bi-trash3"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    
        <!-- events -->
        <h3 class="text-center display-3 text-danger">EVENTS</h3>
        <AddEvent/>
        <SpinnerC v-if="isLoading"/>
        <div class="container-fluid" v-else>
            <table class="table table-transparent table-border">
                <thead>
                    <tr class="text-center text-light">
                        <th>ID</th>
                        <th>EVENT NAME</th>
                        <th>EVENT DESCRIPTION</th>
                        <th>WEIGHT DIVISION</th>
                        <th>PRICE</th>
                        <th>CARD</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody class="text-center text-light">
                    <tr v-for="event in events" :key="event">
                        <th scope="row">{{ event.id }}</th>
                        <td>{{ event.eventName }}</td>
                        <td>{{ event.eventDescription }}</td>
                        <td>{{ event.weightDivision }}</td>
                        <td>R{{ event.price }}</td>
                        <td><img :src="event.eventIMG" alt="" class="img-fluid"></td>
                        <td><EditEvent/></td>
                        <td><button type="submit" class=" btn deleteButton" @click="$event => deleteEvent(event.id)"><i class="bi bi-trash3"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<script>
import AddUser from '@/components/AddUser.vue';
import EditUser from '@/components/EditUser.vue'
import AddEvent from '@/components/AddEvent.vue';
import EditEvent from '@/components/EditEvent.vue'
import SpinnerC from '@/components/SpinnerC.vue';

import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'
    export default {
        name: 'AdminView',
        components : {
            AddUser,
            EditUser,
            AddEvent,
            EditEvent,
            SpinnerC
        },
        methods:{
            deleteEvent(id){
                this.$store.dispatch('deleteEvent',id)
            },
            deleteUser(id){
                this.$store.dispatch('deleteUser',id)
            }
        },
        setup(){
            const store = useStore()
            store.dispatch("getUsers")
            const users = computed(()=> store.state.users)
            store.dispatch("getEvents")
            const events = computed(()=> store.state.events)
            return {
                users,
                events,
            }
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
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

img {
    width: 20vh;
    height: auto;
    border-radius: 30px;
}

h3, thead {
  font-family: 'DM Serif Display', serif;
}
.table-responsive {
    overflow-x: auto;
}
/* @media screen and(max-width: 720px) and (min-width: 300px) {
  .table {
    display: block;
    width: 100%;
    overflow-x: hidden;
  }
}
@media only screen and (max-width: 700px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  th {
    text-align: left;
  }
  tbody td:before {
    float: left;
    font-weight: bold;
  }
} */
.deleteButton {
  background-color:#07ff07 ;
  color: black;
}

@media screen and (max-width: 760px) {
    .table-responsive {
        margin-bottom: 15px;
        overflow-y: hidden;
        width: 100%;
    }

    table {
        margin: 0;
    }

    table thead {
        display: none;
    }

    table tr {
        display: block;
        margin-bottom: 15px;
    }

    table td {
        display: block;
        font-size: 15px;
        text-align: right;
        position: relative;
        padding-left: 50%;
        width: 100%;
    }

    table td:before {
        display: inline-block;
        content: attr(data-label);
        font-weight: 500;
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        padding-left: 15px;
        text-align: left;
    }
}

</style>