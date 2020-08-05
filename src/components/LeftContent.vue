<template>
    <div class="left-content">
        <div class="list fire icon-fire-ff6d3f">
            <div class="content">
                <p class="num">1,840</p>
                <p class="tig">calories</p>
            </div>
        </div>
        <div class="list footprint icon-footprint-7a57d1">
            <div class="content">
                <p class="num">3,248</p>
                <p class="tig">steps</p>
            </div>
        </div>
        <div class="list moon icon-moon-50c4ed">
            <div class="content">
                <p class="num">6.5</p>
                <p class="tig">hours</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftContent"
    }
</script>

<style scoped lang="scss">
    .left-content{
        width: 250px;
        height: 500px;
        display: inline-block;
    }
    .list{
        width: 100%;
        height: 120px;
        background-position: 10px center;
        background-size: auto 55%;
        position: relative;
        .content{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 50px;
            .num{
                min-width: 100px;
                text-align: left;
                font-weight: 600;
                font-size: 36px;
                color: rgba(46,47,110);
            }
            .tig{
                font-weight: 400;
                font-size: 16px;
                color: #cccccc;
            }
        }
    }
</style>