import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import VueProgressBar from 'vue-progressbar'
import ElementUI from 'element-ui'

import store from './store.js'
import routes from './routes.js'
import App from './app.vue'

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueProgressBar);
Vue.use(ElementUI);

const i18n = new VueI18n({
    locale: 'ko',
    fallback: 'ko'
});

let router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    // TODO: 로그인 체크
    next();
});

new Vue({
    i18n,
    router,
    store,
    el: '#app',
    render: h => h(App)
});
