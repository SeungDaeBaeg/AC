<template>
    <img :src="src" @load="onLoad()">
</template>

<script>
    export default {
        data() {
            return {
                src: '/images/blank.png'
            }
        },
        props: {
            pc: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
                required: true
            }
        },
        methods: {
            onResize() {
                let width = window.innerWidth || document.body.clientWidth
                if (width >= 578) {
                    this.src = this.pc
                } else {
                    this.src = this.mobile
                }
            },
            onLoad() {
                this.$emit('loaded')
            }
        },
        mounted() {
            this.onResize()
        },
        created() {
            window.addEventListener('resize', this.onResize)
        },
        destroyed() {
            window.removeEventListener('resize', this.onResize)
        }
    }
</script>