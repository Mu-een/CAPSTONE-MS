import { createStore } from 'vuex'
import axios from 'axios';
// import {useCookies} from 'vue3-cookies';
// const {cookies} = useCookies();
const champOfChamps = "https://api-capstone.onrender.com/";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    users: null,
    event: null,
    events: null,
    message: null,
    Spinner: null,
    asc: true,
    loggedIn: false,
    token: null,
    cart: null
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
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
    },
    login(state) {
      state.loggedIn = true
    },
    logout(state){
      state.loggedIn = false
    },
    setCart(state, value){
      state.cart = value.cart
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
    async updateEvent(context, payload) {
      try {
        const response = await axios.put(`${champOfChamps}event/${payload.id}`, payload);
        console.log("Response:", Response);
        alert ('Event updated')
        let {results, err} = await response.data;
        if(results) {
          context.commit('setEvent', response.data);
        } else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.log(error)
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
    async updateUser (context, payload) {
      try {
        const res = await axios.put(`${champOfChamps}user/${payload.userId}`, payload);
        console.log("Response:", res);
        alert('User updated')
        let {results, err} = await res.data;
        if (results) {
          context.commit('setUser', results[0]);
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.log(error)
      }
    },
    async login(context, payload) {
      try {
        const res = await axios.post(`${champOfChamps}login`, payload);
        console.log('Results:', res);
        const { result, jwToken, msg, err } = await res.data;
        if (result) {
          context.commit('setUser', result);
          context.commit('setToken', jwToken);
          localStorage.setItem('login_token', jwToken);
          localStorage.setItem('user', JSON.stringify(result));
          context.commit('setMessage', msg);
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error(error);
      }
    },    
    async fetchUser ({commit}) {
      const res = await axios.get(`${champOfChamps}user`)
      commit('setUser', res.data)
    },

    // CART
    async fetchCart(context, userId) {
      try {
        const res = await axios.get(`${champOfChamps}cart/${userId}`);
        const { results, err } = await res.data;
        if (results) {
          context.commit('setCart', results);
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addToCart(context, {payload}) {
      try {
        let userId = localStorage.getItem('user');
        if (!userId) {
          throw new Error('User not logged in');
        }
        console.log('userId:', userId);
        if (!payload || !payload.id) {
          throw new Error('Invalid payload');
        }
        const {data} = await axios.post(`${champOfChamps}user/${userId}/cart`, payload);
        context.commit('setCart', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
