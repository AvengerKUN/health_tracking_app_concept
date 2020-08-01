<template>
    <div class="left-title">
        <p v-if="title" class="title">{{title}}</p>
        <p v-if="content" class="content-title">{{content}}<span v-if="dec">%</span></p>
        <p v-if="sub" class="sub-title">{{sub}}</p>
    </div>
</template>

<script>
    export default {
        name: "LeftTitle",
        props:['title','content','sub','dec'],
    }
</script>

<style scoped lang="scss">
    .left-title{
        display: inline-block;
    }
    .title{
        color: #232349;
        font-size: 16px;
        font-weight: 600;
    }
    .content-title{
        color: #232349;
        font-size: 130px;
        font-weight: 500;
        span{
            color: #AAA1B0;
            font-size: 36px;
            font-weight: 600;
        }
    }
    .sub-title{
        font-size: 12px;
        color: #AAA1B0;
    }
</style>