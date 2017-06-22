const routes = [
    {
        path: '/',
        name: 'home',
        desc: 'AC 홈페이지',
        component: () => import('./views/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        desc: '로그인 페이지',
        component: () => import('./views/login.vue')
    },
    {
        path: '/merchants',
        name: 'merchants',
        desc: '광고주 목록 페이지',
        component: () => import('./views/merchants.vue')
    },
    {
        path: '/adboxes',
        name: 'adboxes',
        desc: '광고박스',
        component: () => import('./views/adboxes.vue')
    },
    {
        path: '/toolboxes',
        name: 'toolboxes',
        desc: '툴박스',
        component: () => import('./views/toolboxes.vue')
    },
    {
        path: '/events',
        name: 'events',
        desc: '이벤트',
        component: () => import('./views/events.vue')
    },
    {
        path: '/reports',
        name: 'reports',
        desc: '이벤트',
        component: () => import('./views/reports.vue')
    }
];

export default routes;