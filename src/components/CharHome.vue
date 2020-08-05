<template>
    <div class="char-home">
        <svg width="100%" height="100%">
            <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" style="stroke:none; fill: #FFFCFB"></rect>
                <circle id="circle1" cx="50%" cy="35%" r="100" style="fill: #000" />
            </mask>
            <rect x="0" y="0" width="100%" height="100%" style="stroke: none; fill: #FFFCFB; mask: url(#mask)"></rect>
        </svg>
        <p class="user-name">Daily goals</p>
    </div>
</template>

<script>
    export default {
        name: "CharHome"
    }
</script>

<style scoped>
    .char-home{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .user-name{
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: #AAA1B0;
        position: absolute;
        top: 52vh;
        font-weight: 600;
    }
</style>