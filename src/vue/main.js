import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import VueScrollBehavior from 'vue-scroll-behavior'
import VueProgressBar from 'vue-progressbar'
import ElementUI from 'element-ui'
import axios from 'axios'

import store from './store.js'
import routes from './routes.js'
import App from './app.vue'

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueProgressBar);
Vue.use(ElementUI);

Vue.prototype.$http = axios;


store.dispatch('detectLang');
const i18n = new VueI18n({
    locale: store.getters.selectedLang,
    fallback: 'ko'
});


let router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

router.beforeEach((to, from, next) => {
    // TODO: 로그인 체크
    next();
});

Vue.use(VueScrollBehavior, router);

Vue.component('lp-image', () => import('./components/image.vue'));

new Vue({
    i18n,
    router,
    store,
    el: '#app',
    render: h => h(App)
});
