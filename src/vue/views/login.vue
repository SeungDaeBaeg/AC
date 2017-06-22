<i18n>
    {
        "ko": {
        },
        "en": {
        }
    }
</i18n>

<template>
    <div class="main-view">
        <form @submit.prevent="login()">
            <input type="text" placeholder="ID" v-model="id">
            <input type="password" placeholder="Password" v-model="pw">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style lang="scss">
</style>

<script>
    export default {
        data() {
            return {
                id: "",
                pw: ""
            }
        },
        methods: {
            login() {
                this.$store.dispatch("login", {
                    id: this.id,
                    pw: this.pw
                }).then(res => {
                    this.$router.push('/');
                })
            }
        }
    }
</script>