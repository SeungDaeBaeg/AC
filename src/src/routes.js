const Home = () => import('./views/home.vue');
const Login = () => import('./views/login.vue');

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login}
];

export default routes;