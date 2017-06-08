<i18n>
{
    "ko": {
        "home": "홈",
        "login": "로그인",
        "logout": "로그아웃"
    },
    "en": {
        "home": "Home",
        "login": "Login",
        "logout": "Logout"
    }
}
</i18n>

<template>
    <section class="header">
        <router-link to="/">{{ $t('home') }}</router-link>
        <router-link to="/login" v-if="!isLoggedIn">{{ $t('login') }}</router-link>
        <a href="#" v-if="isLoggedIn" @click.prevent="logout">{{ $t('logout') }}</a>
    </section>
</template>

<script>
    export default {
        methods: {
            ...Vuex.mapActions(["logout"])
        },
        computed: {
            ...Vuex.mapGetters(["isLoggedIn"])
        }
    }
</script>