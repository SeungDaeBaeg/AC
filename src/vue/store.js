import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: localStorage.getItem("token")
    },
    mutations: {
        ["LOGIN"](state) {
            state.pending = true;
        },
        ["LOGIN_SUCCESS"](state) {
            state.isLoggedIn = true;
            state.pending = false;
        },
        ["LOGOUT"](state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({state, commit, rootState}, creds) {
            console.log("login...", creds);
            commit("LOGIN");
            return new Promise(resolve => {
                setTimeout(() => {
                    localStorage.setItem("token", "JWT");
                    commit("LOGIN_SUCCESS");
                    resolve();
                }, 1000)
            })
        },
        logout({commit}) {
            localStorage.removeItem("token");
            commit("LOGOUT");
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn;
        }
    }
});

export default store;