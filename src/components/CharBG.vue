<template>
    <div class="char-bg">
        <div class="triangle" v-for="(item,i) in triangles" :key="i" :style="{zoom:item.zoom}"></div>
    </div>
</template>

<script>
    export default {
        name: "CharBG",
        data(){
            return{
                time:null,
                triangles:[]
            }
        },
        mounted() {
            let that = this;
            let time = setInterval(() => {
                if(that.triangles.length < 10){
                    that.triangles.push({
                        zoom:(Math.random()*2)+1
                    })
                }else{
                    clearInterval(time);
                }
            },3000)
        }
    }
</script>

<style scoped lang="scss">
    .char-bg{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .triangle{
        position: absolute;
        bottom: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid rgba(243,230,225,.8);
        animation: move 12s linear infinite;
    }
    @keyframes move {
        from{
            right: -100px;
        }
        to{
            right: 750px;
        }
    }
</style>