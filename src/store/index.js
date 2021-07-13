import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

const { token } = localStorage;
store.commit("LOGIN", token);

export default store;
