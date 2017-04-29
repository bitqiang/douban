import axios from 'axios';
import { HOME_DATA } from '../mutation-types.js';

function getCurrentUser() {
  return axios.get('/api/book/26939973');
}

const state = {
  homeData: {}
};

const getters = {};

const actions = {
   [HOME_DATA]({ commit }) {
    commit(HOME_DATA,getCurrentUser())
  }
};

const mutations  = {
  [HOME_DATA](state, homeData) {
    state.homeData = homeData;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
