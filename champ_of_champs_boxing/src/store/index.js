import { createStore } from 'vuex'
import axios from 'axios';
import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies();
const champOfChamps = "https://api-capstone.onrender.com/";

export default createStore({
  state: {
    user: null,
    users: null,
    event: null,
    events: null,
    message: null,
    Spinner: null,
    asc: true,
    loggedIn: false,
    token: null
  },
  getters: {
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    },
    setUsers(state, values) {
      state.users = values
    },
    setEvent(state, value) {
      state.event = value
    },
    setEvents(state, values) {
      state.events = values
    },
    setMessage(state, value) {
      state.message = value
    },
    sortEventsByPrice: (state) => {
      state.events.sort((a,b)=>{
        return a.price - b.price;
      });
      if (!state.asc) {
        state.events.reverse();
      }
      state.asc = !state.asc;
    },
    setToken(state, value){
      state.token = value
    }
  },
  actions: {
    // Events
    async getEvents(context) {
      const res = await axios.get(`${champOfChamps}events`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setEvents', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async getEvent(context, id) {
      const res = await axios.get(`${champOfChamps}event/${id}`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setEvent', results[0])
      } else {
        context.commit('setMessage', err)
      }
    },
    async addEvent (context, payload){
      try {
        const res = await axios.post(`${champOfChamps}event`, payload);
        console.log('Result:', res);
        const {result, msg, err} = await res.data;
        if(result){
          context.commit('setEvent', result)
          context.commit('setMessage', msg)
        } else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async deleteEvent({commit, dispatch}, id) {
      try {
        await axios.delete(`${champOfChamps}event/${id}`)
        commit('setMessage', 'Event Deleted');
        dispatch('getEvents');
      } catch (error){
        commit('setMessage', 'Cannot delete event')
      }
    },

    // Users
    async getUsers(context){
      const res = await axios.get(`${champOfChamps}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async addUser(context, payload) {
      try {
        const res = await axios.post(`${champOfChamps}register`, payload);
        console.log('Result:', res);
        const{result, msg, err} = await res.data;
        if(result) {
          context.commit('setUser', result)
          context.commit('setMessage', msg)
        } else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async deleteUser({commit, dispatch}, id){
      try {
        await axios.delete(`${champOfChamps}user/${id}`)
        commit('setMessage', 'User deleted');
        dispatch('getUsers');
      } catch(error){
        commit('setMessage','Cannot delete user')
      }
    },
    async login(context, payload) {
      try{
        const res = await axios.post(`${champOfChamps}login`, payload);
        console.log('Results:', res);
        const {result, jwToken, msg, err} = await res.data;
        if(result) {
          context.commit('setUser',result);
          context.commit('setToken', jwToken);
          cookies.set('login_cookie', jwToken)
          context.commit('setMessage', msg)
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
