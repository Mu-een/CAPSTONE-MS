import { createStore } from 'vuex'
import axios from 'axios';
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
    loggedIn: false
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
    login(state, user) {
      state.loggedIn = true
      state.user = user
    },
    logout(state){
      state.loggedIn = false
      state.user = null
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
    async addEvent (context){
      const res = await axios.post(`${champOfChamps}event`);
      let {results, err} = await res.data;
      if(results){
        context.commit('setEvent', results)
      } else {
        context.commit('setMessage', err)
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
      const res = await axios.post(`${champOfChamps}register`);
      let{results, err} = await res.data;
      if(results) {
        context.commit('setUser', payload)
      } else {
        context.commit('setMessage', err)
      }
    },
    async loginUser({commit}, user) {
      const res = await axios.get(`${champOfChamps}login`);
      let {results, err} = await res.data;
      if(results){
        commit('login', user)
      } else {
        commit('setMessage', err)
      }
    },
    logout(context) {
      context.commit('login', false)
      context.commit('user', null)
    }
  },
  modules: {
  }
})
