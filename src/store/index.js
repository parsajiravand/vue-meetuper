import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  //in state we are keeping data we are sharing with our components
  state: {
    meetups: [],
    categories: [],
    threads: [],
    meetup: {}
  },
  //Getters are like computed properties.Simple functions to get a state
  getters: {},
  //Actions Are like Methods in vue componenets.They should not mutate the state
  //Very good spot to fetch a date .Action call usually should resolve into data
  actions: {
    fetchMeetups({ state, commit }) {
      axios.get("/api/v1/meetups").then(res => {
        const meetups = res.data;
        commit("setMeetups", meetups);
        return state.meetups;
      });
    },
    fetchCategories({ state, commit }) {
      axios.get("/api/v1/categories").then(res => {
        const categories = res.data;
        commit("setCategories", categories);
        return state.categories;
      });
    },
    fetchMeetupById({ state, commit }, meetupId) {
      axios.get(`/api/v1/meetups/${meetupId}`).then(res => {
        const meetupIdData = res.data;
        commit("setMeetupbyId", meetupIdData);
        return state.meetup;
      });
    },
    fetchThreads({state,commit},meetupId){ 
    axios.get(`/api/v1/threads?meetupId=${meetupId}`).then(res => {
        const Threads = res.data;
        commit("setThreads",Threads);
        return state.threads
      });}
  },
  //Simple function to mutate a state
  mutations: {
    setMeetups(state, meetups) {
      state.meetups = meetups;
    },
    setMeetupbyId(state,meetup){
        state.meetup=meetup
    },
    setThreads(state,Threads){
        state.threads=Threads
    },
    setCategories(state, categories) {
      state.categories = categories;
    }
  }
});
