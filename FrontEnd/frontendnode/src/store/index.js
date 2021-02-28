import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    colors: ['Orange', 'Red']
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    }
  },
  mutations: {
    arttir: state => {
      state.counter++;
    },
    azalt: state => {
      state.counter--;
    },
    colorAdd(state, text) {
      state.colors.push(text);
    }
  },
  actions: {},
  modules: {}
});
