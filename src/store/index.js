import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        films: []
    },
    actions: {
        async LOAD_FILMS ({ commit }) {
            const response = await fetch('/database/database.json');
            const films = await response.json();
            commit('SET_FILMS', films.sort((a, b) => a.sort > b.sort ? 1 : -1).reverse())
        }
    },
    mutations: {
        SET_FILMS(state, films) {
            state.films = films;
        }
    }
})
