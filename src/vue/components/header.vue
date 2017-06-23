<i18n>
    {
        "ko": {
            "home": "홈",
            "login": "로그인",
            "logout": "로그아웃",
            "helpdesk": "헬프데스크",
            "merchants": "광고주",
            "adboxes": "광고박스",
            "toolboxes": "툴박스",
            "events": "이벤트",
            "reports": "리포트"
        },
        "en": {
            "home": "Home",
            "login": "Login",
            "logout": "Logout",
            "helpdesk": "HelpDesk",
            "merchants": "Merchants",
            "adboxes": "AdBoxes",
            "toolboxes": "ToolBoxes",
            "events": "Events",
            "reports": "Reports"
        }
    }
</i18n>



<template>
    <header class="header" role="banner" :style="headerStyle">
        <div class="container">
            <el-row class="top-banner">
                <el-col :span="24" v-if="topBanner">
                    <a href="topBanner.targetUrl">
                        <img :src="topBanner.imageForPc" class="img-fluid" @load="onResize()">
                    </a>
                </el-col>
                <el-col :span="24" class="top-line" v-if="!topBanner"></el-col>
            </el-row>
            <el-row class="top-bar">
                <span>메시지 <router-link to="/messages">{{ newMailCount }}</router-link> 통</span>
                <a href="//helpdesk.linkprice.com">{{ $t("helpdesk") }}</a>
                <router-link to="/login" v-if="!isLoggedIn">{{ $t("login") }}</router-link>
                <a href="#" v-if="isLoggedIn" @click.prevent="logout">{{ $t("logout") }}</a>
                <span>홍길동님 <router-link to="/myinfo/commission-summarized"><span>127,566,858</span></router-link>원</span>
            </el-row>
            <el-row class="top-main">
                <el-col :span="6">
                    <router-link to="/"><img class="logo" :class="{'is-scrolled': isScrolled}" src="/images/logo.png"></router-link>
                </el-col>
                <el-col :span="12" class="navbar">
                    <router-link to="/merchants">{{ $t("merchants") }}</router-link>
                    <router-link to="/adboxes">{{ $t("adboxes") }}</router-link>
                    <router-link to="/toolboxes">{{ $t("toolboxes") }}</router-link>
                    <router-link to="/events">{{ $t("events") }}</router-link>
                    <router-link to="/reports">{{ $t("reports") }}</router-link>
                </el-col>
                <el-col :span="6"></el-col>
            </el-row>
            <div class="position">{{ scrollDownFromTop }}</div>
        </div>
    </header>
</template>



<style lang="scss">
    .top-line {
        border: 4px solid #33c;
    }

    .header {
        overflow: hidden;
        position: fixed;
        top: 0;
        margin: auto;
        z-index: 10000;
        width: 100%;
        background-color: white;
    }

    .top-bar {
        text-align: right;
        font-size: 14px;
        padding: 8px;
    }

    .top-main {
        .logo {
            width: 150px;
            &.is-scrolled {
                width: 120px;
            }
        }
        .navbar {
            padding-top: 20px;
            font-size: 18px;
            text-align: center;
        }
    }

    .position {
        position: fixed;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
    }
</style>



<script>
    export default {
        data() {
            return {
                topBanner: {
                    imageForPc: '/images/top_banner_pc.png',
                    imageForMobile: '/images/top_banner_mobile.png',
                    targetUrl: ''
                },
                newMailCount: 30,
                headerHeight: 200,
                bannerHeight: 79,
                scrollDownFromTop: 0,
                isScrolled: false,
                headerStyle: {
                    top: 0
                }
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            },
            onScroll(e) {
                this.scrollDownFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (this.scrollDownFromTop > 0) {
                    this.headerStyle.top = -1 * Math.min(this.bannerHeight, this.scrollDownFromTop) + 'px'
                } else {
                    this.headerStyle.top = 0
                }
                this.isScrolled = this.scrollDownFromTop > this.bannerHeight
            },
            onResize() {
                let tagBanner = document.querySelector('.top-banner')
                this.bannerHeight = tagBanner.offsetHeight | tagBanner.clientHeight
                let tagHeader = this.$el
                let tagContent = document.querySelector('#content')
                this.headerHeight = tagHeader.offsetHeight | tagHeader.clientHeight
                tagContent.style.marginTop = this.headerHeight + 24 + 'px'
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            }
        },
        mounted() {
            this.onResize()
        },
        created() {
            window.addEventListener('scroll', this.onScroll)
            window.addEventListener('resize', this.onResize)
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll)
            window.removeEventListener('resize', this.onResize)
        }
    }
</script>