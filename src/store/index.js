import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titles:[
      {
        title:"DAILY GOAL",
        content:"87",
        dec:true,
        sub:null,
      },
      {
        title:"JOURNAL",
        content:"13",
        dec:false,
        sub:"July 2020",
      },
      {
        title:"PROFILE",
        content:"Ron",
        dec:false,
        sub:"29 years old",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
