<i18n>
    {
        "ko": {
            "ko": "Korean",
            "en": "English",
            "about-us": "회사소개",
            "privacy": "개인정보보호정책",
            "refusing": "이메일 무단수집 거부",
            "agreement": "이용약관",
            "patners": "협력업체"
        },
        "en": {
            "ko": "한국어",
            "en": "영어",
            "about-us": "About Us",
            "privacy": "Privacy",
            "refusing": "refusing to collect e-mails",
            "agreement": "Agreement",
            "patners": "Partners"
        }
    }

</i18n>



<template>
    <footer class="footer" role="contentinfo">
        <div class="top-container">
            <div class="container">
                <el-row>
                    <el-col :xs="0" :sm="4" :md="4" :lg="4" class="language">
                        <img class="national-flag" src="/images/korean.png"><a href="" @click.prevent="setLang('ko')">{{ $t('ko') }}</a>
                        <!--<li class="national-flag"><img class="logo" src="/images/korean.png"><a href="" @click.prevent="setLang('en')">{{ $t('en') }}</a></li>-->
                    </el-col>
                    <el-col :xs="24" :sm="16" :md="16" :lg="16" class="navbar">
                        <router-link to="//www.linkprice.com/home/linkprice0601.htm" class="list">{{ $t("about-us") }}</router-link>
                        <router-link to="//www.linkprice.com/home/linkprice0703.htm" class="list">{{ $t("privacy") }}</router-link>
                        <router-link to="//www.linkprice.com/home/linkprice0703.htm" class="list">{{ $t("refusing") }}</router-link>
                        <router-link to="//www.linkprice.com/home/linkprice0704.htm" class="list">{{ $t("agreement") }}</router-link>
                        <router-link to="//www.linkprice.com/home/linkprice0704.htm" class="list">{{ $t("patners") }}</router-link>
                    </el-col>
                    <el-col :xs="0" :sm="4" :md="4" :lg="4" >
                        <a href="#" class="top-btn">TOP</a>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="bottom-container">
            <router-link to="/"><img class="logo" src="/images/footer_logo.png"></router-link>
            <p class="text">
                (주)링크프라이스  |  대표이사 : 박진영, 박윤봉<br/>
                사업자등록번호 : 120-87-01134  |  통신판매업신고번호 : 강남-11334호<br/>
                (우) 06174 서울시 강남구 영동대로 86길 21 (대치동, 태화빌딩 2층)  |  개인정보 책임자 : 김진용<br/>
                COPYRIGHT ⓒ LINKPRICE. ALL RIGHTS RESERVED.
            </p>
        </div>
    </footer>
</template>



<style lang="scss">
    @import '../../scss/variables';
    @import '../../scss/placeholders';

    .footer {
        border-top: 1px solid #999;
        .top-container{
            height: 60px;
            line-height: 60px;
            @extend %b-b-normal;
            @media (max-width: 768px) {
                padding: 30px 40px 0 40px;
                border-bottom: 0px solid #fff;
            }
            .language{
                line-height: 60px;
                @media (max-width: 768px) {
                    display: none;
                }
                .national-flag{
                    margin: 0 7px 0 25px;
                    @extend %b-a-normal;
                }
            }
            .navbar{
                text-align: center;
                .list {
                    @extend %p-x-12;
                    @extend %b-l-normal;
                    @extend %font-sub-light;
                    @media (max-width: 768px) {
                        @include navar-list;
                    }
                }
            }
            .top-btn{
                @extend %font-small;
                @extend %b-a-normal;
                display: inline-block;
                float: right;
                margin: 10px 15px 0 0;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border-radius: 40px;
                line-height: 40px;
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
        .bottom-container{
            height: 200px;
            text-align: center;
            .logo{
                margin-top: 40px;
            }
            .text{
                @extend %font-small;
                line-height: 18px;
                color: #999;
            }
        }
    }
</style>



<script>
export default {
    methods: {
        setLang(lang) {
            this.$store.dispatch('setLang', lang);
        }
    }
}
</script>