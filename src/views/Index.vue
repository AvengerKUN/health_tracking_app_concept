<template>
    <div class="index">
        <template v-for="(item,i) in $store.state.titles">
            <transition name="left-title"><left-title v-show="current === i" class="left-title"  :title="item.title" :content="item.content" :sub="item.sub" :dec="item.dec"/></transition>
        </template>

        <div class="charmain" :style="charStyles[current]">
            <character ref="character" class="character"/>
            <div class="char-bottoms">
                <char-bottom v-for="(item,i) in charBottoms" ref="char-bottom" :style="{width:`${40+(i*9)}vw`,height:`${40+(i*9)}vw`}" class="char-bottom" :value="item.value" :color="item.color"/>
            </div>
        </div>
        <transition name="home-left-content">
            <left-content v-if="current === 0" class="left-content"/>
        </transition>

        <div class="character-bg" :style="{left:`${current === 1 ? '0' : current === 0 ? '100vw' : '-100vw'}`}">
            <char-b-g ref="char-b-g"/>
        </div>

        <char-home class="char-home" :style="{left:`${current === 2 ? '0' : '100vw'}`}"/>

        <nav-bottom class="nav-bottom" v-model="current"/>
    </div>
</template>

<script>
    import LeftTitle from "../components/LeftTitle";
    import Character from "../components/Character";
    import CharBottom from "../components/CharBottom";
    import LeftContent from "../components/LeftContent";
    import CharBG from "../components/CharBG";
    import CharHome from "../components/CharHome";
    import NavBottom from "../components/NavBottom";
    export default {
        name: "Index",
        components: {NavBottom, CharHome, CharBG, LeftContent, CharBottom, Character, LeftTitle},
        watch:{
            current(newVal,otlVal){

                if(newVal === 0)
                    this.toCurrentA(otlVal);
                if(newVal === 1)
                    this.toCurrentB(otlVal);
                if(newVal === 2)
                    this.toCurrentC(otlVal);

            }
        },
        data(){
            return{
                current:0,
                charStyles:[
                    {
                        right:"5vw",
                        top:"10vh"
                    },
                    {
                        right:"15vw",
                        top:"15vh"
                    },
                    {
                        width: "80vw",
                        height: "80vh",
                        right:"50vw",
                        transform:"translateX(50%)",
                        top:"15vh"
                    },
                ],
                charBottoms:[
                    {
                        value: 62,
                        color: "#f07b3f"
                    },
                    {
                        value: 70,
                        color: "#5d13e7"
                    },
                    {
                        value: 75,
                        color: "#50c4ed"
                    },
                ],
            }
        },
        methods:{
            toCurrentA(otlVal){
                if(otlVal === 1){
                    this.$refs['character'].moveFront();
                }
                for(let i in this.$refs['char-bottom']){
                    this.$refs['char-bottom'][i].play();
                }
            },
            toCurrentB(){
                for(let i in this.$refs['char-bottom']){
                    this.$refs['char-bottom'][i].hide();
                }
                this.$refs['character'].moveLeft();
                // this.$refs['char-b-g'].play();
            },
            toCurrentC(otlVal){
                for(let i in this.$refs['char-bottom']){
                    this.$refs['char-bottom'][i].hide();
                }
                if(otlVal === 1){
                    this.$refs['character'].moveFront();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .index{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: rgba(250,245,239);
    }

    .left-title{
        position: absolute;
        z-index: 9;
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
        width: 450px;
        height: 750px;
        position: absolute;
        transition: all 1s;
        z-index: 1;
        .character{
            position: absolute;
            z-index: 1;
        }
        .char-bottoms{
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotateX(-60deg) rotateZ(30deg);
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 65px;
        }
    }

    .left-content{
        position: absolute;
        top: 350px;
        left: 30px;
    }
    .home-left-content-enter-active,.home-left-content-leave-active{
        transition: all 1s;
    }
    .home-left-content-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .home-left-content-leave-to {
        opacity: 0;
        transform: translateX(-120px);
    }

    .character-bg{
        width: 100vw;
        height: 500px;
        position: absolute;
        top: 20vh;
        overflow: hidden;
        transition: all 1s;
    }

    .char-home{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        transition: all 1s;
    }

    .nav-bottom{
        z-index: 9;
        position: absolute;
        bottom: 0;
    }

</style>