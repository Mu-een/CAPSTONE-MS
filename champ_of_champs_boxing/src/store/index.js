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
    Spinner: null
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
    }
  },
  actions: {
    async getEvents(context) {
      const res = await axios.get(`${champOfChamps}events`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setEvents', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async getUsers(context){
      const res = await axios.get(`${champOfChamps}users`);
      let {results, err} = await res.data;
      if(results) {
        context.commit('setUsers', results)
      } else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
