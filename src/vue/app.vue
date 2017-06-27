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



<style lang="scss">
    @import '../node_modules/vue2-animate/dist/vue2-animate.min.css';
    @import '../scss/normalize';
    @import '../scss/container';
    @import '../scss/fonts';
    @import '../scss/placeholders';
    @import '../scss/common';

    body {
        @extend %font-body;
    }

    #app {
        margin-top: 0;
    }
</style>



<script>
import AcHeader from './components/header.vue';
import AcFooter from './components/footer.vue';
import AcImage from './components/image.vue';

export default {
    components: {
        'ac-header': AcHeader,
        'ac-footer': AcFooter,
        'ac-image': AcImage
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


