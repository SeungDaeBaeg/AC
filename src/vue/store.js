import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    isLoggedIn: localStorage.getItem("token"),
    selectedLang: localStorage.getItem("selectedLang"),
    supportedLang: ["ko", "en"]
};

const mutations = {
    LOGIN(state) {
        state.pending = true;
    },
    LOGIN_SUCCESS(state) {
        state.isLoggedIn = true;
        state.pending = false;
    },
    LOGOUT(state) {
        state.isLoggedIn = false;
    },
    SET_LANG(state, {lang}) {
        state.selectedLang = lang;
    }
};


const actions = {
    // 로그인
    login({commit}, creds) {
        commit("LOGIN");
        return new Promise(resolve => {
            setTimeout(() => {
                localStorage.setItem("token", "JWT");
                commit("LOGIN_SUCCESS");
                resolve();
            }, 1000)
        })
    },

    // 로그아웃
    logout({commit}) {
        localStorage.removeItem("token");
        commit("LOGOUT");
    },

    // 자동으로 언어 감지
    // 로컬스토리지에 저장된 값이 있다면 아무것도 하지 않음
    // 로컬스토리지에 저장된 값이 없다면 브라우저 환경값에서 값을 읽어 들인 후, 그 값을 커밋
    // 커밋후에 로케일도 변경
    detectLang({state, dispatch, commit}) {
        const savedLang = localStorage.getItem("selectedLang");
        if (state.supportedLang.indexOf(savedLang) === -1) {
            let detectedLang = navigator.language || navigator.userLanguage;
            dispatch("setLang", detectedLang);
        }
    },

    // 페이지에서 언어 변경을 선택했을 경우 이 함수 호출
    // 로컬스토리지에 저장된 값의 유무에 상관없이 무조건 lang 값으로 커밋
    // 커밋후에 로케일도 변경
    setLang({state, commit}, lang) {
        if (state.supportedLang.indexOf(lang) === -1) {
            lang = "en";
        }

        localStorage.setItem("selectedLang", lang);
        commit("SET_LANG", {lang: lang});

        location.reload();
    }
};

const getters = {
    isLoggedIn: state => {
        return state.isLoggedIn;
    },
    selectedLang: state => {
        return state.selectedLang;
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});