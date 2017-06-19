<i18n>
{
    "ko": {
        "title": "AC 메인 페이지"
    },
    "en": {
        "title": "AC Main Page"
    }
}
</i18n>

<template>
    <div class="main-view">
        <el-row>
            <el-col :span="24"><h1 class="font-title">{{ $t("title") }}</h1></el-col>
        </el-row>
        <el-row>
            <el-col :xs="12" :md="6">x1</el-col>
            <el-col :xs="12" :md="6">x2</el-col>
            <el-col :xs="12" :md="6">x3</el-col>
            <el-col :xs="12" :md="6">x4</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    }
</script>