<i18n>
    {
        "ko": {
            "ko": "Korean",
            "en": "English",
            "about-us": "회사소개",
            "privacy": "개인정보보호정책",
            "agreement": "이용약관"
        },
        "en": {
            "ko": "한국어",
            "en": "영어",
            "about-us": "About Us",
            "privacy": "Privacy",
            "agreement": "Agreement"
        }
    }
</i18n>



<template>
    <footer class="footer" role="contentinfo">
        <div class="container">
            <ul>
                <li><a href="//www.linkprice.com/home/linkprice0601.htm">{{ $t('about-us') }}</a></li>
                <li><a href="//www.linkprice.com/home/linkprice0703.htm">{{ $t('privacy') }}</a></li>
                <li><a href="//www.linkprice.com/home/linkprice0704.htm">{{ $t('agreement') }}</a></li>
            </ul>
            <ul>
                <li><a href="" @click.prevent="setLang('ko')">{{ $t('ko') }}</a></li>
                <li><a href="" @click.prevent="setLang('en')">{{ $t('en') }}</a></li>
            </ul>
        </div>
    </footer>
</template>



<style lang="scss">
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