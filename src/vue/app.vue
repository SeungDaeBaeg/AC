<i18n>
{
    "ko": {
        "page-title": "링크프라이스 어필레이트 센터"
    },
    "en": {
        "page-title": "Linkprice Affiliate Center"
    }
}
</i18n>

<template>
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        <ac-header></ac-header>
        <transition>
            <div id="content" class="container" role="main">
                <router-view></router-view>
            </div>
        </transition>
        <ac-footer></ac-footer>
    </div>
</template>

<script>
import AcHeader from './components/header.vue';
import AcFooter from './components/footer.vue';

export default {
    components: {
        'ac-header': AcHeader,
        'ac-footer': AcFooter
    },
    mounted() {
        this.$Progress.finish();
    },
    created() {
        this.$Progress.start();
        this.$router.beforeEach((to, from, next) => {
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                this.$Progress.parseMeta(meta)
            }
            this.$Progress.start()
            next()
        })
        this.$router.afterEach((to, from) => {
            this.$Progress.finish()
        })
    }
}
</script>

<style lang="scss">
@import '../scss/normalize';
@import '../scss/container';

#app {
    margin-top: 4px;
}
</style>
