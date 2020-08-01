<template>
    <div class="index" @click="current++">
        <template v-for="(item,i) in $store.state.titles">
            <transition name="left-title"><left-title v-show="current === i" class="left-title"  :title="item.title" :content="item.content" :sub="item.sub" :dec="item.dec"/></transition>
        </template>
        <div class="charmain" :style="charStyles[current]">
            <character class="character"/>
            <char-bottom class="char-bottom"/>
        </div>
    </div>
</template>

<script>
    import LeftTitle from "../components/LeftTitle";
    import Character from "../components/Character";
    import CharBottom from "../components/CharBottom";
    export default {
        name: "Index",
        components: {CharBottom, Character, LeftTitle},
        data(){
            return{
                current:0,
                charStyles:[
                    {
                        right:"20vw",
                        top:"10vh"
                    },
                    {
                        right:"30vw",
                        top:"10vh"
                    },
                    {
                        width: "75vw",
                        height: "90vh",
                        right:"50vw",
                        transform:"translateX(50%)",
                        top:"10vh"
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .index{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .left-title{
        position: absolute;
        top: 80px;
        left: 50px;
    }
    .left-title-enter-active,.left-title-leave-active{
        transition: all 1s;
    }
    .left-title-enter{
        opacity: 0;
        transform: rotateY(-90deg) translateX(100%);
    }
    .left-title-leave-to {
        opacity: 0;
        transform: rotateY(90deg) translateX(-120px) translateZ(-60px);
    }

    .charmain{
        display: inline-block;
        width: 300px;
        height: 700px;
        position: absolute;
        transition: all 1s;
    }

</style>