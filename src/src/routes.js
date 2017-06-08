const Home = resolve => require(['./views/home.vue'], resolve);
const Login = resolve => require(['./views/login.vue'], resolve);

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login}
];

export default routes;