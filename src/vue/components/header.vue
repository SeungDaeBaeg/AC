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
        <div class="top-banner">
            <div class="container">
                <el-row>
                    <el-col :span="24" v-if="topBanner">
                        <a :href="topBanner.targetUrl">
                            <lp-image
                                    class="img-fluid banner-image"
                                    v-on:loaded="onResize"
                                    :pc="topBanner.imageForPc"
                                    :mobile="topBanner.imageForMobile">
                            </lp-image>
                        </a>
                    </el-col>
                    <el-col :span="24" class="top-line" v-if="!topBanner"></el-col>
                </el-row>
            </div>
        </div>
        <div class="top-menu">
            <div class="container">
                <el-row>
                    <span class="item">M <router-link to="/messages">{{ newMailCount }}</router-link> 통</span>
                    <span class="item"><a href="//helpdesk.linkprice.com">{{ $t("helpdesk") }}</a></span>
                    <span class="item"><router-link to="/login" v-if="!isLoggedIn">{{ $t("login") }}</router-link></span>
                    <span class="item"><a href="#" v-if="isLoggedIn" @click.prevent="logout">{{ $t("logout") }}</a></span>
                    <span class="item item-commission">홍길동님
                        <router-link to="/myinfo/commission-summarized">
                            <span class="font-commission">127,566,858</span>
                        </router-link>원
                    </span>
                </el-row>
            </div>
        </div>
        <div class="main-menu">
            <div class="container">
                <el-row>
                    <el-col :span="6">
                        <router-link to="/"><img class="logo" src="/images/logo.png"></router-link>
                    </el-col>
                    <el-col :span="12" class="navbar">
                        <router-link to="/merchants" class="nav-item">{{ $t("merchants") }}</router-link>
                        <router-link to="/adboxes" class="nav-item">{{ $t("adboxes") }}</router-link>
                        <router-link to="/toolboxes" class="nav-item">{{ $t("toolboxes") }}</router-link>
                        <router-link to="/events" class="nav-item">{{ $t("events") }}</router-link>
                        <router-link to="/reports" class="nav-item">{{ $t("reports") }}</router-link>
                    </el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </div>
        </div>
    </header>
</template>



<style lang="scss">
    @import '../../scss/variables';
    @import '../../scss/placeholders';

    .top-line {
        border: 4px solid #33c;
    }

    .header {
        position: fixed;
        margin: auto;
        width: 100%;
        z-index: $zindex-navbar;
        background-color: white;
        .top-banner {
            background-color: $color-top-banner;
            .banner-image {
                margin-bottom: -8px;
            }
        }
        .top-menu {
            text-align: right;
            @extend %p-y-8;
            @extend %b-b-normal;
            @extend %font-sub;
            .item {
                @extend %p-l-16;
                @extend %b-l-normal;
            }
            .font-commission {
                @extend %font-title-main;
            }
        }
        .main-menu {
            @extend %p-y-8;
            @extend %b-b-main;
            .logo {
                width: 150px;
                &.is-scrolled {
                    width: 120px;
                }
            }
            .navbar {
                @extend %p-t-16;
                text-align: center;
                .nav-item {
                    @extend %font-title-black;
                    @extend %p-a-8;
                }
            }
        }
    }
</style>



<script>
    export default {
        data() {
            return {
                topBanner: {
                    imageForPc: '/images/top_banner_pc.png',
                    imageForMobile: '/images/top_banner_mobile.png',
                    targetUrl: '//www.linkprice.com'
                },
                newMailCount: 30,
                headerHeight: 200,
                bannerHeight: 79,
                topMenuHeight: 44,
                scrollDownFromTop: 0,
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
                    this.headerStyle.top = -1 * Math.min(this.bannerHeight + this.topMenuHeight, this.scrollDownFromTop) + 'px'
                } else {
                    this.headerStyle.top = 0
                }
            },
            onResize() {
                let tagBanner = document.querySelector('.top-banner')
                let tagHeader = this.$el
                let tagContent = document.querySelector('#content')
                let tagTopMenu = this.$el.querySelector('.top-menu')
                this.bannerHeight = tagBanner.offsetHeight
                this.topMenuHeight = tagTopMenu.offsetHeight
                this.headerHeight = tagHeader.offsetHeight
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