<template>
    <div class="nav-bottom">
        <div class="navs">
            <div :class="{'icon-pulse-2e2f6e':value !== 0,'icon-pulse-fc5185':value === 0}" class="nav" @click="$emit('input',0)">
                <div :class="{'select-anim':value === 0}"></div>
            </div>
            <div :class="{'icon-time-2e2f6e':value !== 1,'icon-time-fc5185':value === 1}" class="nav" @click="$emit('input',1)">
                <div :class="{'select-anim':value === 1}"></div>
            </div>
            <div :class="{'icon-my-2e2f6e':value !== 2,'icon-my-fc5185':value === 2}" class="nav" @click="$emit('input',2)">
                <div :class="{'select-anim':value === 2}"></div>
            </div>
            <div class="select" :style="{left:`${((100/3)*value)+(100/6)}%`}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBottom",
        props:['value']
    }
</script>

<style scoped lang="scss">
    .nav-bottom{
        height: 200px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        box-shadow:0 0 3px #cccccc;
        width: 100%;
        background-color: #ffffff;
    }
    .navs{
        position: absolute;
        top: 40px;
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        .nav{
            flex: 1;
            background-size: 50px;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            .select-anim{
                width: 80px;
                height: 80px;
                transform: scale(1);
                border: 5px solid #2e2f6e;
                border-radius: 50%;
                animation: select-anim .5s ease 1;
                opacity: 0;
            }
        }
        .select{
            position: absolute;
            width: 60px;
            height: 8px;
            background-color: #fc5185;
            border-radius: 8px;
            transform: translateX(-50%);
            bottom: 10px;
            transition: all 1s;
        }
    }
    @keyframes select-anim {
        0%{
            transform: scale(1);
            border: 5px solid #2e2f6e;
            opacity: 1;
        }
        50%{
            transform: scale(.8);
            border: 2px solid #2e2f6e;
            opacity: 1;
        }
        100%{
            transform: scale(1.2);
            border: 5px solid #2e2f6e;
            opacity: 0;
        }
    }
</style>