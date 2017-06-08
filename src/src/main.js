import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

import store from './store.js'
import routes from './routes.js'
import App from './app.vue'

Vue.use(VueRouter);
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'ko',
    fallback: 'ko'
});

let router = new VueRouter({
    saveScrollPosition: true,
    history: true,
    routes: routes
});

router.beforeEach((to, from, next) => {
    console.log('from:' + from);
    console.log('to:' + to);
    next();
});

new Vue({
    i18n,
    router,
    store,
    el: '#app',
    render: h => h(App)
});
